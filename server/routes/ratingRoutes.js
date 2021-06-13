import express from 'express'

import { getRatingList, addRating } from '../controllers/ratingControllers.js'

const router = express.Router()

router.get('/rating', getRatingList)
router.post('/rating', addRating)

export default router
