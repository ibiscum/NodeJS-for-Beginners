import express from 'express'
import bodyParser from 'body-parser'
import rateLimit from 'express-rate-limit'
import * as whisper from './stores/whisper.js'
import * as user from './stores/user.js'
import { generateToken, requireAuthentication } from './utils.js'

// Import express-rate-limit for rate limiting sensitive endpoints
import rateLimit from 'express-rate-limit'

const app = express()
// Define a rate limiter for DELETE requests (e.g., max 10 per 15 minutes)
const deleteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 delete requests per windowMs
  message: 'Too many delete requests from this IP, please try again later'
})

// Define a rate limiter for GET whisper by ID requests (e.g., max 100 per 15 minutes)
const getWhisperLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 get requests per windowMs
  message: 'Too many whisper requests from this IP, please try again later'
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.get('/logout', (req, res) => {
  res.redirect('/login')
})

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const foundUser = await user.getUserByCredentials(username, password)
    const accessToken = generateToken({ username, id: foundUser._id })
    res.json({ accessToken })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})
app.post('/signup', async (req, res) => {
  try {
    const { username, password, email } = req.body
    const newUser = await user.create(username, password, email)
    const accessToken = generateToken({ username, id: newUser._id })
    res.json({ accessToken })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

app.get('/about', async (req, res) => {
  const whispers = await whisper.getAll()
  res.render('about', { whispers })
})

app.get('/api/v1/whisper', requireAuthentication, async (req, res) => {
  const whispers = await whisper.getAll()
  res.json(whispers)
})

app.get('/api/v1/whisper/:id', getWhisperLimiter, requireAuthentication, async (req, res) => {
  const id = req.params.id
  const storedWhisper = await whisper.getById(id)
  if (!storedWhisper) {
    res.sendStatus(404)
  } else {
    res.json(storedWhisper)
  }
})

app.post('/api/v1/whisper', requireAuthentication, async (req, res) => {
  const { message } = req.body
  if (!message) {
    res.sendStatus(400)
    return
  }
  const newWhisper = await whisper.create(message, req.user.id)
  res.status(201).json(newWhisper)
})

app.put('/api/v1/whisper/:id', requireAuthentication, async (req, res) => {
  const { message } = req.body
  const id = req.params.id
  if (typeof message !== 'string' || !message) {
    res.sendStatus(400)
    return
  }
  const storedWhisper = await whisper.getById(id)
  if (!storedWhisper) {
    res.sendStatus(404)
    return
  }

  if (storedWhisper.author.id !== req.user.id) {
    res.sendStatus(403)
    return
  }
  await whisper.updateById(id, message)
  res.sendStatus(200)
})

app.delete('/api/v1/whisper/:id', deleteLimiter, requireAuthentication, async (req, res) => {
  const id = req.params.id
  const storedWhisper = await whisper.getById(id)
  if (!storedWhisper) {
    res.sendStatus(404)
    return
  }
  if (storedWhisper.author.id !== req.user.id) {
    res.sendStatus(403)
    return
  }
  await whisper.deleteById(id)
  res.sendStatus(200)
})

export { app }
