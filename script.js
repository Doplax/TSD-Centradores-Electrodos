/////////////// FUNCIONES /////////////////////////////

// CENTRADORES
String.prototype.replaceAt = function(index, replacement) 
{
    //En JS no existe el metodo .replaceAt() como tal, por eso estamos creando este prototipo.
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

function crearListaDiametro()
{
    let diametro_lista = document.getElementById("diametro_lista")
    // Carga la lista de una forma mas comoda que con el HTML
    const lista  = ["", 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0 ,6.5, 6.6, 6.7, 6.8, 6.9, 7, 7.1, 
                        7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8, 8.1, 8.2, 8.3, 8.4, 8.5 ,8.5, 8.6, 8.7, 8.8, 8.9, 9, 9.1, 9.2, 9.3, 9.4, 
                        9.5, 9.6, 9.7, 9.8, 9.9, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9 ,11, 11.1, 11.2, 11.3, 11.4, 11.5, 
                        11.6, 11.7, 11.8, 11.9, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 
                        13.7, 13.8, 13.9, 14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15]

    
     // Esta linea borrara las opciones previas, para evitar que se vayan acumulando los elementos en la lista
    //  while (diametro_lista.firstChild) { diametro_lista.removeChild(diametro_lista.firstChild);} 
    
     for (i in lista){ 
         //Para cargar la lista con los datos, iterara tantas veces como elementos tenga la lista
         let temp = String(lista[i]); 
 
         var option = document.createElement("option") 
         option.value = temp; 
         // option.text = temp; 
         diametro_lista.appendChild(option); 
     }
}

function comprobarSelectores() { 
    // Comprueba array que los 4 selecores estan en TRUE, y despues ejecuta las funciones que requieran que se cumpla esa condicion
    if (validar_selectores.every(CheckTrue) == true) //Esta funcion la hemos creado arriba donde las variables
    { 
        
                
    }
    cambiarFotoElectrodo()
    cambiarFotoCentrador()
    //cambiarReferenciaCentrador()
    cambiarReferenciaElectrodo()
}

// ELECTRODO
function cambiarReferenciaElectrodo(){
    let x = document.getElementById("referencia_electrodo");

    let temp = material.value + rosca.value + diametro.value;

    x.innerText = temp

}

function cambiarFotoElectrodo(){ // Sub Funcion de comprobarSelectores()
    // No se ejecutarara hasta que "validar_selectores" sean todas True.
    
    let inicio_ruta = "../TSD_Electrodos/img/"
    let tamano_foto = "30rem"

    // Foto 0
    let imagen_0       = document.getElementById("foto_electrodo_0");
    imagen_0.style.height = tamano_foto
    imagen_0.src =  inicio_ruta + material.value + "_0.PNG"; // Con imagen.src se cambia solo, no hay que usar inner ni nada de eso

 
    // Foto 1
    let imagen_1       = document.getElementById("foto_electrodo_1");
    imagen_1.style.height = tamano_foto
    imagen_1.src = inicio_ruta + material.value + "_1.PNG"; // Con imagen.src se cambia solo, no hay que usar inner ni nada de eso
    
    cotasElectrodo();
    
    

}

function cotasElectrodo()   // Sub-Function of: cambiarCentrador()
{
    /* 
    FUNCIONAMIENTO: La funcion comprobara si los elementos a crear existen, si existen, pasara sin hacer nada
    Una vez haya cargado la foto, deberemos cargar las cotas, para ello lo que haremos es cargar 2 <div>, cada uno con un ID unico para vincularlo con el estilo de CSS -> IDs (cota-inferior, cota-lateral).
    */
    let temp = document.getElementById("cota_foto_0");
    
    if (temp == null) 
    {
    // FOTO 0
        let cajaImagen_0    =  document.getElementById("figure_electrodo_foto-0");  // Creamos la variable a la que luego le anadiremos los DIVs con appendChild

        let cota_foto_0        = document.createElement("div");
        cota_foto_0.id         = "cota_foto_0";
        cajaImagen_0.insertBefore(cota_foto_0, cajaImagen_0.children[1]);


    // FOTO 1
        let cajaImagen_1    =  document.getElementById("figure_electrodo_foto-1");  // Creamos la variable a la que luego le anadiremos los DIVs con appendChild

        let cota_foto_1        = document.createElement("div");
        cota_foto_1.id         = "cota_foto_1";
        cajaImagen_1.insertBefore(cota_foto_1, cajaImagen_1.children[1]);
    }

    let cota_foto_0 = document.getElementById("cota_foto_0")
    cota_foto_0.innerHTML = rosca.value;

    let cota_foto_1 = document.getElementById("cota_foto_1")
    cota_foto_1.innerHTML = diametro.value;

}

// CENTRADOR
function cambiarReferenciaCentrador(){
    let x = document.getElementById("referencia_centrador");

    // x.style.color = "#000000";


    console.log(material.value);
    let value1 = material.value;

    console.log(forma.value);
    let value2 = forma.value;

    console.log(metrico.value);
    let value3 = metrico.value

    console.log(diametro.value);
    let value4 = diametro.value

    let final = value1 + value2 + value3 + value4
    console.log(final);


    
    
}

function cambiarFotoCentrador() // Hay que actualizar esto
{
    // Sub Funcion de comprobarSelectores()
    if (forma.value != "") {

        let imagen = document.getElementById("foto_centrador");

        let actual = material.value + forma.value
        
        imagen.src = "../TSD_Centradores/img/centradores-400x827/" + actual + ".png"; // Con imagen.src se cambia solo, no hay que usar inner ni nada de eso
    }  
    cotasCentrador();                                                          
}

function cotasCentrador(){ 

    temp = document.getElementById("centrador_cota_inferior");
    if (temp == null) 
    { 
        let cajaImagen    =  document.getElementById("figure_centrador");  // Creamos la variable a la que luego le anadiremos los DIVs con appendChild
        

        // COTA INFERIOR
        let cotaInferior        = document.createElement("div");
        cotaInferior.id         = "centrador_cota_inferior";
        cajaImagen.appendChild(cotaInferior);
        

        // COTA LATERAL
        let cotaLateral        = document.createElement("div");
        cotaLateral.id         = "centrador_cota_lateral";
        // cajaImagen.appendChild(cotaLateral);
        cajaImagen.insertBefore(cotaLateral,cajaImagen.children[0])
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




/////// VARIABLES Y MAIN //////////////////
crearListaDiametro();
const CheckTrue = (currentValue) => currentValue == true; // Nos sirve para comprobar que todos los elementos del array sean True
var validar_selectores = [false, false, false]; // Compruba que los 4 campos han sido modificados, una vez comprobemos que han sido modificados, podremos cargar la 


var referencia          = document.getElementById("referencia_electrodo").innerText; // Para coger unicamente el texto, no el objeto
var material            = document.getElementById("material");
var metrico             = document.getElementById("metrico");
var forma               = document.getElementById("forma");
var diametro            = document.getElementById("diametro");
var rosca               = document.getElementById("rosca")





material.addEventListener("change",comprobarSelectores); 
diametro.addEventListener("change",comprobarSelectores); 
rosca.addEventListener("change", comprobarSelectores);
forma.addEventListener("change",comprobarSelectores);
metrico.addEventListener("change",comprobarSelectores);


// Pruebas 
let mapa = new Map();
mapa.set("nombre","pedro");
mapa.set("apellidos","gomez");
mapa.set("edad",20);


