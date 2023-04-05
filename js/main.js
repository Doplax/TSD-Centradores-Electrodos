function invisible(){
    let contenedor = document.getElementById("invisible")
    
    if (contenedor.className == "estado_invisible") 
    {
        contenedor.className = "estado_visible"
    }
  
}


// Centrador
function cambiarReferenciaCentrador(){
    let referencia = document.getElementById("referencia_centrador");
    
    let material_value = material.value
    if (material_value == "M") {material_value = "I"}
    if (material_value == "C") {material_value = "A"}
    
    // Quitar el punto en el diamentro
    let diamentro_value = diametro.value
    diamentro_value = diamentro_value.replace(".",""); 
    
    referencia.innerText = material_value + "M" +metrico.value + forma.value + diamentro_value;    
}

function cambairFotoCentrador() {
    let imagen       = document.getElementById("foto_centrador");
    let foto_actual  = material.value + forma.value  
    imagen.src = "../img/centradores/" + foto_actual + ".PNG"; 
}

function cotasCentador(){
    temp = document.getElementById("centrador_cota_inferior");
    if (temp == null){
        let cajaImagen    =  document.getElementById("caja-foto_figure");  // Creamos la variable a la que luego le anadiremos los DIVs con appendChild
        

        // COTA INFERIOR
        let cotaInferior        = document.createElement("div");
        cotaInferior.id         = "centrador_cota_inferior";
        cajaImagen.appendChild(cotaInferior);
        

        // COTA LATERAL
        let cotaLateral        = document.createElement("div");
        cotaLateral.id         = "centrador_cota_lateral";
        // Añadimo la cota encima de la foto, Para poder posicionarla
        cajaImagen.insertBefore(cotaLateral, cajaImagen.children[0])
    }



    m = metrico.value;
    f = forma.value;


    switch (m) {
        case ("04"):
            document.getElementById("centrador_cota_inferior").innerHTML = "10 mm"

            if    (f == "DC")   {document.getElementById("centrador_cota_lateral").innerHTML = "26.5 mm"}
            else                {document.getElementById("centrador_cota_lateral").innerHTML = "31 mm"  }

            break;
        
        case ("06"):
            document.getElementById("centrador_cota_inferior").innerHTML = "11,5 mm"

            if    (f == "DC")   {document.getElementById("centrador_cota_lateral").innerHTML = "27.5 mm"}
            else                {document.getElementById("centrador_cota_lateral").innerHTML = "34 mm"}
            
            break;

        case ("08"):
            document.getElementById("centrador_cota_inferior").innerHTML = "13.5 mm"
            
            if     (f == "DC")  {document.getElementById("centrador_cota_lateral").innerHTML = "28.3 mm"}
            else                {document.getElementById("centrador_cota_lateral").innerHTML = "34 mm"}

            break;
        
        case ("10"):
            document.getElementById("centrador_cota_inferior").innerHTML = "16 mm";

            if     (f == "DC")  {document.getElementById("centrador_cota_lateral").innerHTML = "32.3 mm"}
            else                {document.getElementById("centrador_cota_lateral").innerHTML = "40 mm"}

            break;

        case ("12"):
            document.getElementById("centrador_cota_inferior").innerHTML = "18 mm"
            
            if (f == "DC") {document.getElementById("centrador_cota_lateral").innerHTML = "34.1 mm"}
            else {document.getElementById("centrador_cota_lateral").innerHTML = " 43 mm"}

            break;
    }
}



// Electrodo
function cambiarReferenciaElectrodo() {
    let referencia_nueva = document.getElementById("referencia_electrodo");
    let temp = material.value + rosca.value + diametro.value;
    referencia_nueva.innerHTML = temp

}

