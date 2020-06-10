const express = require('express');
const server = express();

const carRouter = require('./router/carRouter');

const helmet = require('helmet');
const morgan = require('morgan');

server.use(logger);
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json())

server.use('/api/cars', carRouter);

server.get('/', (req, res) => {
    res.send(`WELCOME TO WILLY WONKA'S CHOCOLATE FACTORY`)
})

function logger(req, res, next){
    const {method, url} = req;

    const timestamp = Date.now().toString();
  
    console.log(`${method} to ${url} @ ${timestamp}`);
   
    next();
}

module.exports = server