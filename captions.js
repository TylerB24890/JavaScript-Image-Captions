/**
	
	@project	Javascript Image Captions
	@author		Tyler Bailey
	@version	1.0

*/

$(window).load(function captions(){ 
	// For each instance of a.caption
	$("a.caption").each(function(){
		$(this)
			// Add the following CSS properties and values
			.css({
				"height" : $(this).children("img").height() + "px",
				"width" : $(this).children("img").width() + "px"
			})
			// Select the child "span" of this p.caption
			.children("span").css(

				//subtract 10px to callibrate for the padding
				"width", $(this).width() - 10 + "px")

			// find the <b> tag if it exists (for caption title)
			.find("b").after('<div class="clear"></div>');
		
			// When you hover over p.caption
			$("a.caption").hover(function(){
				//image opacity to .6
				$(this).children("img").stop().fadeTo(500, .6);
				//Fade in the child "span"
				$(this).children("span").stop().fadeTo(500, 1);
			}, function(){
				//mouse off, fade it out
				$(this).children("span").stop().delay(0).fadeOut(200);
				//mouse off, fade image back to 1
				$(this).children("img").stop().delay(0).fadeTo(500, 1);
			});
	// End $(this)	 
	});
});