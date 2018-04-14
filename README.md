# Crypto.in
An node module recevie Cryptocoin values from coinmarketcap.com

[![Build Status](https://travis-ci.org/ahmtcn123/Crypto.in.svg?branch=master)](https://travis-ci.org/ahmtcn123/crypto.in) [![Crypto.in version](https://img.shields.io/badge/Crypto.in-v1.0.5-ff69b4.svg)](https://www.npmjs.com/package/crypto.in)


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


Try out our special AI API ? > [FridayAPI](https://intelligentthings.github.io/FridayAPI/ "See docs")
