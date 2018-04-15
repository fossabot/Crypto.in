# Crypto.in
An node module recevie Cryptocoin values from coinmarketcap.com

[![Build Status](https://travis-ci.org/ahmtcn123/Crypto.in.svg?branch=master)](https://travis-ci.org/ahmtcn123/Crypto.in) [![Crypto.in version](https://img.shields.io/badge/Crypto.in-v1.0.8-ff69b4.svg)](https://www.npmjs.com/package/crypto.in)


**How can I use it ?**

You can just write crypto coin name and get the values. !!

**Example**
```js
var cryptoin = require('Crypto.in')

cryptoin.in('bitcoin', value => {
	console.log(value)
});
  
/*
  bitname: 'Bitcoin',
  bitsymbol: 'BTC',
  bitrank: '1',
  bitpriceusd: '$8,059.41',
  bitpricebtc: '1.0',
  bithourchange: '%-0.28',
  bit24hchange: '%5.04',
  bitweekchange: '%21.36'   
*/
```

**To get special values**

```js

cryptoin.in('bitcoin', value => {
	console.log(value.bitpriceusd)
});
  
/*
$8,059.41
*/

```

On wrong Crypto coin name returns;

**null** for debugging


Debugging example
```js

cryptoin.in('ereum', value => {
console.log(value)
});
  
/*

It gives error:

Error: Wrong cryptocoin name.
    at C:\Users\ahmet\Desktop\Crypto.in\index.js:37:15
    at parseResponse (C:\Users\ahmet\Desktop\node_modules\restify-clients\lib\JsonClient.js:118:9)
    at IncomingMessage.done (C:\Users\ahmet\Desktop\node_modules\restify-clients\lib\StringClient.js:209:13)
    at Object.onceWrapper (events.js:313:30)
    at emitNone (events.js:111:20)
    at IncomingMessage.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1055:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)

and returns null 



*/

**You can debug error by using this**

if(value === null) {
	return console.log('Opps wrong')
}


```
 


Try out our special AI API ? > [FridayAPI](https://intelligentthings.github.io/FridayAPI/ "See docs")
