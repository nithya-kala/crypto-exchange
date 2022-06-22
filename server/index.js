const axios = require('axios')
require('dotenv').config()
console.log(process.env)

const express = require('express')
const app = express()
const { MongoClient, mongodbObjectId } = require('mongodb')
const http = require('http')
const bodyParser = require('body-parser')
const dayjs = require('dayjs')
const { updateLiveData } = require('./fetch-live-data')

const mongoClient = new MongoClient(process.env.MONGO_URI)
const PORT = process.env.PORT || 4000

// Global mongoDB instance
let db

// Connect to the MongoDB cluster
mongoClient.connect((err, database) => {
  if (err) throw err
  db = database.db()
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Crypto API')
})

app.post('/api/insert-order', async (req, res) => {
  console.log('req: ', req.body)
  let record_id = req._id
  try {
    if (record_id === '' || record_id === undefined) {
      const insertedRecord = await db.collection('orders').insertOne(req.body)
      res.json({ id: insertedRecord.insertedId })
    } else {
      delete req.body._id
      await db.collection('orders').updateOne({
        _id: mongodbObjectId(record_id),
        $set: req.body,
      })
      res.json({ id: record_id })
    }
  } catch (err) {
    throw err
  }
})

app.post('/api/insert-liveorders', async (req, res) => {
  console.log('req: ', req.body)
  try {
    let liveOrders = req.body
    await db.collection('orders').insertMany(liveOrders)
    res.json('Live orders inserted')
  } catch (error) {
    throw error
  }
})

app.get('/api/get-orders', async (req, res) => {
  const filter = {}
  const ordDate = req.query.ordDate
  if (ordDate) {
    filter['orderdate'] = {
      $gte: dayjs(ordDate).startOf('day').toDate(),
      $lte: dayjs(ordDate).endOf('day').toDate(),
    }
  }
  const orders = await db.collection('orders').find(filter).toArray()
  res.json(orders)
})

app.get('/api/get-liverates', async (req, res) => {
  axios
    .get('https://api.coingecko.com/api/v3/exchange_rates')
    .then((liveorders) => {
      res.send(JSON.stringify(liveorders.data))
    })
})

const server = http.createServer(app)
server.listen(PORT, () => console.log(`API Server listening on ${PORT}`))

// Get the Exchange Live Data from Coinbase API and save
setInterval(
  () => updateLiveData(db).catch(console.error),
  process.env.LIVEDATA_INTERVAL,
)
