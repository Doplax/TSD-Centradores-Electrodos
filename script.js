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

function cambiarColorReferencia(){
    let x = document.getElementById("referencia");
    x.style.color = "#000000";
}

function cambiarMaterial() // Cambia el primer digito 
{   
    validar_selectores[0] = true

    let material_value  = material.value; 
    if (material_value == "ceramica")   {referencia = referencia.replaceAt(0,"A")}
    if (material_value == "metal")      {referencia = referencia.replaceAt(0,"I")}

    document.getElementById("referencia").innerHTML = referencia
    
    comprobarSelectores()

}

function crearListaDiametro()
//1.Cuando el usuario escoga el metrico, deberemos cargar la lista correspondiente
{
    const lista  = ["", 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0 ,6.5, 6.6, 6.7, 6.8, 6.9, 7, 7.1, 
                        7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8, 8.1, 8.2, 8.3, 8.4, 8.5 ,8.5, 8.6, 8.7, 8.8, 8.9, 9, 9.1, 9.2, 9.3, 9.4, 
                        9.5, 9.6, 9.7, 9.8, 9.9, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9 ,11, 11.1, 11.2, 11.3, 11.4, 11.5, 
                        11.6, 11.7, 11.8, 11.9, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 
                        13.7, 13.8, 13.9, 14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15]

    
    anadirOpcionesDiametro(lista)

}

function anadirOpcionesDiametro(lista)  // Sub-Function of: crearListaDiametro()
{
    // Esta linea borrara las opciones previas, para evitar que se vayan acumulando los elementos en la lista
    while (diametro.firstChild) { diametro.removeChild(diametro.firstChild);} 
    
    for (i in lista){ 
        //Para cargar la lista con los datos, iterara tantas veces como elementos tenga la lista
        let temp = String(lista[i]); 

        var option = document.createElement("option") 
        option.value = temp; 
        // option.text = temp; 
        diametro.appendChild(option); 
    }
}

function cambiarDiametro()
{
    // // Cambia el valor del diametro de la Referencia
    // const LEN = 6; // CUIDADO si hay cambios en el futuro en la longitud de la referencia esto puede fallar
    // let referencia_temp = referencia.slice(0,LEN)

    // let diametro_value = diametro.value;
    // referencia = referencia_temp + diametro_value
    // document.getElementById("referencia").innerHTML = referencia
    
    console.log("Ha entrado")
    validar_selectores[2] = true

    comprobarSelectores()
}



// FOTO
function comprobarSelectores() { 
    // Subfuncion de las funciones que son llamadas con los addEventListener, para que cada vez que haya un cambio, se compruebe cual ha sido este cambio.
    // Esta funcion se encarga de comprobar que los 4 selecores estan en TRUE, y despues ejecuta las funciones que requieran que se cumpla esa condicion
    if (validar_selectores.every(CheckTrue) == true) //Esta funcion la hemos creado arriba donde las variables
    { 
        cambairFotoElectrodo()
        cambiarColorReferencia()
                
    }
}

function cambairFotoElectrodo()
{
    // Sub Funcion de comprobarSelectores()
    // Esta funcion no se ejecutarar hasta que el array "validar_selectores" sean todas verdadero.
    let imagen       = document.getElementById("foto_electrodo");
    let inicio_ruta = "../TSD_Electrodos/img_electrodos/"
    
    // let _actual = referencia[0] + referencia[4] + referencia[5] 
    material_value = material.value;

    console.log(material_value);
    
    
    imagen.src = inicio_ruta + material_value + ".png"; // Con imagen.src se cambia solo, no hay que usar inner ni nada de eso
    

    anadirCota();
    cambiarCota();
    

}


// function cambairCentrador()
// {
//     // Sub Funcion de comprobarSelectores()
//     // Esta funcion no se ejecutarar hasta que el array "validar_selectores" sean todas verdadero.
//     let imagen       = document.getElementById("_centrador");
//     let inicio_ruta = "./img/centradores-400x827/"
//     let _actual = referencia[0] + referencia[4] + referencia[5] 
//     let final_ruta = ".png";
    
//     imagen.src = inicio_ruta + _actual + final_ruta; // Con imagen.src se cambia solo, no hay que usar inner ni nada de eso
    

//     anadirCota();
//     cambiarCota();
    

// }


function anadirCota()   // Sub-Function of: cambiarCentrador()
{
    /* 
    FUNCIONAMIENTO: La funcion comprobara si los elementos a crear existen, si existen, pasara sin hacer nada
    Una vez haya cargado la , deberemos cargar las cotas, para ello lo que haremos es cargar 2 <div>, cada uno con un ID unico para vincularlo con el estilo de CSS -> IDs (cota-inferior, cota-lateral).
    */
    temp = document.getElementById("cota-inferior");
    if (temp == null) {
  

    
    let cajaImagen    =  document.getElementById("caja-_figure");  // Creamos la variable a la que luego le anadiremos los DIVs con appendChild
    

    // COTA INFERIOR
    let cotaInferior        = document.createElement("div");
    cotaInferior.id         = "cota-inferior";
    cajaImagen.appendChild(cotaInferior);
    

    // COTA LATERAL
    let cotaLateral        = document.createElement("div");
    cotaLateral.id         = "cota-lateral";
    // cajaImagen.appendChild(cotaLateral);
    cajaImagen.insertBefore(cotaLateral,cajaImagen.children[0])
}
}

