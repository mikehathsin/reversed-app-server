/* eslint-env mocha */

import { expect } from 'chai'
import request from 'supertest'

import { app } from '../src/server'

describe('Reversed App - API', () => {
  describe('GET /iecho?text={{param}}', () => {
    it('Should return a 200 OK with the reversed text and palindrome as true', (done) => {
      // A man, a plan, a canal: Panama!
      const palindrome = 'A%20man,%20a%20plan,%20a%20canal:%20Panama!'

      request(app)
        .get(`/iecho?text=${palindrome}`)
        .end((err, res) => {
          if (err) {
            return done(err)
          }

          expect(res.statusCode).to.equal(200)
          expect(res.body.text).to.equal('!amanaP :lanac a ,nalp a ,nam A')
          expect(res.body.palindrome).to.equal(true)
          done()
        })
    })

    it('Should return a 200 OK with the reversed text and palindrome as false', (done) => {
      const string = 'Test'

      request(app)
        .get(`/iecho?text=${string}`)
        .end((err, res) => {
          if (err) {
            return done(err)
          }

          expect(res.statusCode).to.equal(200)
          expect(res.body.text).to.equal('tseT')
          expect(res.body.palindrome).to.equal(false)
          done()
        })
    })
  })

  describe('GET /iecho', () => {
    it('Should return a 400 Bad Request with the error: no text', (done) => {
      request(app)
        .get('/iecho')
        .end((err, res) => {
          if (err) {
            return done(err)
          }

          expect(res.statusCode).to.equal(400)
          expect(res.body.error).to.equal('no text')
          done()
        })
    })
  })
})
