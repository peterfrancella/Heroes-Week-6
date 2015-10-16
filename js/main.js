$(document).ready(function(){
//	$(".gallery").addClass('active');
	$('img:first').addClass('shown');
	$('.name').text('Batman');

});


//	$('img:second').addClass('shown');
//	$('.name').text('captain');

//});

$('.next').on('click', function(e){
	$('next').addClass('shown');
	$('.name').text('Captain America');

});