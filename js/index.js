
$(function(){

  $(".submenu").click(function() {
     // console.log('nav was clicked');
     $(".nav").slideToggle();
    $("ul").append('<li><a href="https://instagram.com/marylouise0701/" target="_blank">Instagram</a></li>');
    $("ul").append('<li><a href="http://www.fjuled.com/blog/" target="_blank">Blog</a></li>');
  });

  $(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
 

});

