$(document).ready(function () {
  var coachId = localStorage.getItem('coachId'); //getParameterByName('coachId');
   $.get('http://localhost:8080/coaches/' + coachId, function(data) {
     var listTeams = data.teams.map(function(team){
     var listTeam = $('<li class="panel-heading">')
     var linkTeam = $('<a>', {
         text: team.name,
         href: 'http://localhost:8080/team.html?id='+ team.id
       })
       listTeam.append(linkTeam)

       return listTeam
     })

     var fullname = data.first_name + ' ' + data.last_name
     var userEmail = data.email

     $('.coach-fullname').text(fullname)
     $('.coach-email').text(userEmail)
    //  $('.teams-list-container').append(listTeams)
    $('.teams-list-container').html(listTeams)
    //  $('.add-team-message').remove()

     var mergedListPlayers = []
     data.teams.map(function(team){
       var players = team.players

       players.map(function(player){
         //card container div
         var listPlayer = $('<div>', {
           class:"card has-text-centered"
         })
         var listPlayerContent = $('<div>',{
           class:"card-content",
           id: "theTeamBg"
         })

        // card content
         var listPlayerName = $('<p>', {
           class: 'title player-name',
           text: player.first_name + ' ' + player.last_name
         })
         var listPlayerEmail = $('<p>', {
           class: 'subtitle player-email',
           text: player.email
         })
         var listTeamName = $('<p class="team-name">', {
             text: team.name
          })
         var listPlayerPosition = $('<p>', {
           class: 'player-position',
           text: player.position
         })

         // card footer
         var listPlayerFooter = $('<footer>', {
           class: 'card-footer panel-heading dashboard-roster-footer',
         })

         var listPlayerContentFooter = $('<p>', {
           class: 'card-footer-item'
         })

         var editPlayerSpan = $('<span>');

         var editPlayerFooterLink = $('<a>', {
           text: 'View Player',
           href: 'http://localhost:8080/roster-list-player.html?id=' + player.id
         })

         // append card content
         listPlayerContent.append(listPlayerName)
         listPlayerContent.append(listPlayerEmail)
         listPlayerContent.append(listTeamName)
         listPlayerContent.append(listPlayerPosition)

         // append card content to main card container
         listPlayer.append(listPlayerContent)

         // append footer content
         listPlayerFooter.append(listPlayerContentFooter)
         listPlayerContentFooter.append(editPlayerSpan)
         editPlayerSpan.append(editPlayerFooterLink)

         // append footer content to main card container
         listPlayer.append(listPlayerFooter)

        // push to array
         mergedListPlayers.push(listPlayer)
       })
     })

   $('.player-details-dashboard-page').html(mergedListPlayers)
   $('.roster-dashboard-message').remove()
  })

 var playerId = localStorage.getItem('playerId')
  $.get('http://localhost:8080/players/' + playerId + '/stats', function (data) {
    console.log(':: this is the player data ::', data)

    // var mergedPlayerStats  = []
    data.stats.map(function(playerStats) {
      var playerName = data.first_name + ' ' + data.last_name
      var description = playerStats.catalog
      var howMany = playerStats.how_many
      console.log(playerName)
      console.log(description)
      console.log(howMany)

      // players.map(function(stat) {
      //     var listStat = $('<tr>', {
      //       class: 'the-table-of-life'
      //     })
      //     var playerPosition = $('<th>', {
      //       class: 'player-position',
      //       text: data.position
      //     })
      //     var playerName = $('<td>', {
      //       playerlink: $('<a>', {
      //         href: 'http://localhost:8080/roster-list-player.html?id=', //+ player.id,
      //         text: data.first_name + ' ' + data.last_name
      //       })
      //     })
      //     var playerHits = $('<td>', {
      //       class: 'player-hits',
      //       text: data.how_many
      //     })
      //
      //     var playerStatCatalog = stat.catalog
      //     console.log('This is the stat catalog ======>', playerStatCatalog)
      //
      //     var playerHowMany = stat.how_many
      //     console.log('This is how many =======>', playerHowMany)
      //
      //     listStat.append(playerPosition)
      //     listStat.append(playerName)
      //     listStat.append(playerHits)
      // })
    })
    // $('.stat-details-container').html(listStats);
  })
})

// Goal: List player and stat
// Steps:
  // map through the players data and store it in a var //
  // abstract the stats out in a var//
  // then map through the var which stors the stats//
  // console.log the var to see what kind of data I am getting//
  //
  // create nodes targeting the elements you want to update and store it in
  // in a var
  //
  // then append the node var to the parent node divs
  //
  // return if need be

// function getParameterByName(name) {
//     var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
//     return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
// }
