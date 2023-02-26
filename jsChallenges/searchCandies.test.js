///const searchCandies = require('./searchCandies');
const getCandiesByPattern = require('./searchCandies');


describe('searchCandies', () => {
  const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

  it('returns a new array that matches given pattern', () => {
    const pattern = 'Ma';
    const expectedCandies = [
      { name: 'Mars', price: 1.49 },
      { name: 'Maltesers', price: 3.49 }
    ];

    const matchingCandies = getCandiesByPattern(pattern);
    expect(matchingCandies).toEqual(expectedCandies);
  });

  it('returns empty array if candies do not match pattern', () => {
    const pattern = 'zz';
    const expectedCandies = [];

    const matchingCandies = getCandiesByPattern(pattern);
    expect(matchingCandies).toEqual(expectedCandies);
  });
});