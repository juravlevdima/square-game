import BestScores from '../models/ratingModel.js'

export const getRatingList = (req, res) => {
  BestScores.find({}).exec((error, scores) => {
    if (error) return res.status(500).json({ error })
    scores.sort((a, b) => b.rating - a.rating)
    return res.json(scores.slice(0, 10))
  })
}

export const addRating = (req, res) => {
  const { name, rating } = req.body
  const newRating = new BestScores({ name, rating })

  newRating.save((error, rating) => {
    if (error) return res.status(500).json({ error })
    return res.json({ message: 'Запись добавлена' })
  })
}
