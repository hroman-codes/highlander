APP_URL = 'https://pacific-wildwood-70161.herokuapp.com/'

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
