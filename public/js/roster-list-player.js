var state = {
  playerId: null,
  teams: [],
  players:[],
  stats:{
        'Hits': 0,
        'At Bats': 0,
        'Home Runs': 0,
        'Earned Runs': 0,
        'Innings Pitched': 0,
        'Strikeouts': 0
      }
}

$(document).ready(function () {
  var playerId = getParameterByName('id')
  $.get('http://localhost:8080/players/' + playerId, function(data) {
    // console.log('data from player get', data)
    state.teams = data.teams
    $.get('http://localhost:8080/players/' + playerId + '/stats', function(data) {
      // console.log('Player stats data', data)
      state.stats = data.stats
      render()
    })
  })

})


function render(){
  var teamsElements = state.teams.map(function(team) {
    // console.log('this is the team', team)
    var listTeam = $('<li>', {
      class: "panel-heading"
    })
    var linkTeam = $('<a>', {
      text: team.name,
      href: 'http://localhost:8080/team.html?id='+ team.id
    })
    listTeam.append(linkTeam)

    return listTeam
  })
  $('.teams-list-container').html(teamsElements)



  var statsElements = state.teams.map(function(team) {
    console.log('this is the team map', team)
    console.log(team.name)
    var statsConverstion = state.players.map(function(player) {
      console.log('this is the stat map', player) // PICK UP HERE ASSIGN THE PLAYERS STATE FROM THE GET CALL
      // make the conversion from array to an object
      stat[stat.catalog.description] = stat.how_many
      // console.log(stat.catalog.description + ' = ' + stat[stat.catalog.description])

    var row = $('<tr>')
      row.append($('<td>', {text: team.name}))
      row.append($('<td>', {text: team.position}))
      row.append($('<td>', {text: team.first_name + ' ' + team.last_name}))
      row.append($('<td>', {text: stat['Hits']}))
      row.append($('<td>', {text: stat['At Bats']}))
      row.append($('<td>', {text: stat['Home Runs']}))
      row.append($('<td>', {text: stat['Earned Runs']}))
      row.append($('<td>', {text: stat['Innings Pitched']}))
      row.append($('<td>', {text: stat['Strikeouts']}))

      return row
   })
  })
  $('.stats-list-container').html(statsElements)
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}
