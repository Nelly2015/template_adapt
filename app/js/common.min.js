


$(function() {

	//появление кнопки вверх, при прокрутки страницы
	$(window).scroll(function(){
		
		if ($(window).scrollTop() <= "250") {
			$("#bottom").fadeOut("slow");
		} else {
			$("#bottom").fadeIn("slow");
		}
		
	});


	
	//Прокрутка наверх
	 $("#bottom").click(function(){	 	
	 	$("html,body").animate({scrollTop:0},"slow");
	 });



	//Плавная прокрутка до нужного элемента
	 $('a[href^="#"]').on('click',function (e) {
	  	e.preventDefault();
	 	
		var target 		= this.hash,
	 		target_href = $(target);
		 
	 	$('html, body').stop().animate({

	 		 'scrollTop': target_href.offset().top

 		 },1000, 'swing', function () {
 		 		window.location.hash = target;			 	
 		 });
	 	
	});
	 	
	//});



	//Карусель
	$('#slides .owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    items:1,	    
	    autoWidth:false,
	    center:true,
	    dots:false,
	    smartSpeed:700,	    
	    nav:true

	    
	});

	$('.portfolio .owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    items:1,	    
	    autoWidth:false,
	    center:true,
	    dots:true,
	    smartSpeed:700,	    
	    nav:false

	    
	});

	$('.clients .owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    items:1,	    
	    autoWidth:false,
	    center:true,
	    dots:true,
	    smartSpeed:700,	    
	    nav:false
	    
	});

	
    
 
	
	//Раскрытие меню
	$(function() {
		var pull 		= $('.nav-bar');
			menu 		= $('nav ul');
			menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}

		
	});


	//SVG Fallback
	/*if(!Modernizr.svg){
		$("img[src*='svg']").attr("src", function(){
			return $(this).attr("src").replace(".svg", ".png");	
		});
	};
*/

	
});
