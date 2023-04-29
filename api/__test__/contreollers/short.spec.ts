import request from 'supertest'
import {Express} from 'express-serve-static-core'
import {createServer} from '../../src/utils/server'
import {ShortService} from "../../src/services/short";
import mocked = jest.mocked;

jest.mock("../../src/services/short", () => {
  return {
    ShortService: jest.fn().mockImplementation(() => {
      return {
        getById: async (id: string) => {},
        create: async (originUrl: string) => {},
        remove: async (id: string) => {}
      }
    })
  }
})

let server: Express
beforeAll(async () => {
  server = await createServer()
})

describe('GET /api/short/:id', () => {
  const MockedShortService = mocked(ShortService);
  it('should return 404 id not found', done => {
    request(server)
      .get(`/api/short/xxx`)
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err)
        expect(res.statusCode).toEqual(404)
        done()
      })
  })
})