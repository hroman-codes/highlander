$(document).ready(function() {
  $('#addPlayerButton').on('click', function() {
    $('.add-player-modal').addClass('is-active').fadeIn('slow')
  })

  $('.form-trigger-add-player').on('click', function(e) {
    console.log('add player button clicked')
    e.preventDefault()
    var postData = {
      email: $('#playerEmail').val(),
      first_name: $('#firstName').val(),
      last_name: $('#lastName').val(),
      position: $('#playerPosition').val()
      // team_id: $('#teamId').val()
    }
    console.log('postData', postData)

    if ($('.required').val().length === 0) {
      $('.add-team-error-notification').slideDown('fast')
      window.setTimeout(closeWarningMessage, 3000)

      function closeWarningMessage() {
        $('.add-team-error-notification').slideUp('fast')
      }
      console.log('I made it here')

      return;
    } else {
      console.log('I made it here')

      var playerId = getParameterByName('id')
      console.log('I made it here')
      console.log('playerId', playerId)
      $.ajax({
        type: 'POST',
        url:'http://localhost:8080/players/' + playerId,
        data: JSON.stringify(postData),
        success: function(data) {
          $('.add-team-notification').slideUp('fast')
          window.setTimeout(closeNotification, 2000)

          function closeNotification() {
            $('.add-team-notification').slideUp('fast')
          }
          window.setTimeout(reload, 3000)

          function reload() {
            location.reload()
          }
        },
        fail: function() {
          alert('Add player function fail, please try again.')
        },
        contentType: 'application/json',
        dataType: 'json'
      })
    }
  })
  $('.delete').on('click', function() {
    $('.modal').hide()
  })
})

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
