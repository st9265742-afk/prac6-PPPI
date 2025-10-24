// Трохи змін в test.js

const { expect } = require('chai');
const { add, multiply } = require('./math');

describe('Math Functions', () => {
  it('should correctly add two positive numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should correctly add negative numbers', () => {
    expect(add(-2, -3)).to.equal(-5);
  });


  it('should multiply two numbers', () => {  // Тест множення
    expect(multiply(4, 3)).to.equal(12);
  });

  it('should return 0 when multiplied by zero', () => {  // Перевірка множення на нуль
    expect(multiply(5, 0)).to.equal(0);
  });
});