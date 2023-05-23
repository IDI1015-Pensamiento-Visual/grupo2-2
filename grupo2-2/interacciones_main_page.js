$(document).ready(function(){
    //estas 5 interracciones se encargan de mostrar solo los objetivos al momento de abrir la página
    $(".info_nuble").hide();
    $(".info_biobio").hide();
    $(".info_araucania").hide();
    $(".info_maule").hide();
    $("#cuadro-interno").show();

    $("#maule").click(function(){
        //esta y las siguientes 3 interacciones esconden todo lo que esté mostrandose en ese momento en la página, sin contar el mapa y mostrar la información de la región sobre la que se hizo click
        $("#cuadro-interno").hide();
        $(".info_nuble").hide();
        $(".info_biobio").hide();
        $(".info_araucania").hide();
        $(".info_maule").show();

    });
    $("#nuble").click(function(){

        $("#cuadro-interno").hide();
        $(".info_maule").hide();
        $(".info_biobio").hide();
        $(".info_araucania").hide();
        $(".info_nuble").show();

    });
    $("#biobio").click(function(){

        $("#cuadro-interno").hide();
        $(".info_nuble").hide();
        $(".info_maule").hide();
        $(".info_araucania").hide();
        $(".info_biobio").show();

    });
    $("#araucania").click(function(){

        $("#cuadro-interno").hide();
        $(".info_nuble").hide();
        $(".info_biobio").hide();
        $(".info_maule").hide();
        $(".info_araucania").show();

    });
    $(".boton_volver").click(function(){
        //esta interacción, esconde la región en la que se esté en ese momento y vuelve a la página de apertura, con los objetivos
        $("#cuadro-interno").show();
        $(".info_nuble").hide();
        $(".info_biobio").hide();
        $(".info_maule").hide();
        $(".info_araucania").hide();

    });

         
});
