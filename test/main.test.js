const chai = require('chai');
const expect = chai.expect;

const add = require('../src/validator');

describe("testing add function", () => {
    it("add(1,1) = 2", () => {
       expect(add(1,1) == 2).to.be.true 
    });
    it("add(1,-1) = 0", () => {
        expect(add(1,-1) == 0).to.be.true 
     });
});