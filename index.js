var size = $('#size');
var grid = $("#grid");
var s = 16;
var boxSize = (460/s)-2;
var color = "#FFFFFF";
$(".box").height(boxSize+"px");
$(".box").width(boxSize);

console.log(s);

$("input[name='color']").change(function(){
	color = $("input[name='color']:checked").val();
	console.log(color);
});



var draw = function() {
	$(".box").mouseenter(function(){
		$(this).css("background-color",setColor(color));

	});
};

console.log("boxSize ="+boxSize);


var setColor = function(color){
	switch(color) {
		case "red":
			return "#FF0000";
		case "green":
			return "#00FF00";
		case "blue":
			return "#0000FF";
		case "black":
			return "#111111";
		case "rand":
			return "rgb(" + Math.floor(Math.random()*255+1) + ',' + Math.floor(Math.random()*255+1) + ','  + Math.floor(Math.random()*255+1) +")";
		default:
			return "#FFFFFF";
	}		
};

$(document).ready(function(){
	$("#color").hover(function(){
		$(".menu").slideToggle("fast");
	});
	dgrid();
});

var dgrid = function(){
	for( i = 1; i <= (s*s); i++) {
			grid.append($("<div class=\"box\"></div>"));
	}
	boxSize = (grid.height()/s)-2;
	$(".box").height(boxSize+"px");
	$(".box").width(boxSize+"px");
	draw();
};



$(".button").click(function(){
	s = $(size).val();

	if(s < 1 || s >128){
		alert("Please set a size between 0 and 128");
	}else if (isNaN(s)) {
		alert("Please enter a number that is between 0 and 128");
	}else{
		grid.empty();

		dgrid();
	}
});

$("#clear").click(function() {
	$(".box").css("background-color","#343434");
});
