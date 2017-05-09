$(document).ready(function() {
  $('.login-button').on('click', function(e){
    e.preventDefault()
    const postData = {
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
        url: 'http://localhost:8080/coaches/login',
        data: JSON.stringify(postData),
        success: function(response) {
            console.log(response)
            localStorage.setItem('coachId', response.id)
            location.href = 'http://localhost:8080/dashboard.html'
        },
        error: function() {
          alert('Wrong password please try again')
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
