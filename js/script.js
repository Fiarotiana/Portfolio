$(".close-contact").click(function() {
    $(".page-wrapper").removeClass("toggled");
});

$(".show-contact").click(function() {
    $(".page-wrapper").addClass("toggled");
});
    
$("#web").click(function(){
    $(".work-content .content").hide("slow");
    $(".work-content .content.web").show("slow");
    $(".work-content.web").removeClass("hide-work");
    $(".work-content.logo").addClass("hide-work");
});

$("#logo").click(function(){	
    $(".work-content .content").hide("slow");
    $(".work-content .content.logo").show("slow");
    $(".work-content.logo").removeClass("hide-work");
    $(".work-content.web").addClass("hide-work");
});

$("#all").click(function(){
    $(".work-content").removeClass("hide-work");
    $(".work-content .content").hide("slow");
    $(".work-content .content").show("slow");

});