function cambiarFotoElectrodo(){ // Sub Funcion de comprobarSelectores()
    // No se ejecutarara hasta que "validar_selectores" sean todas True.

    let translated_value = material.value; 
    let inicio_ruta = "../img/electrodos/"

    // Foto 0
    let imagen_0       = document.getElementById("foto_electrodo_0");
    imagen_0.src =  inicio_ruta + translated_value + "_0.PNG"; // Con imagen.src se cambia solo, no hay que usar inner ni nada de eso

 
    // Foto 1
    let imagen_1       = document.getElementById("foto_electrodo_1");
    imagen_1.src = inicio_ruta + translated_value + "_1.PNG"; // Con imagen.src se cambia solo, no hay que usar inner ni nada de eso
}

function cotasElectrodo()   // Sub-Function of: cambiarCentrador()
{
    /* 
    FUNCIONAMIENTO: La funcion comprobara si los elementos a crear existen, si existen, pasara sin hacer nada
    Una vez haya cargado la foto, deberemos cargar las cotas, para ello lo que haremos es cargar 2 <div>, cada uno con un ID unico para vincularlo con el estilo de CSS -> IDs (cota-inferior, cota-lateral).
    */
    let temp = document.getElementById("electrodo_cota_foto_0");
    
    if (temp == null) 
    {
    // FOTO 0
        let cajaImagen_0    =  document.getElementById("figure_electrodo_foto-0");  // Creamos la variable a la que luego le anadiremos los DIVs con appendChild

        let cota_foto_0        = document.createElement("div");
        cota_foto_0.id         = "electrodo_cota_foto_0";
        cajaImagen_0.insertBefore(cota_foto_0, cajaImagen_0.children[1]);


    // FOTO 1
        let cajaImagen_1    =  document.getElementById("figure_electrodo_foto-1");  // Creamos la variable a la que luego le anadiremos los DIVs con appendChild

        let cota_foto_1        = document.createElement("div");
        cota_foto_1.id         = "electrodo_cota_foto_1";
        cajaImagen_1.insertBefore(cota_foto_1, cajaImagen_1.children[1]);
    }

    let cota_foto_0 = document.getElementById("electrodo_cota_foto_0");
    cota_foto_0.innerHTML = "M " + rosca.value;

    let cota_foto_1 = document.getElementById("electrodo_cota_foto_1");
    cota_foto_1.innerHTML = diametro.value + "mm";

}


// Perno
function cambiarReferenciaPerno() {
    let referencia = document.getElementById("referencia_perno");

    referencia.innerText = rosca.value + metrico.value;
}

function cambairFotoPerno() {
    let inicio_ruta = "../img/pernos/"

    // Foto 0
    let imagen_0       = document.getElementById("foto_electrodo_0");
    imagen_0.src =  inicio_ruta + "P_0.PNG"; // Con imagen.src se cambia solo, no hay que usar inner ni nada de eso

 
    // Foto 1
    let imagen_1       = document.getElementById("foto_electrodo_1");
    imagen_1.src = inicio_ruta + "P_1.PNG"; // Con imagen.src se cambia solo, no hay que usar inner ni nada de eso
}

function cotasPerno()   // Sub-Function of: cambiarCentrador()
{
    /* 
    FUNCIONAMIENTO: La funcion comprobara si los elementos a crear existen, si existen, pasara sin hacer nada
    Una vez haya cargado la foto, deberemos cargar las cotas, para ello lo que haremos es cargar 2 <div>, cada uno con un ID unico para vincularlo con el estilo de CSS -> IDs (cota-inferior, cota-lateral).
    */
    let temp = document.getElementById("electrodo_cota_foto_0");
    
    if (temp == null) 
    {
    // FOTO 0
        let cajaImagen_0    =  document.getElementById("figure_electrodo_foto-0");  // Creamos la variable a la que luego le anadiremos los DIVs con appendChild

        let cota_foto_0        = document.createElement("div");
        cota_foto_0.id         = "electrodo_cota_foto_0";
        cajaImagen_0.insertBefore(cota_foto_0, cajaImagen_0.children[1]);
    }

    let cota_foto_0 = document.getElementById("electrodo_cota_foto_0");
    cota_foto_0.innerHTML = "M " + rosca.value;



}
