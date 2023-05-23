$(document).ready(function(){
    $(".info_nuble").hide(); //estas 5 lienas se encargan de que inmediatamente al abrir la página aparezca solo la información de los objetivos y el mapa
    $(".info_biobio").hide();
    $(".info_araucania").hide();
    $(".info_maule").hide();
    $("#cuadro-interno").show();

    $("#maule").click(function(){
        //esta interacción hace que cuando se haga click sobre la región del Maule, se cierre toda la información que esté previamente abierta y se abra la del Maule
        $("#cuadro-interno").hide();
        $(".info_nuble").hide();
        $(".info_biobio").hide();
        $(".info_araucania").hide();
        $("#cant_incendios_maule").show();

    });
    $("#nuble").click(function(){
        //al igual que con la anterior, esta ineracción nos muestra la información de la región de Ñuble al hacer click sobre ella en el mapa
        $("#cuadro-interno").hide();
        $(".info_maule").hide();
        $(".info_biobio").hide();
        $(".info_araucania").hide();
        $("#cant_incendios_nuble").show();

    });
    $("#biobio").click(function(){
        //funciona igual que las dos interaciones anteriores, pero con la región del Biobio
        $("#cuadro-interno").hide();
        $(".info_nuble").hide();
        $(".info_maule").hide();
        $(".info_araucania").hide();
        $("#cant_incendios_biobio").show();

    });
    $("#araucania").click(function(){
        //por último el botón de la Araucanía
        $("#cuadro-interno").hide();
        $(".info_nuble").hide();
        $(".info_biobio").hide();
        $(".info_maule").hide();
        $("#cant_incendios_araucania").show();

    });
    $(".volver_a_objetivos").click(function(){
        //esta interacción se encarga de hacer funcionar el boton para volver a los objetivos que se puede encontrar en cada región
        $("#cuadro-interno").show();
        $(".info_nuble").hide();
        $(".info_biobio").hide();
        $(".info_maule").hide();
        $(".info_araucania").hide();
    });

            
});
