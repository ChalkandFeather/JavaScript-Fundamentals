const fizzbuzz = require('./fizzbuzzTDD');

describe('fizzbuzz', () => {
  it('returns fizzbuzz if number is divisible by 15', () => {
  expect(fizzbuzz(15)).toBe('fizzbuzz');
  });

  it("returns fizz if divisble by only 3", () => {
    expect(fizzbuzz(9)).toBe('fizz');
  });

  it("returns buzz if divisble by only 5", () => {
    expect(fizzbuzz(10)).toBe('buzz');
  });
  
  it("returns num if not divisble by 3 of 5", () => {
    expect(fizzbuzz(2)).toBe(2);
  });
});
