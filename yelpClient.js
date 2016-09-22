var express = require('express')
var app = express();
var Yelp = require('yelp')

var yelp = new Yelp({
  consumer_key: 'dYmianbDvP9XNx6aky1JWQ',
  consumer_secret: 'xavDwdB-fgQ-2qWEagu5gPPm8bM',
  token: 'OugLAPKwTrBuwKB_BLhRO3wORxrmF8Im',
  token_secret: '7uZ1nMr-dngRH2VCGLDCOmPV-UY',
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

app.listen(3006, function () {
  console.log('Example app listening on port 3006!')
});

// https://api.yelp.com/v2/search?term=german+food&location=Hayes&cll=37.77493,-122.419415

app.get('/yelpResults/:type/:lat/:lng/:radius/:limit/',  (req, res) => {
  debugger
  var searchParams = { term: req.params.type, ll: `${req.params.lat}, ${req.params.lng}`, limit: req.params.limit }
  if (req.params.radius <= 40000) {
    searchParams['radius_filter'] = req.params.radius
  }
  yelp.search(searchParams)
  .then(function (data) {
    res.json(data);
  })
  .catch(function (err) {
    console.error(err)
  })
});



app.get('/yelpResults/:businessID', function (req, res) {
  yelp.business(req.params.businessID)
  .then(function (data) {
    res.json(data)
  })
  .catch(function (err) {
    console.error(err);
  })
})
