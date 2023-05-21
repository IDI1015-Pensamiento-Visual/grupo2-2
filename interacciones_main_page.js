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
    $("#boton_cambio_maule").click(function(){

        $("#cant_incendios_maule").toggle();
        $("#sup_afec_maule").toggle();

    });
    $("#boton_cambio_nuble").click(function(){

        $("#cant_incendios_nuble").toggle();
        $("#sup_afec_nuble").toggle();

    });
    $("#boton_cambio_biobio").click(function(){

        $("#cant_incendios_biobio").toggle();
        $("#sup_afec_biobio").toggle();

    });
    $("#boton_cambio_araucania").click(function(){

        $("#cant_incendios_araucania").toggle();
        $("#sup_afec_araucania").toggle();

    });
    $("#boton_otro_cambio_maule").click(function(){

        $("#sup_afec_maule").toggle();
        $("#cant_incendios_maule").toggle();
        

    });
    $("#boton_otro_cambio_nuble").click(function(){

        $("#sup_afec_nuble").toggle();
        $("#cant_incendios_nuble").toggle();
        
    });
    $("#boton_otro_cambio_biobio").click(function(){

        $("#sup_afec_biobio").toggle();
        $("#cant_incendios_biobio").toggle();
        

    });
    $("#boton_otro_cambio_araucania").click(function(){

        $("#sup_afec_araucania").toggle();
        $("#cant_incendios_araucania").toggle();
        

    });

            
});