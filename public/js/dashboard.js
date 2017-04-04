$(document).ready(function() {
  var coachId = getParameterByName('coach');
   $.get('http://localhost:8080/coaches/' + coachId, function(data) {
     console.log(data);
     var listTeams = data.teams.map(function(team){
     var listTeam = $('<li>');
     var linkTeam = $('<a>', {
         text: team.name,
         href: 'http://localhost:8080/team.html?id='+ team.id
       });
       listTeam.append(linkTeam);
       return listTeam;
     });
     var fullname = data.first_name + ' ' + data.last_name;
     var userEmail = data.email;

     $('.coach-fullname').text(fullname);
     $('.coach-email').text(userEmail);
     $('.teams-list-container').append(listTeams);
     $('.add-team-message').remove();
   })
})

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
