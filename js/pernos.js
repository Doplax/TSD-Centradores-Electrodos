

function comprobarSelectores() { 

    // Con esto se evitara que aparezca la informacion hasta que se rellenen los selectores correspondientes
    if (( 
        rosca.value     && 
        metrico.value) != "") 
    { 
        cambiarReferenciaPerno();
        cambairFotoPerno();  
        cotasPerno();
    }
    // Comprueba array que los 4 selecores estan en TRUE, y despues ejecuta las funciones que requieran que se cumpla esa condicion
}


/////// VARIABLES Y MAIN //////////////////
var referencia          = document.getElementById("referencia_perno").innerText; // Para coger unicamente el texto, no el objeto
var rosca               = document.getElementById("rosca")
var metrico            = document.getElementById("metrico");

metrico.addEventListener("change",comprobarSelectores); 
rosca.addEventListener("change", comprobarSelectores);
