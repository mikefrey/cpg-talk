var thunkify = require('thunkify')

function run(generator) {
  function resume(ret) {
    var obj = itr.next(ret)
    if (obj.done) return
    obj.value(resume)
  }

  var itr = generator()
  resume()
}


var delay = thunkify(function(time, callback) {
  setTimeout(function() {
    callback('Slept for ' + time)
  }, time)
})


function* delayThings() {
  var results1 = yield delay(1000)
  console.log(results1)

  var results2 = yield delay(1200)
  console.log(results2)
}

run(delayThings)
