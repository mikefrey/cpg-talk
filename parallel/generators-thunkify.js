var svc = require('./svc')
var thunkify = require('thunkify')

var getTournament = thunkify(svc.getTournament)
var getTeams = thunkify(svc.getTeams)
var getGames = thunkify(svc.getGames)

function run(itr) {
  function resume(ret) {
    var obj = itr.next(ret)
    if (obj.done) return

    var val = obj.value
    if (!Array.isArray(val)) { val = [val] }

    var pending = val.length
    var result = []
    val.forEach(function(fn, i) {
      fn(function(err, res) {
        result[i] = res
        if (!--pending) {
          if (result.length == 1)
            result = result[0]
          resume(result)
        }
      })
    })
  }

  resume()
}

function* loadTourney(date) {
  var tournament = yield getTournament(date)
  var gTeams = getTeams(tournament.id)
  var gGames = getGames(tournament.id)

  var results = yield [gTeams, gGames]

  console.dir({
    tournament: tournament,
    teams: results[0],
    games: results[1]
  })
}

run(loadTourney(Date.now()))
