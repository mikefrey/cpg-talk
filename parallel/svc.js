var assert = require('assert')


exports.getTournament = function(id, callback) {
  setTimeout(function() {
    callback(null, { id: 42, name: 'Sport Ngin Ping-Pong Open'})
  }, 300)
}

exports.getTeams = function(tournamentID, callback) {
  assert(tournamentID)
  setTimeout(function() {
    callback(null, [
      { id: 1, name: 'Team Green' },
      { id: 2, name: 'Team Blue' },
      { id: 3, name: 'Team Red' },
      { id: 4, name: 'Team Orange' },
      { id: 5, name: 'Team Yellow' },
      { id: 6, name: 'Team Purple' },
      { id: 7, name: 'Team Brown' },
      { id: 8, name: 'Team Black' },
    ])
  }, Math.random()*300 + 200)
}

exports.getGames = function(tournamentID, callback) {
  assert(tournamentID)
  setTimeout(function() {
    callback(null, [
      { id: 1, team1: 1, team2: 8, time: '2:00 pm' },
      { id: 2, team1: 3, team2: 6, time: '2:15 pm' },
      { id: 3, team1: 2, team2: 7, time: '2:30 pm' },
      { id: 4, team1: 4, team2: 5, time: '2:45 pm' },
      { id: 5, team1: 1, team2: 6, time: '3:15 pm' },
      { id: 6, team1: 7, team2: 4, time: '3:30 pm' },
      { id: 7, team1: 1, team2: 7, time: '3:45 pm' }
    ])
  }, Math.random()*300 + 200)
}


