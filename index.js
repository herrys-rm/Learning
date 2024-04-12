$(document).ready(function() {
    $("h1").css("color", "purple");
    $("h2").text("titleChanges");

    $("button").text("Buttonchanges")

    // manipulation attribute jquery
    $("a").attr("href", "https://bing.com")
} )

// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
// document.querySelector("h2").style.color = "purple"
//     })
// }

$("button").click(function(){
    $("h2").css("color", "dodgerblue")
})

$(document).keypress(function(event) {
    $("h1").text(event.key)
})

// $(document).on("click", function() {
//     $("h1").slideToggle()
// })

$(document).on("click", function () {
  $("h1").animate({opacity : 0.5});
});