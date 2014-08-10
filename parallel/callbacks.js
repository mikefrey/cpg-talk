var svc = require('./svc')

var getTournament = svc.getTournament
var getTeams = svc.getTeams
var getGames = svc.getGames

function loadTourney(date, callback) {
  var result = {}

  function checkResults() {
    if (result.tournament && result.games && result.teams) {
      callback(null, result)
    }
  }

  getTournament(date, function(err, tournament) {
    if (err) { return callback(err) }
    console.log('Got Tournament')
    result.tournament = tournament

    getTeams(tournament.id, function(err, teams) {
      if (err) { return callback(err) }
      console.log('Got Teams')
      result.teams = teams

      checkResults()
    })

    getGames(tournament.id, function(err, games) {
      if (err) { return callback(err) }
      console.log('Got Games')
      result.games = games

      checkResults()
    })

  })

}

loadTourney(Date.now(), function(err, tourney) {
  if (err) { throw err }
  console.dir(tourney)
})
