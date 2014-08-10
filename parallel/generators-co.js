var svc = require('./svc')

var getTournament = svc.getTournament
var getTeams = svc.getTeams
var getGames = svc.getGames

function run(generator) {
  function resume(err, value) {
    if (err) { throw err }
    itr.next(value)
  }
  var itr = generator(resume)
  itr.next()
}

function* loadTourney(resume) {
  var tournament = yield getTournament(Date.now(), resume)
  var teams = yield getTeams(tournament.id, resume)
  var games = yield getGames(tournament.id, resume)

  console.dir({
    tournament: tournament,
    teams: teams,
    games:games
  })
}

run(loadTourney)
