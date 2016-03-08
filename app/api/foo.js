
/**
 * Module dependencies
 */

const Router = require('koa-router');
const debug = require('debug')('api:foo');

var router = module.exports = new Router();


// Here we're responding to /api/foo/

router.get('/', function *() {
  this.body = { status: 'ok' };
});

// Here we're responding to /api/foo/another

router.get('/another', function *() {
  this.body = { status: 'ok' };
});