import BestScores from '../models/ratingModel.js'

export const getRatingList = (req, res) => {
  BestScores.find({}).exec((error, scores) => {
    if (error) return res.status(401).json({ error })
    scores.sort((a, b) => b.rating - a.rating).slice(0, 10)
    return res.json(scores)
  })
}

export const addRating = (req, res) => {
  const { name, rating } = req.body
  const newRating = new BestScores({ name, rating })

  newRating.save((err, rating) => {
    if (err) return res.status(401).json({ err })
    return res.json({ message: 'Запись добавлена' })
  })
}
