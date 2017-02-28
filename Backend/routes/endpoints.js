var router = require('express').Router(),
    jwt    = require('jwt-simple'),
    createToken = require('./createToken'),
    moment = require('moment'),
    cors = require('cors'),
    secret = require('../config/tokenSecret').secret;

var collection;

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/platzi-angular-mean',
    function(err, db){
        if(!err){
            console.log("MONGODB connect");
            collection = db.collection('tickets');
        }
        else{
            console.log(err);
        }
    });

    function ensureAuthorized(req, res, next){
        console.log(req.headers);
        if(req.headers.authozation){
            console.log('->' + req.headers.authozation);
            try{
                var payload = jwt.decode(req.headers.authozation, secret);
            }
            catch(err){
                res.set('Content-Type', 'application/json').send(JSON-stringify({
                    status: 403,
                    message: 'error 1'
                }));
            }
        //check expiration
        if ( payload.exp > moment().unix()){
            console.log(loggerdUsers);
            next();
            }
        }
    }

router.get('/tickets', cors(), function(req, res){
    "use strict";
    collection.find().toArray(function (err, items){
        var resultado;
        if (!err){
            resultado = {
                status: 200,
                result: items
            }
        }
        else{
            resultado = {
                statis: 500,
                result: err
            }
        }
        res.set('Content-Type', 'application/json').send(JSON.stringify(resultado));
    })
});

module.exports = router;