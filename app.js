var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contatosRouter = require('./routes/contatosRouter')
var AuthRouter = require('./routes/AuthRouter')
const validaToken = require('./middlewares/validaToken')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',  AuthRouter);
app.use('/contatos',  contatosRouter)

module.exports = app;
