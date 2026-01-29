const request = require('supertest')
const { it, describe, expect } = require('@jest/globals')
const app = require('../../lib/app/app.js')

//tried to get jest working with ts, but having tests in a test dir made things sticky since ts likes to only
// compile things in the source dir (src/), may come back to this but for now my tests will just be in js

describe('the web server', () => {

  it('should give 200 response to /hello', () => {
    return request(app)
      .get('/hello')
      .expect(200)
  })

  it('should give 404 response to /anythingElse', () => {
    return request(app)
      .get('/anythingElse')
      .expect(404)
  })

})

