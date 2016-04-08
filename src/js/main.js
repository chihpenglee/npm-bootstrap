// Load dependencies: jQuery and Twitter Bootstrap
global.jQuery = global.$ = require('jquery');
var bootstrap = require('bootstrap');

$(function() {
	// affix
	var padding = $('body').data('offset');
	$('#main-scroll a').click(function (e) {
			e.preventDefault();
			var $that = $(this);
			if (history.pushState) {
				history.pushState(null, null, $that.attr('href'));
			} else {
				window.location.hash = $that.attr('href');
			}
			var offset_y_max = $('body').height() - window.innerHeight + padding;
			var offset_y = $($(this).attr('href')).offset().top - offset_y_max;
			var scroll_y = $($(this).attr('href')).offset().top - padding + 1; 

			$('body').animate({
					scrollTop: scroll_y
			}, 500, function(){
				if (!$that.hasClass('active')) {
					$that.parent('li').siblings().removeClass('active');
					$that.parent('li').addClass('active');
				}
			});
	});

	// 1-2 scrollspy
	var scrollspy_clicked = false;
	var last_x;
	var last_y;

	$('#navbar-spy').on('activate.bs.scrollspy', function () {
		if (scrollspy_clicked) {
			scrollspy_clicked = false;
			window.scroll(last_x, last_y);
		}
	});
	$('#navbar-spy').on('click', 'a', function (e) {
		scrollspy_clicked = true;
		last_x = window.scrollX;
		last_y = window.scrollY;
	});
	
	// 1-11 javascrip form validation
	$('#save').click(function() {
		var form_valid = true;
		$('#myRegister input').each(function() {
			var form_group = $(this).parents('.form-group');
			var glyphicon = form_group.find('.glyphicon');

			if (this.checkValidity()) {
				form_group.addClass('has-success').removeClass('has-error');
				glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
			} else {
				form_group.addClass('has-error').removeClass('has-success');
				glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
				form_valid = false;
			}
		});
		if (form_valid) {
			$('#myRegister').modal('hide');
			$('#success-alert').removeClass('hidden');
		}
	});
});

