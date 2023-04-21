/**
 * @param {number} x
 * @return {boolean}
 */

// const isPalindrome = (x) => {
//   return x == x.toString().split("").reverse().join("");
// };
// isPalindrome(121);

const isPalindrome = (x) => {
  let temp, remainder,result = 0;
  temp = x;
  while (x > 0) {
    remainder = x % 10;
    result = result * 10 + remainder;
    x = Math.floor(x / 10);
  }
  return temp == result
};
isPalindrome(1213);
