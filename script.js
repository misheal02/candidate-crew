$("#news").click(function(){
  var entry = $("textarea").val();
  $("ol").append('<li>'+entry+'</li>');
})