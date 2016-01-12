$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var person1 = $("input#person1").val();

    $('#myModalLabel').text("Dear "+person1+",");

    event.preventDefault();
  })

});
