$(document).ready(function(){
  $('form').on('submit', function(e){
    var postData = {
      first_name: $('#first_name').val(),
      ...
    };
    //$.post(url, data, success_callback)
    $.ajax({
      type: 'POST',
      url: 'http:/localhost:8080/teams/',
      data: JSON.stringify(postData),
      success: function(data){
        //location.href = '/team-list.html'
      },
      contentType: "application/json",
      dataType: 'json'
    });
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
