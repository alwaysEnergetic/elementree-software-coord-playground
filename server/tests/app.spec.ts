import request from "supertest";
import {Express} from 'express-serve-static-core';
import app from "../src/app"
let server: Express
describe(`Coordinates Request`, () => {
  beforeAll(() => {
    server = app;
  });
  it("should return 200 with coordinate points within specified boundary box", (done) => {
    request(server).get('/coordinates')
    .send({ query: '{bbox:"10,11,12,12")}'})
    .expect(200)
    .end((err,res) => {
        if (err) return done(err);
        res.body.user.should.have.property('features')
        done();
    })
  })
});