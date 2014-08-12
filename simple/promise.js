
var Promise = require('bluebird')

function delay(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Slept for ' + time)
    }, time)
  })
}


function delayThings() {
  delay(1000)
    .then(function(result) {
      console.log(result)
      return delay(1200)
    })
    .then(function(result) {
      console.log(result)
    })
}

delayThings()
