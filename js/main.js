$(function(){

//-------start mobil menu----------

$('.menu-button').click(function(){
		$(this).toggleClass('active');
		$('.sticky-header').toggleClass('active');
		$('.menu').toggleClass('active')
		
	})

$('.menu li a').click(function(){
$('.menu').removeClass('active');
$('.menu-button').removeClass('active');
})

//-------end mobil menu------------

// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.sticky-header').addClass("sticky");
}
else{
$('.sticky-header').removeClass("sticky");
}
});

//-------end sticky header--------

// ------start faq ------

$('.faq__sub-item h3').click(function(){
		$(this).parent().toggleClass('active');
		
	})
// ------end faq ------
});