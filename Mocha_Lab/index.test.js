const assert = require("assert");
const chai = require("chai");
const { capitalizeText, createArray } = require("./index");
let expect = chai.expect;

describe("Create capitalizeText testing", () => {
  it("the function takes a string  it will return a string", () => {
    const result = capitalizeText("iti");
    expect(result).to.be.a("string");
  });

  it("the function will return string with capital ", () => {
    const result = capitalizeText("iti");
    expect(result).to.equal("ITI");
  });
  it("takes number it will throw type error ", () => {
    expect(() => capitalizeText(10)).to.throw(
      TypeError,
      "parameter should be string",
    );
  });

  it("should not return 'hello0' when the input is 'iti'", () => {
    const result = capitalizeText("iti");
    expect(result).to.not.equal("hello0");
  });
});

describe("Create createArray testing", function () {
  before(function (done) {
    this.timeout(6000);
    setTimeout(() => {
      done();
    }, 5000);
  });

  let testValue = 1;
  beforeEach(() => {
    testValue++;
  });

  it("test that the return value of type array", () => {
    const result = createArray(1, 2, 3, 5, 6, 7);
    expect(result).to.an("array");
  });
  (it(
    "test if we pass 3 it will return array of length 3 and test it's include 1",
  ),
    () => {
      const result = createArray(testValue);
      expect(result.length).to.equal(3);
      expect(result).to.include(1);
    });

  it("this is a pending test case for future implementation");
});
