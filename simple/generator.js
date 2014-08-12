
function run(generator) {
  function resume(value) {
    itr.next(value)
  }
  var itr = generator(resume)
  itr.next()
}


function delay(time, callback) {
  setTimeout(function() {
    callback('Slept for ' + time)
  }, time)
}


function* delayThings(resume) {
  var results1 = yield delay(1000, resume)
  console.log(results1)

  var results2 = yield delay(1200, resume)
  console.log(results2)
}

run(delayThings)
