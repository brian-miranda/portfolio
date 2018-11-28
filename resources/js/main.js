$(document).ready(function() {
  // header animation
  $(function(){
  $("#header-nav").data("size","big");
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 0)
  {
      if($("#header-nav").data("size") == "big")
      {
          $("#header-nav").data("size","small");
          $("#header-nav").stop().animate({
            height:"80px"
          },400);
          $(".logo img").css("height", "40");
          $(".logo").css("margin-top", "20px");
          $(".logo img").css("transform", "rotate(270deg)");
          $(".brand").fadeOut();
          $(".sidenav div").css("text-align", "left");
          $(".sidenav div").css("width", "70px");
      }
  }
  else
    {
      if($("#header-nav").data("size") == "small")
        {
          $("#header-nav").data("size","big");
          $("#header-nav").stop().animate({
            height:"160px"
          },100);
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

});
