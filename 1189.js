/**
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
    const count = {};
  
    // Count the frequency of each character in the text
    for (let char of text) {
      count[char] = count[char] + 1 || 1;
    }
  
    // Check the frequency of the required letters for "balloon"
    const b = count['b'] || 0;
    const a = count['a'] || 0;
    const l = Math.floor(count['l'] / 2) || 0;
    const o = Math.floor(count['o'] / 2) || 0;
    const n = count['n'] || 0;
  
    // Return the minimum frequency among the required letters
    return Math.min(b, a, l, o, n);
  }

console.log(maxNumberOfBalloons('loonbalxballpoon'))



