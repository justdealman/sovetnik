$(document).ready(function() {
	$(window).bind('scroll', function() {
		if ( $(document).scrollTop() > $('header').height()-$('header .menu').height() ) {
			$('header .menu').css({
				'position': 'fixed',
				'top': '0',
				'bottom': 'auto',
				'background': 'rgba(25,30,45,0.75)'
			});
		}
		else {
			$('header .menu').css({
				'position': 'absolute',
				'top': 'auto',
				'bottom': '0',
				'background': 'rgba(25,30,45,0.5)'
			});
		}
	});
	$('header .menu li a').bind('click', function(event) {
		var t = $('[data-anchor="'+$(this).attr('href')+'"]');
		if ( t.attr('data-normalize') ) {
			var n = eval(t.attr('data-normalize'));
		}
		else {
			var n = 0;
		}
		$('body, html').stop().animate({
			scrollTop: t.offset().top-$('header .menu').height()-n+'px'
		}, 500);
		event.preventDefault();
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
});
$(window).load(function() {
	if ( $('header .information').length > 0 ) {
		$('header .information').css({
			'margin-top': -$('header .information').outerHeight()/2+13+'px',
			'opacity': '1'
		});
	}
	if ( $('.about > div').length > 0 ) {
		$('.about > div').css({
			'margin-top': -$('.about > div').outerHeight()/2-5+'px',
			'opacity': '1'
		});
	}
});