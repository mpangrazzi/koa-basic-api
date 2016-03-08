
/**
 * Module dependencies
 */

const http = require('http');
const test = require('tape');
const before = require('tape');
const after = require('tape');
const request = require('superagent');

const PORT = 3000;
var server = http.createServer(require('../app').callback());


before('Start API server', function (t) {

  server.listen(PORT, function () {
    t.pass('server is listening', PORT);
    t.end();
  });

});


test('Should respond correctly', function (t) {

  request
    .get(`http://localhost:${PORT}/api`)
    .end(function (err, res) {

      t.equal(res.status, 200, 'HTTP response code');
      t.deepLooseEqual(res.body, { status: 'ok' }, 'HTTP response body');
      t.end();

    });

});


after('Close API server', function (t) {

  server.close(function () {
    t.pass('server is closed');
    t.end();
  });

});
