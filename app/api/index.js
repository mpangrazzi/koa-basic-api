
/**
 * Module dependencies
 */

const debug = require('debug')('api:main')
const Router = require('koa-router')

var router = module.exports = new Router({
  prefix: '/api'
})

router.get('/', function * () {
  this.body = { status: 'ok' }
})

router.use('/foo', require('./foo').routes())
router.use('/bar', require('./bar').routes())
