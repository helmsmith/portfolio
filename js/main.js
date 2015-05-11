// Contact Hand

$("#contact-link").hover(
  function() {
    $("#contact-hand").toggle().addClass("hand-slide");
  }, function() {
    $("#contact-hand").toggle();
});


// Contact Link Flyout

$("#contact-link").click(function() {
  $("#contact-flyout").toggle().toggleClass("unroll");
  $("#social-links").toggleClass("contact-margin").removeClass("hideme").removeClass("fade-up");
});


// Work link hover ((Under Construction))

$("#link-products").hover(
  function() {
    $(".container").toggleClass("faded");
  }, function() {
    $(".container").toggleClass("faded");
});


// Overlay Menu for Mobile

$("#menu-btn").click(function(){
  $(this).hide();
  $(".main-nav").fadeIn();
});

$("#close-btn").click(function(){
  $(".main-nav").fadeOut();
  $("#menu-btn").show();
});

$(".main-nav").click(function(){
  $(".main-nav").fadeOut();
  $("#menu-btn").show();
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


// Main menu flyout animation on hover

$(".main-nav a").hover(
  function() {
    $(this).children("span").addClass("fade-slide-up");
  }, function() {
    $(this).children("span").removeClass("fade-slide-up");
});


// $(window).resize(function(){
//   if ($(window).width() >= 550){  
//     $(".main-nav").show();
//   } else if ($(window).width() <= 550){
//     $(".main-nav").hide();
//     $(".hamburger").show();
//   }
// });