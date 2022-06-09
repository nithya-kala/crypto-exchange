// Support for .env. See https://github.com/motdotla/dotenv
require('dotenv').config()

const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')
const { getEnv } = require('./utils')

const mongoClient = new MongoClient(getEnv('MONGO_URI'))
const PORT = process.env.PORT || 3000

// Global mongoDB instance
let db

// Connect to the MongoDB cluster
mongoClient.connect((err, database) => {
  if (err) throw err
  db = database.db()
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/get-orders', async (req, res) => {
  try {
    let orders = await db.collection('orders').find({
      Form: 'fOrders',
    })
    res.json(orders)
  } catch (err) {
    throw err
  }
})

app.listen(PORT, () => console.log(`API Server listening on ${PORT}`))
