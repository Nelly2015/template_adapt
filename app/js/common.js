$(function() {
	
	//Карусель
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    items:1,	    
	    autoWidth:false,
	    center:true,
	    dots:false,
	    // lazyLoad: true,
	    /*autoHeight:false,	 */   
	    nav:true
	    
	});
	//SVG Fallback
	/*if(!Modernizr.svg){
		$("img[src*='svg']").attr("src", function(){
			return $(this).attr("src").replace(".svg", ".png");	
		});
	};
*/

	
});
