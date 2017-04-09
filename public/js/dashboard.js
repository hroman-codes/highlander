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

   // stats module
   var mergeTeamStats = [];
   data.teams.map(function(team){
    //  console.log('the teams map', team)
      team.players.map(function(player){
        console.log('the players map', player)
        var playerStats = {
          firstName: player.first_name,
          lastName: player.last_name,
          position: player.position,
          'Hits':0,
          'At Bats':0,
          'Home Runs':0,
          'Earned Runs':0,
          'Innings Pitched':0,
          'Strikeouts': 0
        };
        player.stats.map(function(stat){
          // console.log('the stats map', stat)
          playerStats[stat.catalog.description] = stat.how_many;
        });
        // var tableBody = $('<tbody>', {
        //   class: 'stat-details-container'
        // });
        var row = $('<tr>');
        row.append($('<th>', {text: playerStats.position}));
        row.append($('<td>', {
          text: playerStats.firstName + ' ' + playerStats.lastName,
          href: "http://localhost:8080/roster-list-player.html?id=" + player.id
        }));
        row.append($('<td>', {text: playerStats['Hits']}));
        row.append($('<td>', {text: playerStats['At Bats']}));
        row.append($('<td>', {text: playerStats['Home Runs']}));
        row.append($('<td>', {text: playerStats['Earned Runs']}));
        row.append($('<td>', {text: playerStats['Innings Pitched']}));
        row.append($('<td>', {text: playerStats['Strikeouts']}));

        mergeTeamStats.push(row)
        // console.log(playerStats);
        // tableBody.append(row);
        })
      });
      $('.stat-details-container').html(mergeTeamStats)
    })
  })
