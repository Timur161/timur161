$(document).ready(function(){
    $(".header-bottom").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $(".planning").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$('.slider-small img').click(function(){
	let id = $(this).attr('src');
    $('.slider img').attr('src', id);
});

$('.slider-right-button').click(function(){ 
	let idMain = parseInt($('.slider img').attr('id')); 
	console.log(idMain); 
	if (idMain == 8) { 
	idMain = -1; 
	} 
	idMain += 1; 
	let srcPhoto = $('.slider-small').find('img').map(function() { 
	return this.src; 
	}).get(); 
	let way; 
	for (let i = 0; i < srcPhoto.length; i++) { 
	way = srcPhoto[idMain]; 
	$('.slider img').attr('src', way); 
	$('.slider img').attr('id', idMain); 
} 
}); 

$('.slider-left-button').click(function(){ 
	let idMain = parseInt($('.slider img').attr('id')); 
	console.log(idMain); 
	if (idMain == 0) { 
	idMain = 9; 
	} 
	idMain -= 1; 
	let srcPhoto = $('.slider-small').find('img').map(function() { 
	return this.src; 
	}).get(); 
	let way; 
	for (let i = 0; i < srcPhoto.length; i++) { 
	way = srcPhoto[idMain]; 
	$('.slider img').attr('src', way); 
	$('.slider img').attr('id', idMain); 
} 
});

$('.tabs a').click(function(){
	let idTabs = $(this).data('id');
    let divRooms = $(`.rooms div[data-id="${idTabs}"]`);
    divRooms.removeClass('no-active').siblings().addClass('no-active');
});

