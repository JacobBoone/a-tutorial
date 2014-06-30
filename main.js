$(document).on('ready', function() {
  

// Hides the text to start with
$("p").hide();

// on the click it shows the text
$("h1").click(function() {
	$(this).next().slideToggle(300);
	// $(this).next().show();  // added this line to see difference between show and slidetoggle
	console.log("crazy man")
	});



});