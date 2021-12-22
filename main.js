/* 
👉 Write your kata here!

Multiple of 4 and 7.

if any number is input, it will check all of the whole integers smaller than the number given and check
if the number is a multiple of 4 or 7 and add all of them.

If number is both a multiple of 4 and 7, only add it once

Negative numbers should return 0.
*/

//👉 Write the function your CodeWarriors will start with below here:

export function solution(number) {
  let sum = 0;
  if (number <= 0) return 0;
  for (let currNum = 0; currNum < number; currNum++) {
    if (currNum % 4 === 0 || currNum % 7 === 0) sum += currNum;
  }
  return sum;
}
