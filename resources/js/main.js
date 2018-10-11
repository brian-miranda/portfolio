$(document).ready(function() {
  $('#contact').ajaxForm(function() {
      alert("I'll contact you soon! Now scram!");
  });

  $(function(){
  $('#header_nav').data('size','big');
  $('.brand').data('position','yes');
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
        }
    }
  });

});
