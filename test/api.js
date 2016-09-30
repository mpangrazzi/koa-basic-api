import http from 'http'
import test from 'ava'
import request from 'superagent'

import app from '../app'

const PORT = 3000
const server = http.createServer(app.callback())


test.before.cb('Start API server', t => {
  server.listen(PORT, () => {
    t.pass('server is listening', PORT)
    t.end()
  })
})


test.cb('Should respond correctly', t => {
  request
    .get(`http://localhost:${PORT}/api`)
    .end((err, res) => {
      t.is(res.status, 200, 'HTTP response code')
      t.deepEqual(res.body, { status: 'ok' }, 'HTTP response body')
      t.end()
    })
})


test.after.cb('Close API server', t => {
  server.close(() => {
    t.pass('server is closed')
    t.end()
  })
})
