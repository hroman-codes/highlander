var state = {
  teams: []
}

$(document).ready(function(){
  $.get('http://localhost:8080/teams/', function(data){
    console.log('data from initial get ajax call ===>', data);
    state.teams = data
    render()
  })
})

var teamId = getParameterByName('id')
function render() {
  //render teams
    var teamList = state.teams.map(function(teamInfo) {
      console.log(teamInfo)

      var theRealContainer = $('<div>', {
        class: 'column is-3 team-list-details-page'
      })

      var cardContainer = $('<div>', {
        class: 'card has-text-centered'
      })

      var cardContent = $('<div>', {
        class: 'card-content',
        id: 'theTeamBg'
      })

      var teamName = $('<p>', {
        class: 'title team-name',
        text: teamInfo.name
      })

      var teamCity = $('<p>', {
        class: 'subtitle team-city-state',
        text: teamInfo.city + ' ' + teamInfo.state
      })

      // card footer
      var teamListFooter = $('<footer>', {
        class: 'card-footer panel-heading dashboard-team-list-footer'
      })

      var cardFooterItem = $('<p>', {
        class: 'card-footer-item'
      })

      var viewPlayerSpan = $('<span>');

      var viewPlayerFooterLink = $('<a>', {
        text: 'View Team Details',
        href: 'http://localhost:8080/team-details.html?id=' + teamId
      })

      // append card content
      cardContainer.append(cardContent)
      cardContent.append(teamName)
      teamName.append(teamCity)
      // teamCity.append(teamList)

      //append card content to container
      theRealContainer.append(cardContainer)

      //footer
      teamListFooter.append(cardFooterItem)
      cardFooterItem.append(viewPlayerSpan)
      viewPlayerSpan.append(viewPlayerFooterLink)

      // append footer to the main card container
      theRealContainer.append(teamListFooter)

      return theRealContainer
  })
    $('.team-list-details-page').html(teamList)
}

function getParameterByName(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}
