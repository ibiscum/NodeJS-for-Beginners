import {
  Whisper
} from './database.js'

const getAll = () => Whisper.find()
const getById = id => Whisper.findById({ _id: id })
const create = async (message) => {
  const whisper = new Whisper({ message })
  await whisper.save()
  return whisper
}
const updateById = async (id, message) => {
  if (typeof message !== 'string') {
    throw new Error('Message must be a string');
  }
  return Whisper.findOneAndUpdate({ _id: id }, { message }, { new: false });
}
const deleteById = async (id) => Whisper.deleteOne({ _id: id })

export { getAll, getById, create, updateById, deleteById }
