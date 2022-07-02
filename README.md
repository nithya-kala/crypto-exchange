# crypto-exchange

 - Basic app used to display several currency exchange rates 
 - Allows user to exchange the Crypto (Bitcoin, Ripple etc) for Currencies (USD, INR, EUROS etc)
 - Self Learning app
 
## Technology Stack

The application consists of a React front-end client and a Node back-end service (Express.js). <br> <br>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

## REST API's
| function name    | description | params
|------------------|-------------------------------------------------|---|
|get-orders        | get the orders from mongodb|order date (optional)|
|insert-liveorders | inserts the user order to mongodb||

## External API

To fetch the Live data every 60 minutes, we connect to external API in coingecko(https://api.coingecko.com/api/v3/exchange_rates)

## :flight_departure: Quick Start

```bash
# Make a copy of this repo
$ git clone https://github.com/nithya-kala/crypto-exchange
$ cd crypto-exchange

# Install project dependencies
$ npm i

# Start development server
$ node index.js # Opens browser at http://localhost:4000

# Start development react app
$ npm run start # Opens browser at http://localhost:3000/crypto-exchange

# Production build
$ npm build      # Outputs to ./build directory
$ npx serve build # Static server for the built website
```

