
$(function(){

  $(".submenu").click(function() {
     // console.log('nav was clicked');
     $(".nav").slideToggle();
  });

  $("li").click(function(){
          console.log('link was clicked');
          //remove the active class from all links
          $('li a').removeClass("active");
          //add active class to the link that was selected
          $(this).addClass("active");
  });



// $(function(){
//   $(".submenu").click(function(){
//     if(!$(".nav").hasClass("slideUp")){
//       $(".nav").addClass("slideUp");
//     } else {
//       $(".nav").removeClass("slideUp");
//     }
//   })
// })

});