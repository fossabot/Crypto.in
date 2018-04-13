var assert = require('assert');
var clients = require('restify-clients');
const accounting = require('accounting-js')


exports.in = async (cryptoco, value) => {


var client = clients.createJsonClient({
  url: 'https://api.coinmarketcap.com',
});


if(cryptoco === '') {
    console.log (Error('Cryptocoin name is empty'));
  return;
  };

var coinname   = cryptoco.replace(/\s+/g,"-");


if(coinname === '') {
    console.log (Error('Cryptocoin name is empty'));
  return;
  };


  
client.get(`/v1/ticker/${coinname}/`, function (err, req, res, obj) {

if(obj.error === 'id not found') {
	return console.log (Error('Wrong cryptocoin name.'));
}

//json



const bitconame  			= obj[0].name
const bitcosymbol			= obj[0].symbol	
const bitcorank				= obj[0].rank
const bitcopriceusd		    = accounting.formatMoney(obj[0].price_usd)
const bitcopricebtc		    = obj[0].price_btc
const bitcohourchange		= '%' + obj[0].percent_change_1h
const bitco24hchange		= '%' + obj[0].percent_change_24h	
const bitcoweekchange		= '%' + obj[0].percent_change_7d


value(
{
bitname:		   bitconame,
bitsymbol: 	       bitcosymbol,
bitrank:	       bitcorank,
bitpriceusd:	   bitcopriceusd,
bitpricebtc:	   bitcopricebtc,
bithourchange:     bitcohourchange,	
bit24hchange:      bitco24hchange,
bitweekchange:     bitcoweekchange
}
)


});


}

//Ahmetcan Aksu 2018 
  //Bitco.in
  

  








