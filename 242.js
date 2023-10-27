// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const charS = {};
  const charT = {};
  for (i = 0; i < s.length; i++) {
    const char = s[i];
    if (charS[char]) {
      charS[char]++;
    } else {
      charS[char] = 1;
    }
  }
  for (i = 0; i < t.length; i++) {
    const char = t[i];
    if (charT[char]) {
      charT[char]++;
    } else {
      charT[char] = 1;
    }
  }
  const keysS = Object.keys(charS);
  const keysT = Object.keys(charT);
  for (const key of keysS) {
    if (charS[key] !== charT[key]) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram("car", "cat"));

// сначала нужно разделить на буквы
