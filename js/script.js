$(document).ready(function(){
  $("#button1").click(function(){
    $("#pdesign").toggle();
  });
});

$(document).ready(function(){
  $("#button2").click(function(){
    $("#pdev").toggle();
  });
});

$(document).ready(function(){
  $("#button3").click(function(){
    $("#pproduct").toggle();
  });
});


/*the form function comes here*/
function myFunction(event){
   var names = document.getElementById('names').value;
    alert('Thank you, ' + names + ', Your message has been received. ');
      event.preventDefault();
}

/*the snake gallery function will come here */

$(".snake").snakeify({
  speed: 200

});
