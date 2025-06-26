$("h1").css("color","purple");
$(document).keydown(function (event){
    $("h2").text(event.key);
})
$(".fade").click(function (){
    $(".box").fadeToggle();
})
$(".slide").click(function (){
    $(".box").slideToggle();
})