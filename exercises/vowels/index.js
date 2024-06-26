// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowelPattern = /[aeiou]/gi;
  const matches = str.match(vowelPattern);

  return matches ? matches.length : 0;
}

// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   return str
//     .split('')
//     .reduce(
//       (count, char) =>
//         vowels.includes(char.toLowerCase()) ? count + 1 : count,
//       0,
//     );
// }

module.exports = vowels;
