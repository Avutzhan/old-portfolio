$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#mainnavigation').css('background-color', 'orange');
		  $('#mainnavigation').css('border-radius', '5px');
       } else {
          $('#mainnavigation').css('background-color', 'transparent');
       }
   });
});