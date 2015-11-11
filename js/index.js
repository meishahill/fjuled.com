
// $(function(){
//   $(".burger").click(function() {
//     $("ul .nav").slideToggle();
//   });

// });

$(function(){
  $("#hamburger").click(function(){
    if(!$("#hamburger").parent().hasClass("slideDown")){
      $("#hamburger").parent().addClass("slideDown");
    } else {
      $("#hamburger").parent().removeClass("slideDown");
    }
  })
})
