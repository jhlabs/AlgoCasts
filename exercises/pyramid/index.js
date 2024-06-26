// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  return Array.from({ length: n })
    .map((_, row) => {
      const numberPounds = row * 2 + 1;
      const padWith = Math.floor((n * 2 - numberPounds) / 2);
      const padding = padWith > 0 ? ' '.repeat(padWith) : '';
      return padding + '#'.repeat(numberPounds) + padding;
    })
    .forEach((printout) => console.log(printout));
}

module.exports = pyramid;
