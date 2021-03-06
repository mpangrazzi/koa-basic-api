
/**
 * Module dependencies
 */

const koa = require('koa')
const logger = require('koa-logger')
const compress = require('koa-compress')
const error = require('middlewares/error')

var api = require('./api')

// main app

var app = module.exports = koa()


// trust proxy

app.proxy = true

// error

app.use(error)

// requests logger

if (app.env === 'development') {
  app.use(logger())
}

// compress

app.use(compress())

// attach API routes

app.use(api.routes())