function cambiarCota()  // cambiarCentrador()
{ // Sub-Function of: cambiar()
    m = metrico.value;
    f = forma.value;


    switch (m) {
        case ("04"):
            document.getElementById("cota-inferior").innerHTML = "10 mm"

            if    (f == "DC")   {document.getElementById("cota-lateral").innerHTML = "26.5 mm"}
            else                {document.getElementById("cota-lateral").innerHTML = "31 mm"  }

            break;
        
        case ("06"):
            document.getElementById("cota-inferior").innerHTML = "11,5 mm"

            if    (f == "DC")   {document.getElementById("cota-lateral").innerHTML = "27.5 mm"}
            else                {document.getElementById("cota-lateral").innerHTML = "34 mm"}
            
            break;

        case ("08"):
            document.getElementById("cota-inferior").innerHTML = "13.5 mm"
            
            if     (f == "DC")  {document.getElementById("cota-lateral").innerHTML = "28.3 mm"}
            else                {document.getElementById("cota-lateral").innerHTML = "34 mm"}

            break;
        
        case ("10"):
            document.getElementById("cota-inferior").innerHTML = "16 mm";

            if     (f == "DC")  {document.getElementById("cota-lateral").innerHTML = "32.3 mm"}
            else                {document.getElementById("cota-lateral").innerHTML = "40 mm"}

            break;

        case ("12"):
            document.getElementById("cota-inferior").innerHTML = "18 mm"
            
            if (f == "DC") {document.getElementById("cota-lateral").innerHTML = "34.1 mm"}
            else {document.getElementById("cota-lateral").innerHTML = " 43 mm"}

            break;
    }
}

// ELECTRODOS

// function crearListaRosca(){ 
//     console.log("Ha entrado en crearListaRosca()");
//     let metrico_value = metrico.value;

//     const metrico_4  = ["",4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0]
//     const metrico_6  = ["",6.5, 6.6, 6.7, 6.8, 6.9, 7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8, 8.1, 8.2, 8.3, 8.4, 8.5]
//     const metrico_8  = ["",8.5, 8.6, 8.7, 8.8, 8.9, 9, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11]
//     const metrico_10 = ["",11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13]
//     const metrico_12 = ["",13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15]

//     // 2.En funcion del metrico que nos den, crearemos una lista o otra llamando a la funcion que introducira los datos en el desplegable
//     if (metrico_value == "04") { anadirOpcionesRosca(metrico_4)}
//     if (metrico_value == "06") { anadirOpcionesRosca(metrico_6)}
//     if (metrico_value == "08") { anadirOpcionesRosca(metrico_8)}
//     if (metrico_value == "10") { anadirOpcionesRosca(metrico_10)}
//     if (metrico_value == "12") { anadirOpcionesRosca(metrico_12)}



// } 

function anadirOpcionesRosca(lista)  // Sub-Function of: crearListaDiametro()
{
    console.log("estamos dentro de: anadirOpcionesRosca()");
    while (rosca.firstChild) { rosca.removeChild(rosca.firstChild);} // Para limpiar la lista antesde de añadir los elementos para evitar que se vayan acumulando los elementos en la lista
    
    for (i in lista){ 
        //Para cargar la lista con los datos, iterara tantas veces como elementos tenga la lista
        let temp = String(lista[i]); 

        var option = document.createElement("option") 
        option.value = temp.replace(".",""); 
        option.text = temp; 
        rosca.appendChild(option); 
    }
}




/////// VARIABLES Y MAIN //////////////////
const CheckTrue = (currentValue) => currentValue == true; // Nos sirve para comprobar que todos los elementos del array sean True


var referencia          = document.getElementById("referencia").innerHTML; // Para coger unicamente el texto, no el objeto
var material            = document.getElementById("material");
var metrico             = document.getElementById("metrico");
var forma               = document.getElementById("forma");
var diametro            = document.getElementById("diametro");
var diametro_choice     = document.getElementById("diametro-choice")

var rosca        = document.getElementById("rosca")

var validar_selectores = [false, true, false]; // Compruba que los 4 campos han sido modificados, una vez comprobemos que han sido modificados, podremos cargar la 

crearListaDiametro();


material.addEventListener("change",cambiarMaterial); 
material.addEventListener("change",crearListaDiametro); // Esta linea es la que se encarga de crear las opciones en el desplegable diametro, ya que el diametro depende del metrico
// forma.addEventListener("change",cambiarForma);
diametro_choice.addEventListener("change",cambiarDiametro); 




// PRUEBAS

