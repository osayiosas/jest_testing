// function sum(a, b) {
//   return a + b;
// }

// module.exports = sum;

// function myFunction(input) {
//   if (typeof input !== 'number' ) {
//     throw new Error('Invalid input');
//   }
// }

// module.exports = myFunction;

// 


function fetcPromise() {
  return new Promise((res, rej) => {
    setTimeout(() => res('peanut butter'), 1000);
  });
}

module.exports=fetcPromise;