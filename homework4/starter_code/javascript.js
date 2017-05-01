

$(document).ready(function(){
	$("button").click(function(event) {
    event.preventDefault();
    	/show alert to check if form submission was prevented/
		alert("was preventDefault() called: " + event.isDefaultPrevented()); 
	});

	/when 'read more' is clicked, slide down/

	$(".readmore").click(function(){
		$("p").slideDown();
	});
	
	/when 'read more' is clicked, reveal 2nd paragraph/

	$(".readmore").click(function(){
		$("p").show();
	});

	/when 'read more' is clicked, hide 'read more' button/

	$(".readmore").click(function(){
		$(".readmore").hide();
	});

	/when 'read less' is clicked, slide up and hide 2nd paragraph/

	$(".readless").click(function(){
		$("p#show-this-on-click.hide").slideUp();
	});

	/when 'read less' is clicked, hide 'read less' button/

	$(".readless").click(function(){
		$(".readless").hide();
	});

	/when 'read less' is clicked, reveal 'read more' button/

	$(".readless").click(function(){
		$(".readmore").show();
	});

	/when 'Learn More' is clicked, slide down <span> inside that <p>/

	$(".learnmore").click(function(){
		$("p.span").slideDown();
	});


	/when 'Learn More' is clicked, show the 'learn more' text and 'learn less' button/

	$(".learnmore").click(function(){
		$(".learnless.hide").show();
	});


	/when 'Learn More' is clicked, hide the 'Learn More' button/

	$(".learnmore").click(function(){
		$(".learnmore").hide();
	});

	/when 'Learn Less' is clicked, slide up and hide <span> inside that <p>/

	$(".learnless").click(function(){
		$("span#learnmoretext.hide").slideUp();
	});


	/when 'Learn Less' is clicked, hide the 'Learn Less' button/

	$(".learnless").click(function(){
		$(".learnless").hide();
	});

	/when 'Learn Less' is clicked, reveal 'Learn More' button/

	$(".learnless").click(function(){
		$(".learnmore").show();
	});

});
