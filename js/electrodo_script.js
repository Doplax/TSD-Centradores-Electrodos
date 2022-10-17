function comprobarSelectores() { 

    // Con esto se evitara que aparezca la informacion hasta que se rellenen los selectores correspondientes
    if ((material.value && 
        rosca.value     && 
        diametro.value) != "") 
    { 
        invisible()
        cambiarFotoElectrodo()
        cambiarReferenciaElectrodo()  
        cotasElectrodo()
    }

    if ((forma.value && metrico.value) != "") {
        cambairFotoCentrador()
        cambiarReferenciaCentrador()
        cotasCentador()
    }
    // Comprueba array que los 4 selecores estan en TRUE, y despues ejecuta las funciones que requieran que se cumpla esa condicion
}

function crearListaDiametro() {
    let diametro_lista = document.getElementById("diametro_lista")
    // Carga la lista de una forma mas comoda que con el HTML
    const lista  = ["", 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0 ,6.5, 6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 
                        7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 ,8.5, 8.6, 8.7, 8.8, 8.9, 9.0, 9.1, 9.2, 9.3, 9.4, 
                        9.5, 9.6, 9.7, 9.8, 9.9, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9 ,11, 11.1, 11.2, 11.3, 11.4, 11.5, 
                        11.6, 11.7, 11.8, 11.9, 12.0, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13.0, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 
                        13.7, 13.8, 13.9, 14.0, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15.0]

    
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

function cambiarListaMetrico(){
    // Limpiara las opciones anteriores
    while (metrico.firstChild) { metrico.removeChild(metrico.firstChild);} 
    let option = document.createElement("option");
        option.value = "";
        option.text  = "";
        metrico.append(option);

    
    if (diametro.value >= 4.5 && diametro.value <= 6   ) 
    { 
        let option = document.createElement("option");
        option.value = "04";
        option.text  = "04";
        metrico.append(option);
    }

    if (diametro.value >= 6.5 && diametro.value <= 8.5 ) 
    {
        let option = document.createElement("option");
        option.value = "06";
        option.text  = "06";
        metrico.append(option);
    }
    if (diametro.value >= 8.5 && diametro.value <= 11  ) 
    {
        let option = document.createElement("option");
        option.value = "08";
        option.text  = "08";
        metrico.append(option);
    }
    if (diametro.value >= 11  && diametro.value <= 13  ) 
    {
        let option = document.createElement("option");
        option.value = "10";
        option.text  = "04";
        metrico.append(option);
    }
    if (diametro.value >= 13  && diametro.value <= 15  ) 
    {
        let option = document.createElement("option");
        option.value = "12";
        option.text  = "12";
        metrico.append(option);
    }
}

/////// VARIABLES Y MAIN //////////////////
crearListaDiametro();

var referencia          = document.getElementById("referencia_electrodo").innerText; // Para coger unicamente el texto, no el objeto
var material            = document.getElementById("material");
var metrico             = document.getElementById("metrico");
var forma               = document.getElementById("forma");
var diametro            = document.getElementById("diametro");
var rosca               = document.getElementById("rosca")

material.addEventListener("change",comprobarSelectores); 
diametro.addEventListener("change",comprobarSelectores); 
diametro.addEventListener("change",cambiarListaMetrico); 

rosca.addEventListener("change", comprobarSelectores);
forma.addEventListener("change",comprobarSelectores);
metrico.addEventListener("change",comprobarSelectores);
