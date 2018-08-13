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

    /*javascript if else döngü*/
    /*var number = 7;
    var otherNumber = prompt("Aklımdan 1'den 10'a kadar hangi sayıyı tutuyorum, bil bakalım.", "");
    if (number == otherNumber) {
        alert("Tebrikler doğru tahmin! =)");
    } else {
        alert("Üzgünüm. Tuttuğum sayı 7'ydi.");
    }*/

    /*$ if else döngü*/


    /* slider*/
    $(function(){
        var sure = 2000; // slider otomatik dönme süresi
        var toplamLi = $(".slider ul li").length;
        var liWidth = 500;
        var toplamWidth = liWidth * toplamLi;
        var liDeger = 0;
        $(".slider ul").css("width", toplamWidth + "px");
    
        $("a.sonraki").click(function(){
            if (liDeger < toplamLi - 1){
                liDeger++;
                yeniWidth = liWidth * liDeger;
                $(".slider ul").animate({marginLeft: "-" + yeniWidth + "px"}, 500);
            } else {
                liDeger = 0;
                $(".slider ul").animate({marginLeft: "0"}, 500);
            }
            return false;
        })
        $("a.onceki").click(function(){
            if (liDeger > 0){
                liDeger--;
                yeniWidth = liWidth * liDeger;
                $(".slider ul").animate({marginLeft: "-" + yeniWidth + "px"}, 500);
            }
            return false;
        })
        /* Otomatik Dönme */
        $.Slider = function(){
            if (liDeger < toplamLi - 1){
                liDeger++;
                yeniWidth = liWidth * liDeger;
                $(".slider ul").animate({marginLeft: "-" + yeniWidth + "px"}, 500);
            } else {
                liDeger = 0;
                $(".slider ul").animate({marginLeft: "0"}, 500);
            }
        }
        var don = setInterval("$.Slider()", sure);
    
        $("#slider").hover(function(){
            clearInterval(don);
        }, function(){
            don = setInterval("$.Slider()", sure);
        })
    });

    //addClass method
    $("#changeclass").click(function(){
        $("#changeclass").addClass("changed");
    })
});