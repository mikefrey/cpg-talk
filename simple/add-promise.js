// function addOne(num) {
//   return new Promise(function(resolve, reject) {
//     resolve(num+1)
//   })
// }

function addOne(num) {
  return num+1
}


var p = new Promise(function(res, rej) { res(0) })
  .then(addOne)
  .then(addOne)
  .then(addOne)
  .then(console.log)
