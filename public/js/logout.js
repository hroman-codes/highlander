$(document).ready(function() {
  $('.logout-session').on('click', function() {
    $.ajax({
      success: function() {
        localStorage.clear();
        location.href = 'http://localhost:8080/index.html';
      },
      fail: function() {
        alert('Logout function failed')
      }
    })
  })
})
