(function($) { 
	"use strict";
	
jQuery(document).ready(function(){
	$('#cform').on( "submit", function() {

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.before('<div class="text-center"><img src="https://arrleteyricardo.s3.us-west-1.amazonaws.com/images/ajax-loader.gif" class="contact-loader" /></div>')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			events: $('#events').val(),
			guest: $('#guest').val(),
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#cform img.contact-loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#cform').slideUp('slow');
			}
		);

		});

		return false;

	});

});

}(jQuery));