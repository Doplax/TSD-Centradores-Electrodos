function comprobarSelectores() {

    // Hasta que los inputs  no esten "LLenos" no haran nada.
    if ((material.value && forma.value && metrico.value  && diametro.value) !=  "")
    { 
        cambiarReferenciaCentrador()
        cambairFotoCentrador()
        cotasCentador();   
        invisible();
    }

    if (rosca.value != "")
    {
        cambiarReferenciaElectrodo()
        cambiarFotoElectrodo()
        cotasElectrodo()
    }
};

function crearListaDiametro()
//1.Cuando el usuario escoga el metrico, deberemos cargar la lista correspondiente
{
    let metrico_value = metrico.value;

    const metrico_4  = ["",4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0]
    const metrico_6  = ["",6.5, 6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5]
    const metrico_8  = ["",8.5, 8.6, 8.7, 8.8, 8.9, 9.0, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11.0]
    const metrico_10 = ["",11.0, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12.0, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13.0]
    const metrico_12 = ["",13.0, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14.0, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15.0]

    // 2.En funcion del metrico que nos den, crearemos una lista o otra llamando a la funcion que introducira los datos en el desplegable
    if (metrico_value == "04") { anadirOpcionesDiametro(metrico_4)}
    if (metrico_value == "06") { anadirOpcionesDiametro(metrico_6)}
    if (metrico_value == "08") { anadirOpcionesDiametro(metrico_8)}
    if (metrico_value == "10") { anadirOpcionesDiametro(metrico_10)}
    if (metrico_value == "12") { anadirOpcionesDiametro(metrico_12)}
};

function anadirOpcionesDiametro(lista)  // Sub-Function of: crearListaDiametro()
{
    // Esta linea borrara las opciones previas, para evitar que se vayan acumulando los elementos en la lista
    while (diametro.firstChild) { diametro.removeChild(diametro.firstChild);} 
    
    for (i in lista){ 
        //Para cargar la lista con los datos, iterara tantas veces como elementos tenga la lista
        let temp = String(lista[i]); 

        var option = document.createElement("option") 
        option.text = temp; 
        diametro.appendChild(option); 
    }
};
/////// VARIABLES Y MAIN //////////////////
var referencia   = document.getElementById("referencia_centrador").innerHTML; // Para coger unicamente el texto, no el objeto
var material     = document.getElementById("material");
var metrico      = document.getElementById("metrico");
var forma        = document.getElementById("forma");
var diametro     = document.getElementById("diametro");
var rosca        = document.getElementById("rosca")



metrico.addEventListener("change",crearListaDiametro); // Esta linea es la que se encarga de crear las opciones en el desplegable diametro, ya que el diametro depende del metrico
metrico.addEventListener("change",comprobarSelectores);
forma.addEventListener("change",comprobarSelectores);
diametro.addEventListener("change",comprobarSelectores); // Esta linea cambiara los digitos que hay en la referencia
material.addEventListener("change",comprobarSelectores); 

rosca.addEventListener("change",comprobarSelectores)

