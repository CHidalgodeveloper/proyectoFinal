
function tipoMoto(tipo) {
    console.log("inicia");
    document.getElementById("d1").setAttribute("class", "panel panel-default");
    document.getElementById("d2").setAttribute("class", "panel-heading text-center");
    document.getElementById("d3").setAttribute("class", "panel-body");
    document.getElementById("d4").setAttribute("class", "panel-footer text-center");
    document.getElementById("a1").setAttribute("class", "btn btn-info");
    document.getElementById("s1").setAttribute("class", "glyphicon glyphicon-info-sign");
    document.getElementById("s1").innerHTML = " Info ";
    if (tipo == "custom") {
        console.log("ingresa");
        document.getElementById("h1").innerHTML = " CUSTOM ";
        document.getElementById("p1").innerHTML = " El término motocicleta custom proviene originalmente del verbo en inglés to customize, que se refiere a la personalización de algo que fue creado en serie de forma industrial e impersonal. En este caso define un tipo de motocicleta que ofrece la posibilidad de personalización y modificación de acuerdo a los gustos del dueño, (partiendo casi siempre de un modelo de estilo clásico o retro: Una crucero de fábrica), de tal forma que la motocicleta acaba convirtiéndose en un reflejo de la personalidad y estética de la persona que la posee. ";
        document.getElementById("img1").setAttribute("src", "fotos/mc1.png");
        document.getElementById("img2").setAttribute("src", "fotos/mc2.png");
        document.getElementById("img3").setAttribute("src", "fotos/mc3.png");
    } else if (tipo == "pista") {
        console.log("ingresa");
        document.getElementById("h1").innerHTML = " PISTA ";
        document.getElementById("p1").innerHTML = " Sport bike, Motocicleta deportiva o moto deportiva es una motocicleta de altas prestaciones destinada al uso en la vía pública,1​ con características de conducción más agresivas que las de una motocicleta de turismo. Muchas motocicletas deportivas son derivadas de motocicletas de velocidad. ";
        document.getElementById("img1").setAttribute("src", "fotos/mp1.png");
        document.getElementById("img2").setAttribute("src", "fotos/mp2.png");
        document.getElementById("img3").setAttribute("src", "fotos/mp3.png");
    } else {
        document.getElementById("h1").innerHTML = " DOBLE PROPOSITO ";
        document.getElementById("p1").innerHTML = " Doble propósito, Trail, BigTrail o Adventure, son una clasificación de motocicletas que pueden funcionar en caminos secundarios o ripio, pistas, calles o carretera tanto pavimentadas como no pavimentadas. Esas motocicletas están diseñadas para competir en un segmento donde las motos destacan por su polivalencia y en sus orígenes servían tanto para ir por asfalto como por tierra. Aunque hay algunos modelos que todavía conservan esta dualidad, la mayoría se encamina cada vez más al asfalto, en busca del concepto “moto total” o Adventure. ";
        document.getElementById("img1").setAttribute("src", "fotos/mo21.png");
        document.getElementById("img2").setAttribute("src", "fotos/mo22.png");
        document.getElementById("img3").setAttribute("src", "fotos/mo23.png");
        console.log("ingresa");
    }

};
function seleccion(letra) {
    console.log("ingresa");
    
    if (letra == 'b') {
        
        document.getElementById("alert1").setAttribute("class", "alert alert-success");
        document.getElementById("sp1").innerHTML = " <strong >Correcto!! </strong>esta es mi moto actual!!. ";
        caracteristicas();
        video();
    } else {
        document.getElementById("alert1").setAttribute("class", "alert alert-danger");
        document.getElementById("sp1").innerHTML = "<strong >Fallaste!! </strong> no es mi primera moto. ";
        borrar();
    }
    
};
function caracteristicas(){
    document.getElementById("caracteristicas").innerHTML = " <ul> <li>310cc</li> <li>new custom</li> <li>frenos ABS</li> <li>inyección electronica</li> <li>llave de presencia</li> <li>velocidad máxima 180km/h</li> </ul> ";
};
function borrar(){
    document.getElementById("caracteristicas").innerHTML = " ";
    document.getElementById("video").setAttribute("class", " ");
    document.getElementById("video").innerHTML = " ";
};
function video(){
    document.getElementById("video").setAttribute("class", "embed-responsive embed-responsive-16by9");
    
    document.getElementById("frame").setAttribute("src", " https://www.youtube.com/embed/LrJh1NZk0Nk" );
}
