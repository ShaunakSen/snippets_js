

$("#getMessage").click(function(){
  var html = "";
  $.getJSON('data.json', function(json){

    json = json.filter(function(val){
      return (val.id != 1);
    })
    console.log(json);
    json.forEach(function(value, index){
      var keys = Object.keys(value)
      console.log(keys);
      html += "<div class='cat'>";
      html += '<img src="' + value.imageLink + '">';
      keys.forEach(function(key){
        html += "<b> " + key + " </b> " + value[key] + "<br/>";

      });
      html += "</div><br/>";
    });
    $(".message").html(html);
  });

  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
  })

})
