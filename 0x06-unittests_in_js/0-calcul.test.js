const assert = require("assert");
calculateNumber = require("./0-calcul")


describe("calculateNumber", function() {

  it("both are integers", function() {
    let ans = calculateNumber(1, 2);
    assert.strictEqual(ans, 3);
  });

  it("both round down", function() {
    let ans = calculateNumber(1.3, 2.2);
    assert.strictEqual(ans, 3);
  });

  it("a rounds up and b rounds down", function() {
    let ans = calculateNumber(1.6, 2.4);
    assert.strictEqual(ans, 4);
  });

  it("a rounds down and b rounds up", function() {
    let ans = calculateNumber(1.4, 2.7);
    assert.strictEqual(ans, 4);
  });

  it("both round up", function() {
    let ans = calculateNumber(1.6, 2.8);
    assert.strictEqual(ans, 5);
  });

  it("both are negative integers", function() {
    let ans = calculateNumber(-1, -2);
    assert.strictEqual(ans, -3);
  });

  it("both round down", function() {
    let ans = calculateNumber(-1.3, -2.2);
    assert.strictEqual(ans, -3);
  });

  it("a rounds up and b rounds down", function() {
    let ans = calculateNumber(-1.6, -2.4);
    assert.strictEqual(ans, -4);
  });

  it("a rounds down and b rounds up", function() {
    let ans = calculateNumber(-1.4, -2.7);
    assert.strictEqual(ans, -4);
  });

  it("both round up", function() {
    let ans = calculateNumber(-1.6, -2.8);
    assert.strictEqual(ans, -5);
  });

  it("negative and positive number", function() {
    let ans = calculateNumber(-1.6, 2.8);
    assert.strictEqual(ans, 1);
  });
});