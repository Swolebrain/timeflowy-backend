const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req,res,next){
  var allowedOrigins = [
    'http://localhost:3000',
    'http://www.titanhack.com',
    'http://titanhack.com'
  ];
  if (allowedOrigins.indexOf(req.headers.origin) >= 0){
    res.header("Access-Control-Allow-Origin", req.headers.origin);
      res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  }
  next();
});
app.set('port', 3001);

app.post('/load-todos', function(req,res){
  //console.log(req.body);
  console.log(req.body.idTokenPayload.sub);
  res.json({status: 'ok'});
});

app.listen(app.get('port'),
  ()=>console.log("server listening on port "+app.get('port')));
