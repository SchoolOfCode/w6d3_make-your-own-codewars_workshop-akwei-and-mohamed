//👉 Write your tests below here:

function solution(number) {
  let sum = 0;
  if (number <= 0) return 0;
  for (let currNum = 0; currNum < number; currNum++) {
    if (currNum % 4 === 0 || currNum % 7 === 0) sum += currNum;
  }
  return sum;
}

describe("score of number", () => {
  const numbers = [
    [10, 19],
    [5, 4],
    [-2565, 0],
    [-852, 0],
    [40, 257],
    [589, 62034],
  ];
  it.each(numbers)("should score %i as %i", (number, score) => {
    expect(solution(number)).toBe(score);
  });
});
