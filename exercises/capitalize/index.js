// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// const capitalize = (str) =>
//   str
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(' ');

const capitalize = (str) =>
  str
    .split('')
    .map((char, index) =>
      str[index - 1] === ' ' || index === 0 ? char.toUpperCase() : char,
    )
    .join('');

module.exports = capitalize;
