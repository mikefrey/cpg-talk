var svc = require('./svc')
var async = require('async')

var getTournament = svc.getTournament
var getTeams = svc.getTeams
var getGames = svc.getGames

function loadTourney(date, callback) {

  async.auto({

    tournament: function(callback) {
      getTournament(date, callback)
    },

    teams: ['tournament', function(callback, result) {
      getTeams(result.tournament.id, callback)
    }],

    games: ['tournament', function(callback, result) {
      getGames(result.tournament.id, callback)
    }]

  }, callback)

}

loadTourney(Date.now(), function(err, tourney) {
  if (err) { throw err }
  console.dir(tourney)
})
