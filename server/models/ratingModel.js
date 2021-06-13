import mongoose from 'mongoose'
const { Schema, model } = mongoose

const ratingSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  rating: {
    type: Number
  }
}, { timestamps: true })

export default model('BestScores', ratingSchema)
