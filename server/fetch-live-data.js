const axios = require('axios')

const EXCH_RATES_URI = 'https://api.coingecko.com/api/v3/exchange_rates'

module.exports.updateLiveData = (db) => {
  return axios.get(EXCH_RATES_URI).then((res) => {
    let liveOrders = [
      {
        from: { currency: 'Bitcoin', amount: res.data.rates.btc.value },
        to: { currency: 'USD', amount: res.data.rates.usd.value },
        orderDate: new Date().toISOString(),
      },
      {
        from: { currency: 'Ethereum', amount: 1 },
        to: { currency: 'USD', amount: res.data.rates.usd.value * res.data.rates.eth.value },
        orderDate: new Date().toISOString(),
      },
      {
        from: { currency: 'Litecoin', amount: 1 },
        to: {
          currency: 'USD',
          amount: res.data.rates.usd.value * res.data.rates.ltc.value,
        },
        orderDate: new Date().toISOString(),
      },
    ]
    db.collection('orders').insertMany(liveOrders)
  })
}
