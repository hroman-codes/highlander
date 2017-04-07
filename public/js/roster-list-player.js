var state = {
  playerId: null,
  teams: [],
  stats: []
}

$(document).ready(function () {
  var playerId = getParameterByName('id')
  $.get('http://localhost:8080/players/' + playerId, function (data) {
    state.teams = data.teams
    render()
  })
  $.get('http://localhost:8080/players/' + playerId + '/stats', function (data) {
    state.stats = data.stats
    render()
  })
})

function render(){
  // Render Teams
  var teamsElements = state.teams.map(function(team) {
    return $('<div>', {text: team.name})
  })
  $('.teams-list-container').html(teamsElements)

  // Render Stats
  var statsElements = state.stats.map(function (stat) {
    var container = $('<div>')
    var howMany = $('<div>', {text: stat.how_many})
    var description = $('<div>', {text: stat.catalog.description})
    container.append(description, howMany)
    return container
  })
  $('.stats-list-container').html(statsElements)
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}
