$(document).ready(function() {
  // header animation
  $(function() {
    $("#header-nav").data("size", "big");
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
      if ($("#header-nav").data("size") == "big") {
        $("#header-nav").data("size", "small");
        $("#header-nav").stop().animate({
          height: "80px"
        }, 400);
        $(".logo img").css("height", "40");
        $(".logo").css("margin-top", "20px");
        $(".logo img").css("transform", "rotate(270deg)");
        $(".brand").fadeOut();
        $(".sidenav div").css("text-align", "left");
        $(".sidenav div").css("width", "70px");
      }
    } else {
      if ($("#header-nav").data("size") == "small") {
        $("#header-nav").data("size", "big");
        $("#header-nav").stop().animate({
          height: "160px"
        }, 100);
        $(".logo img").css("height", "80");
        $(".logo").css("margin", "40px");
        $(".logo img").css("transform", "rotate(0deg)");
        $(".brand").fadeIn();
        $(".sidenav div").css("text-align", "left");
        $(".sidenav div").css("width", "150px");
      }
    }
  });

  // modal stuff
  $('a.box').click(function(event) {
    $(this).modal({
      fadeDuration: 500,
    });
    return false;
  });

  // scroll animated buttons
  $("#work").click(function() {
    $('html,body').animate({
      scrollTop: $("#start").offset().top
    }, 'slow');
  });

  $("#about").click(function() {
    $('html,body').animate({
      scrollTop: $("#resume").offset().top
    }, 'slow');
  });

  $("#contact").click(function() {
    $('html,body').animate({
      scrollTop: $("#end").offset().top
    }, 'slow');
  });

  // quote randomizer
  var slogans = ["A modest site for modest mice!",
                "It's dot com!",
                "A normal functioning member of the human race!",
                "Cynical views on the world and stuff since 1992.",
                "Pioneer of aerodynamics.",
                "They have the internet on computers now!",
                "A few lines of code say more than a thousand words.",
                "Just hire me already!",
                "In a few devoted hearts I've found a strong fanbase!",
                "I probably won't like you very much, but that doesn't mean we can't do something cool",
                "Love is hate. Hate is love."]

});
