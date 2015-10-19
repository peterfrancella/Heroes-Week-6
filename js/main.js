$(document).ready(function(e){
	
	$('img:first').addClass('shown').next().addClass('hide');
	$('.next').on('click', function(){
		var $shown = $('.shown');
		var title = $shown.removeClass('shown').next().addClass('shown').attr('title');
			$('h1').text(title);
	});
	
	
	$('img:last').addClass('shown').next().addClass('hide');
	$('.prev').on('click', function(){
		var $shown = $('.shown');
		var title = $shown.removeClass('shown').prev().addClass('shown').attr('title');
			$('h1').text(title);
	});


});