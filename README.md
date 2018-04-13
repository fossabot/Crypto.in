# Bitco.in
An node module recevie Cryptocoin values from coinmarketcap.com

[![Build Status](https://travis-ci.org/ahmtcn123/Bitco.in.svg?branch=master)](https://travis-ci.org/ahmtcn123/bitco.in) [![Bitco.in version](https://img.shields.io/badge/Bitco.in-v1.0.3-ff69b4.svg)](https://www.npmjs.com/package/@fridayai/bitco.in)

```shell
$ npm i @fridayai/bitco.in
```

**How can I use it ?**

You can just write crypto coin name and get the values. !!

**Example**
```js
var bitco = require('@fridayai/bitco.in')

bitco.in('bitcoin',value  => {
	console.log(value)
});
  
/*

  bitname: 'Bitcoin',
  bitsymbol: 'BTC',
  bitrank: '1',
  bitpriceusd: '$8,060.23',
  bitpricebtc: '1.0',
  bithourchange: '%-0.3',
  bit24hchange: '%5.04',
  bitweekchange: '%21.35' 
  
*/
```

**To get special values**

```js
var bitco = require('@fridayai/bitco.in')

bitco.in('bitcoin',value  => {
	console.log(value.bitpriceusd)
});
  
/*

$8,059.41
  
*/
```


Try out our special AI API ? > [FridayAPI](https://intelligentthings.github.io/FridayAPI/ "See docs")
