$(document).ready(function(){
    $(".info_nuble").hide();
    $(".info_biobio").hide();
    $(".info_araucania").hide();
    $(".info_maule").hide();
    $("#cuadro-interno").show();

    $("#maule").click(function(){

        $("#cuadro-interno").hide();
        $(".info_nuble").hide();
        $(".info_biobio").hide();
        $(".info_araucania").hide();
        $("#cant_incendios_maule").show();

    });
    $("#nuble").click(function(){

        $("#cuadro-interno").hide();
        $(".info_maule").hide();
        $(".info_biobio").hide();
        $(".info_araucania").hide();
        $("#cant_incendios_nuble").show();

    });
    $("#biobio").click(function(){

        $("#cuadro-interno").hide();
        $(".info_nuble").hide();
        $(".info_maule").hide();
        $(".info_araucania").hide();
        $("#cant_incendios_biobio").show();

    });
    $("#araucania").click(function(){

        $("#cuadro-interno").hide();
        $(".info_nuble").hide();
        $(".info_biobio").hide();
        $(".info_maule").hide();
        $("#cant_incendios_araucania").show();

    });
    $(".boton_volver").click(function(){

        $("#cuadro-interno").show();
        $(".info_nuble").hide();
        $(".info_biobio").hide();
        $(".info_maule").hide();
        $(".info_araucania").hide();

    });
    $("#maule").hover(function(){
        $("#maule").css("background-color", "white");
    
        }, function(){$("#maule").css("background-color", "pink");
        
        });
         
});