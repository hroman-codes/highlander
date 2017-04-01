$(document).ready(function() {
  var coachId = getParameterByName('coach');
   $.get('http://localhost:8080/coaches/' + coachId, function(data) {
     console.log(data);
     var listItems = data.teams.map(function(team){
       var listItem = $('<li>');
       var link = $('<a>', {
         text: team.name,
         href: 'http://localhost:8080/team.html?id='+ team.id
       });
       listItem.append(link);
       return listItem;
     });

     var fullname = data.first_name + ' ' + data.last_name;
     var userEmail = data.email;
     $('.coach-fullname').text(fullname);
     $('.coach-email').text(userEmail);
     $('.teams-container').append(listItems);
   })
})


function getParameterByName(name) {
    // [?&]coach=([^&]*)
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    // [coach, 1]
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
