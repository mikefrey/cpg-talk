
function* tick() {
  var num = 0
  while (!(yield num++));
}

var itr = tick()
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)
