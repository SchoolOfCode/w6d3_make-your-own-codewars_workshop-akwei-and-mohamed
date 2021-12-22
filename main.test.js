//👉 Write your tests below here:
import { solution } from "./main.js";

describe("score of number", () => {
  const numbers = [
    [10, 29],
    [4, 4],
    [8, 19],
    [-2565, 0],
    [-852, 0],
    [40, 337],
    [140, 4130],
    [280, 16240],
    [589, 70724],
  ];
  it.each(numbers)("should score %i as %i", (number, score) => {
    expect(solution(number)).toBe(score);
  });
});
