// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCounts = str.split('').reduce((counts, char) => {
    counts[char] = counts[char] + 1 || 1;

    return counts;
  }, {});

  return Object.keys(charCounts).sort(
    (a, b) => charCounts[b] - charCounts[a],
  )[0];
}

module.exports = maxChar;
