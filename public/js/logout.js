var APP_URL = 'http://localhost:8080/'

$(document).ready(function() {
  $('.logout-session').on('click', function() {
    $.ajax({
      success: function() {
        localStorage.clear();
        location.href = APP_URL + 'index.html';
      },
      fail: function() {
        alert('Logout function failed')
      }
    })
  })
})
