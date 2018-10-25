$(document).ready(function() {
  // header animation
  $(function(){
  $("#header_nav").data("size","big");
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 0)
  {
      if($("#header_nav").data("size") == "big")
      {
          $("#header_nav").data("size","small");
          $("#header_nav").stop().animate({
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
      if($("#header_nav").data("size") == "small")
        {
          $("#header_nav").data("size","big");
          $("#header_nav").stop().animate({
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

  // contact form
  var errors = false;
    $('.required').parent().find('.input').on('blur', function() {
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        if (!$.empty_field_validation($(this).val())) {
            error_div.html('This field is required.');
            error_div.css('display', 'block');
            field_container.addClass('error');
			errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
			errors = false;
        }
    });
    $('#email').on('blur', function(){
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        if (!$.email_validation($(this).val())) {
            error_div.html('Expected Input: email');
            error_div.css('display', 'block');
            field_container.addClass('error');
			errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
			errors = false;
        }
    });
	$('#contact_form').submit(function(event) {
		event.preventDefault();
		 $('.required').parent().find('.input').trigger('blur');
        if (!errors)
            $.ajax({
                url: '/echo/json/',
                data: {
                    json: JSON.stringify($(this).serializeObject())
                },
                type: 'post',
                success: function(data) {
                    var message = 'Hi '+data.name+'. Your message was sent and received.';
                    $('#after_submit').html(message);
                    $('#after_submit').css('display', 'block');
                },
                error: function() {
                    var message = 'Hi '+data.name+'. Your message could not be sent or received. Please try again later';
                    $('#after_submit').html(message);
                    $('#after_submit').css('display', 'block');
                }
            });
		else
			alert("You didn't completed the form correctly. Check it out and try again!");
	});

});

// contact form validation or some shit
$.empty_field_validation = function(field_value) {
    if (field_value.trim() == '') return false;
    return true;
}

$.email_validation = function(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};
