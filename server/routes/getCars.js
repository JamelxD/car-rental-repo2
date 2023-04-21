var express = require('express');
var router = express.Router();
var lyko = require('../lyko');
var XMLHttpRequest = require('xhr2');
/* GET rental cars listing. */
router.get('/', function (req, res, next) {
  var xmlHttp = new XMLHttpRequest();
  const rentalCar = {
    //pickUpPoint : '48.8588897,2.3200410217200766',
    pickUpPoint: `${req.query.lat},${req.query.long}`,
    startDate: (req.query.stDate).toString(),
    //startDate: '2023-03-26T07:17:47.000Z',
    endDate: (req.query.eDate).toString(),
    //endDate: '2023-03-28T07:17:47.000Z',
    'carGroups[]': req.query.carOpt,
    operators: 'all',
    limit: '30'
  }
  console.log(rentalCar)
  //res.append('x-api-key',lyko.x_api_key)
  xmlHttp.open("GET", `https://api.lyko.tech/v2.1/rentcars?pickUpPoint=${rentalCar.pickUpPoint}&startDate=${rentalCar.startDate}&endDate=${rentalCar.endDate}&carGroups[]=${rentalCar['carGroups[]']}&operators=${rentalCar.operators}&limit=${rentalCar.limit}`)
  //xmlHttp.open("GET", 'https://api.lyko.tech/v2.1/rentcars?pickUpPoint=48.8588897,2.3200410217200766&startDate=2023-01-29T07:00:00.000Z&endDate=2023-01-30T07:00:00.000Z&carGroups[]=small&operators=all&limit=30')
  xmlHttp.responseType = 'json';
  xmlHttp.setRequestHeader('x-api-key', lyko.x_api_key)
  xmlHttp.setRequestHeader('Accept', 'application/json')
  xmlHttp.onload = function () {
    var jsonResponse = xmlHttp.response;
    //  var parsedResponse = JSON.parse(jsonResponse)
    // console.log(xmlHttp)
    // console.log(jsonResponse)
    res.send(jsonResponse)
  };
  xmlHttp.send()
  //res.send(JSON.parse(xmlHttp.response));
  // res.send('respond with a resource');
});

module.exports = router;

