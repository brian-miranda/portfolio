$(document).ready(function() {
  $('#contact').ajaxForm(function() {
      alert("I'll contact you soon! Now scram!");
  });

  $(function(){
  $('#header_nav').data('size','big');
  });


  $(window).scroll(function(){
    if($(document).scrollTop() > 0)
  {
      if($('#header_nav').data('size') == 'big')
      {
          $('#header_nav').data('size','small');
          $('#header_nav').stop().animate({
            height:'80px'
          },400);
          $('.logo img').css('height', '40');
          $('.logo').css('margin-top', '20px');
          $('.logo img').css('transform', 'rotate(270deg)');
          $('.brand').fadeOut();
          $('.sidenav div').css('text-align', 'left');
          $('.sidenav div').css('width', '70px');
      }
  }
  else
    {
      if($('#header_nav').data('size') == 'small')
        {
          $('#header_nav').data('size','big');
          $('#header_nav').stop().animate({
            height:'160px'
          },100);
          $('.logo img').css('height', '80');
          $('.logo').css('margin', '40px');
          $('.logo img').css('transform', 'rotate(0deg)');
          $('.brand').fadeIn();
          $('.sidenav div').css('text-align', 'left');
          $('.sidenav div').css('width', '150px');
        }
    }
  });
});

// Change heading
