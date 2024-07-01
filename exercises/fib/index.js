// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
};

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// function fib(n) {
//   let array = [];
//   for (let i = 0; i <= n; i++) {
//     if (i <= 1) {
//       array.push(i);
//     } else {
//       const value = array[i - 2] + array[i - 1];
//       array.push(value);
//     }
//   }

//   return array[n];
// }

// function fib(n) {
//   let array = [];
//   for (i = 0; i <= n; i++) {
//     if (i <= 1) {
//       array.push(i);
//     } else {
//       const value = array[i - 2] + array[i - 1];
//       array.push(value);
//     }
//   }

//   return array[n];
// }

module.exports = fib;
