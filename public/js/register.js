var APP_URL = 'https://highlandersport.herokuapp.com/'

 $(document).ready(function() {
   $('.register-button').on('click', function(e){
     e.preventDefault()
     const postData = {
       first_name: $('#first_name').val(),
       last_name: $('#last_name').val(),
       email: $('#email').val(),
       password: $('#password').val()
     }

     console.log('postData', postData)

     if ($('.required').val().length === 0) {
       $('.add-team-error-notification').slideDown('fast')
       window.setTimeout(closeWarningMessage, 3000)

       function closeWarningMessage() {
         $('.add-team-error-notification').slideUp('fast')
       }

       return;
     } else {
       $.ajax({
         type: 'POST',
         url: APP_URL + 'coaches',
         data: JSON.stringify(postData),
         success: function(response) {
          console.log(response);
          localStorage.setItem('coachId', response.id);
          location.href = APP_URL + 'dashboard.html';
         },
         fail: function() {
           alert('Create Coach function failed')
         },
         contentType: 'application/json',
         datatype: 'json'
       })
     }
   })
 })

 function getParameterByName(name) {
     var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
     return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
 }
