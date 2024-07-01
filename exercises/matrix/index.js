// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const fillSquare = (n, spiral, squares, iteration = 0) => {
  const endCounter = n * 2 + (n - 2) * 2;
  console.log(iteration);
  if (iteration >= squares - 1) {
    return;
  }

  spiral[0].forEach((_,index) => )

  return fillSquare(spiral, squares, iteration + 1);
};

function matrix(n) {
  const spiral = Array.from({ length: n }).map(() => Array.from({ length: n }));
  const maxCount = n * n;
  const squares = Math.ceil(n / 2);
  const result = fillSquare(n, spiral, squares);

  // console.log(spiral);
}

module.exports = matrix;
