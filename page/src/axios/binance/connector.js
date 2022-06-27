const { myapiKey,myapiSecret } = require('./key');
const { Spot } = require('@binance/connector')

const apiKey = myapiKey;
const apiSecret = myapiSecret;
console.log(apiKey, apiSecret)
const client = new Spot(apiKey, apiSecret)

// Get account information
client.account().then(response => client.logger.log(response.data))

// Place a new order
client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
  price: '350',
  quantity: 1,
  timeInForce: 'GTC'
}).then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))