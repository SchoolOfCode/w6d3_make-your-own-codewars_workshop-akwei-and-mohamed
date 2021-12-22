//👉 Write your tests below here:
import { solution } from './main.js';

describe('score of number', () => {
  const numbers = [
    [10, 19],
    [5, 4],
    [-2565, 0],
    [-852, 0],
    [40, 257],
    [589, 62034],
  ];
  it.each(numbers)('should score %i as %i', (number, score) => {
    expect(solution(number)).toBe(score);
  });
});
