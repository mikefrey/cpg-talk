var assert = require('assert')


exports.getTournament = function(id, callback) {
  setTimeout(function() {
    callback(null, { id:id, name: 'Sport Ngin PPL Open'})
  }, 300)
}

exports.getTeams = function(tournamentID, callback) {
  assert(tournamentID)
  setTimeout(function() {
    callback(null, {
      teams: [
        { id: 1, name: 'Team Green' },
        { id: 2, name: 'Team Blue' },
        { id: 3, name: 'Team Red' },
        { id: 4, name: 'Team Orange' },
        { id: 5, name: 'Team Yellow' },
        { id: 6, name: 'Team Purple' },
        { id: 7, name: 'Team Brown' },
        { id: 8, name: 'Team Black' },
      ]
    })
  })
}

exports.getGames = function(tournamentID, callback) {
  assert(tournamentID)
  setTimeout(function() {
    callback(null, {
      games: [
        { id: 1, team1: 1, team2, 8, time: '10:00 am' },
        { id: 2, team1: 3, team2, 6, time: '10:15 am' },
        { id: 3, team1: 2, team2, 7, time: '10:30 am' },
        { id: 4, team1: 4, team2, 5, time: '10:45 am' },
        { id: 5, team1: 1, team2, 6, time: '11:15 am' },
        { id: 6, team1: 7, team2, 4, time: '11:30 am' },
        { id: 7, team1: 1, team2, 7, time: '11:45 am' }
      ]
    })
  })
}


