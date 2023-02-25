const assert = require("assert");
var expect   = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");


describe("calculateNumber", function() {

  describe("SUM", () => {

    it("adding positive numbers", () => {
      let ans = calculateNumber('SUM', 3.4, 5.7);
      expect(ans).to.equal(9);
    });

    it("adding negative numbers", () => {
      let ans = calculateNumber('SUM', -3.4, -5.7);
      expect(ans).to.equal(-9);
    });

  });

  describe("SUBTRACT", () => {

    it("subtracting positive numbers", () => {
      let ans = calculateNumber('SUBTRACT', 3.4, 5.7);
      expect(ans).to.equal(-3);
    });

    it("subtracting negative numbers", () => {
      let ans = calculateNumber('SUBTRACT', -3.4, -5.7);
      expect(ans).to.equal(3);
    });

  });

  describe("DIVIDE", () => {

    it("dividing positive numbers", () => {
      let ans = calculateNumber('DIVIDE', 3.4, 5.7);
      expect(ans).to.equal(0.5)
    });

    it("dividing negative numbers", () => {
      let ans = calculateNumber('DIVIDE', -3.4, -5.7);
      expect(ans).to.equal(0.5)
    });

    it("when divident is 0", () => {
      let ans = calculateNumber('DIVIDE', -5.6, -0.5);
      expect(ans).to.equal("Error")
    })

  });
});
