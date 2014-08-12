var svc = require('./svc')
var thunkify = require('thunkify')
var co = require('co')

var getTournament = thunkify(svc.getTournament)
var getTeams = thunkify(svc.getTeams)
var getGames = thunkify(svc.getGames)

function* loadTourney(date) {
  var tournament = yield getTournament(date)
  var gTeams = getTeams(tournament.id)
  var gGames = getGames(tournament.id)

  var results = yield [gTeams, gGames]

  return {
    tournament: tournament,
    teams: results[0],
    games: results[1]
  }
}

co(function* () {
  var tourney = yield loadTourney(Date.now())
  console.dir(tourney)
})()
