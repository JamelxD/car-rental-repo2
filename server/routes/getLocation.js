var express = require('express');
var router = express.Router();
var lyko = require('../lyko');
var XMLHttpRequest = require('xhr2');
/* GET rental cars listing. */
router.get('/', function(req, res, next) {
    var xmlHttp = new XMLHttpRequest();
    const location = {
        text : req.query.query,
        locale : 'en',
        limit : '1'
    }
    console.log(req.query)
    //res.append('x-api-key',lyko.x_api_key)


    xmlHttp.open("GET", `https://api.lyko.tech/v2.1/addresses?text=${location.text}&limit=${location.limit}&locale=${location.locale}`)
    //xmlHttp.open("GET", 'https://api.lyko.tech/v2.1/rentcars?pickUpPoint=48.8588897,2.3200410217200766&startDate=2023-01-29T07:00:00.000Z&endDate=2023-01-30T07:00:00.000Z&carGroups[]=small&operators=all&limit=30')
    xmlHttp.responseType = 'json';
    xmlHttp.setRequestHeader('x-api-key', lyko.x_api_key)
    xmlHttp.onload  = function() {
        var jsonResponse = xmlHttp.response;
      //  var parsedResponse = JSON.parse(jsonResponse)
        res.send(jsonResponse)
     };
    xmlHttp.send()
    //res.send(JSON.parse(xmlHttp.response));
 // res.send('respond with a resource');
});

module.exports = router;