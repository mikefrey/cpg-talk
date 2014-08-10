var svc = require('./svc')
var Promise = require('bluebird')

var getTournament = Promise.promisify(svc.getTournament)
var getTeams = Promise.promisify(svc.getTeams)
var getGames = Promise.promisify(svc.getGames)

function loadTourney(date) {
  var result = {}

  return getTournament(date)
    .then(function(tournament) {
      return Promise
        .all([
          getTeams(tournament.id),
          getGames(tournament.id)
        ])
        .spread(function(teams, games) {
          return { tournament: tournament, teams: teams, games: games }
        })
    })

}

loadTourney(Date.now()).then(
  function(tourney) {
    console.dir(tourney)
  },
  function(err) {
    throw err
  })
