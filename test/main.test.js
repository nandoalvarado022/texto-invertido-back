const chai = require("chai")
const chaiHttp = require("chai-http")
const { getInvertedText } = require('../utils/index')
let server = require("../index")

const text = getInvertedText("asd")

chai.should()
chai.use(chaiHttp)
var expect = chai.expect

const word = "oso" // Word to evaluate

describe("Main Test", function () {
  it("Testing the server and the function to evaluate word", function (done) {
    chai.request(server)
      .get(`/echo?text=${word}`)
      .end((err, response) => {
        response.should.have.status(200)
        response.body.should.be.a("object")
        done()
      })
  })

  it("It shouldn't works", function (done) {
    chai.request(server)
      .get("/echo?text=")
      .end((err, response) => {
        response.should.have.status(400)
        done()
      })
  })

  it("Validating palindrome", function (done) {
    chai.request(server)
      .get(`/echo?text=${word}`)
      .end((err, response) => {
        expect(response.body.palindrome).to.be.true
        done()
      })
  })
})