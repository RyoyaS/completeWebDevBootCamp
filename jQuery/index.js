$("h1").addClass("big-title margin-50");

$("h1").text("Bye");
$("button").html("<em>Hey</em>");

console.log($("img").attr("src"));
$("a").attr("href","https://www.yahoo.com/");


$("button").click(function () {
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    $("h1").animate({opacity:0.5});
})

$(document).keydown(function(e){
    $("h1").text(e.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color","purple");
})