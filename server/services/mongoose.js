import mongoose from 'mongoose'

const dbConnect = () => {
  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
  mongoose
    .connect(process.env.MONGO_URL, mongooseOptions)
    .then(() => console.log('DB is successfully connected'))
    .catch((e) => console.log(`DB connect ERROR\n ${e}`))
}
export default dbConnect
