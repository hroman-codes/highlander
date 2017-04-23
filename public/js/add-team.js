$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var postData = {
      teamName: $('#teamName').val(),
      cityLocation: $('#cityLocation').val(),
      stateLocation: $('#stateLocation').val()
    };
    console.log(postData)

    if ( $('.required').val().length === 0) {
      $('.add-team-error-notification').slideDown('fast');
      window.setTimeout(closeWarningMessage, 3000);

      function closeWarningMessage() {
        $('.add-team-error-notification').slideUp('fast');
      }

      return;
    } else {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/teams/',
        data: JSON.stringify(postData),
        success: function(data) {
          $('.add-team-notification').slideDown('fast');
          window.setTimeout(close1, 2000);

          function close1() {
            $('.add-team-notification').slideUp('fast');
          }
          window.setTimeout(myFunc, 3000)

          function myFunc(){
            location.href = '/team-list.html'
          }
        },
        contentType: "application/json",
        dataType: 'json'
      });
    }
  })
})

















/*
$.ajax({
  type: 'PUT',
  url: 'http:/localhost:8080/teams/',
  data: JSON.stringify(postData),
  success: function(data){
    //location.href = '/team-list.html'
  },
  fail: function(error){
    //$('#alert').text(error);
    //console.log(error)
  },
  contentType: "application/json",
  dataType: 'json'
})
*/
