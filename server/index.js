// Support for .env. See https://github.com/motdotla/dotenv
require('dotenv').config()

const express = require('express')
const app = express()
const { MongoClient, mongodbObjectId } = require('mongodb')
const { getEnv } = require('./utils')
const http = require('http')
const bodyParser = require('body-parser')

const dayjs = require('dayjs')

const mongoClient = new MongoClient(getEnv('MONGO_URI'))
const PORT = process.env.PORT || 8080

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

app.get('/api/get-orders', async (req, res) => {
  const filter = {}
  const ordDate = req.query.ordDate
  if (ordDate) {
    filter['orderDate'] = {
      $gte: dayjs(ordDate).startOf('day').toDate(),
      $lte: dayjs(ordDate).endOf('day').toDate(),
    }
  }

  console.log('filter: ', filter)
  const orders = await db.collection('orders').find(filter).toArray()
  res.json(orders)
})

const server = http.createServer(app)
server.listen(PORT, () => console.log(`API Server listening on ${PORT}`))
