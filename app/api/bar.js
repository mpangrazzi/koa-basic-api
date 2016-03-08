
/**
 * Module dependencies
 */

const Router = require('koa-router');
const debug = require('debug')('api:bar');

var router = module.exports = new Router();


// Here we're responding to /api/bar/

router.get('/', function *() {
  this.body = { status: 'ok' };
});

// Here we're responding to /api/bar/test

router.get('/test', function *() {
  this.body = { status: 'ok' };
});
