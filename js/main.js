// Contact Hand

$("#contact-link").hover(
  function() {
    $("#contact-hand").removeClass("slide-left").addClass("slide-right");
  }, function() {
    $("#contact-hand").addClass("slide-left").removeClass("slide-right");
});


// Contact Link Flyout

$("#contact-flyout").addClass("reroll");

$("#contact-link").click(function() {
  $("#contact-flyout").toggleClass("reroll").toggleClass("unroll");
  $("#contact").toggleClass("fade");
});


// Work link hover ((Under Construction))

// $("#link-products").hover(
//   function() {
//     $(".container").toggleClass("faded");
//   }, function() {
//     $(".container").toggleClass("faded");
// });


// Overlay Menu for Mobile

$("#nav-toggle").click(function(){
  $(".main-nav").toggle();
});

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });


// Fade in on scroll

$(document).ready(function() {
  $(window).scroll( function(){
    $(".hideme").each( function(){

      var bottom_of_object = $(this).offset().top + $(this).innerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      bottom_of_window = bottom_of_window + 200;

      if(bottom_of_window > bottom_of_object){
        $(this).addClass("fade-up");
      }
    });
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
    $(".gallery-slide-right").each( function(){

      var bottom_of_object = $(this).offset().top + $(this).innerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      bottom_of_window = bottom_of_window + 200;

      if(bottom_of_window > bottom_of_object){
        $(this).addClass("img-move-right");
      }
    });
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
    $(".gallery-slide-left").each( function(){

      var bottom_of_object = $(this).offset().top + $(this).innerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      bottom_of_window = bottom_of_window + 200;

      if(bottom_of_window > bottom_of_object){
        $(this).addClass("img-move-left");
      }
    });
  });
});


// Main menu flyout animation on hover

$(".main-nav a").hover(
  function() {
    $(this).children("span").addClass("fade-slide-up");
  }, function() {
    $(this).children("span").removeClass("fade-slide-up");
});


// Gallery Link Hover

$("#gallery-link").hover(
  function() {

});