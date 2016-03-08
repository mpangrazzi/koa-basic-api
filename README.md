Koa Basic API Template
======================

This is a very basic starting point for a [Koa](http://koajs.com)-based app template for an API server.


### Structure

The main idea here is to combine multiple [koa-router](https://github.com/alexmingoia/koa-router) instances in order to achieve the maximum flexibility. Try to look directly into `/api` files for more details.

- `/app`

  - `/api`
    - `/index.js`: Main entry point (koa-router), which links to other routes
    - `/foo.js`: A single route (koa-router)
    - `/bar.js`: A single route (koa-router)

  - `/node_modules`: Modules available only for `/api` files
    - `/middlewares`
      - `/error`: Global error handling middleware

- `/bin`
  - `/www`: Script for launching the app server

- `/node_modules`: Modules available everywhere
  - `/log`: Basic [npmlog](https://github.com/npm/npmlog)-based logger

- `/test`: App unit/functional tests


### Debug

In this template I've used (and recommend) the excellent [debug](https://github.com/visionmedia/debug) module. This way, you can see all the debugging infos you need without writing a lot of `console.log` calls.

You can easily show debug information lanching the app with:

```bash
DEBUG=* npm run dev
```


### Test

I chose [tape](https://github.com/substack/tape), which is a very flexible test framework with [tap-spec](https://github.com/scottcorgan/tap-spec) report

In the provided example, you'll see how you can easily achieve [Mocha](https://mochajs.org)'s `before()` and `after()` behaviuor using tape, as Eric Elliot suggests in [a great post on tape](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4).

Run tests with:

```bash
npm test
```


### LICENSE

The MIT License (MIT)

Copyright (c) 2016 Michele Pangrazzi <xmikex83@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
