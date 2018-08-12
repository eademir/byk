$(document).ready(function(){
    /*hide/show effects*/
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show(); /* parentes içerisine milisaniye değerinde sayı girilebilir. geçişi yavaşlatır.*/
    });
    $("#toggle").click(function(){
        $("p").toggle();
    });

    /*fade effects*/
    $("#fadein").click(function(){
        $(".diva").fadeIn();
        $(".divb").fadeIn("slow");
        $(".divc").fadeIn(2000);
    });
    $("#fadeout").click(function(){
        $(".diva").fadeOut();
        $(".divb").fadeOut("slow");
        $(".divc").fadeOut(2000);
    });
    $("#fadetoggle").click(function(){
        $(".diva").fadeToggle();
        $(".divb").fadeToggle("slow");
        $(".divc").fadeToggle(2000);
    });

    /*slide effects*/
    $("#flipdown").click(function(){
        $("#panel").slideDown(5000);
    });
    $("#flipup").click(function(){
        $("#panel").slideUp("slow");
    });
    $("#fliptoggle").click(function(){
        $("#panel").slideToggle("slow");
    });

    /*animation effect*/
    /*$("button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });*/

    /*stop animate*/
    $("#stop").click(function(){
        $("#panel").stop();
        alert("The paragraph is now stop.")
    });

    /*encoding chaining*/
    $("#chain").click(function(){
        $("#chaining").css({"backgroundColor": "red", "width": "100px", "height": "100px"}).slideUp(2000).slideDown(2000);/*ya da "width", "100px"*/
    });
});