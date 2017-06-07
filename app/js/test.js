


$(document).ready(function () {	
	//Появление и исчезновение кнопки при прокрутки страницы
	$(window).scroll(function(){

		if ($(window).scrollTop() <= "250") {
			$("#ToTop").fadeOut("slow");
		} else {
			$("#ToTop").fadeIn("slow");
		}
		if (($(window).scrollTop() + $(window).height() + 250) >= document.body.clientHeight) {
			$("#ToBottom").fadeOut("slow");
		} else {
			$("#ToBottom").fadeIn("slow");
		}
	});

	//Прокрутка наверх
	 $("#ToTop").click(function(){	 	
	 	$("html,body").animate({scrollTop:0},"slow");
	 });

	 //Прокрутка вниз
	$("#ToBottom").click(function(){		
		$("html,body").animate({scrollTop:document.body.clientHeight},1000);

	});

	//Плавная прокрутка до нужного элемента
	$('a[href^="#"]').on('click',function (e) {
	 	e.preventDefault();
	 	
		var target 		= this.hash,
			target_href = $(target);
		 
		$('html, body').stop().animate({

			 scrollTop: target_href.offset().top

		 },500, 'swing', function () {
		 		window.location.hash = target;			 	
		 });
	});
});

