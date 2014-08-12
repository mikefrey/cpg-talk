
function delay(time, callback) {
  setTimeout(function() {
    callback('Slept for' + time)
  }, time)
}


function delayThings() {
  delay(1000, function(result1) {
    console.log(result1)
    delay(1200, function(result2) {
      console.log(result2)
    })
  })
}

delayThings()
