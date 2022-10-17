
// CAMBIAR IFRAME
let btn_centrador   = document.getElementById("btn_centrador");
let btn_electrodo   = document.getElementById("btn_electrodo");
let btn_perno       = document.getElementById("btn_perno");
let iframe          = document.getElementById("iframe");

btn_centrador.addEventListener("click", function () {
    // iframe.src = "../html/centradores.html"; // Local
    iframe.src = "html/centrador.html" ;//Web
});

btn_electrodo.addEventListener("click", function () {
    // iframe.src = "../html/electrodo.html"; // Local
    iframe.src = "html/electrodo.html"; //Web
});

btn_perno.addEventListener("click", function () {
    // iframe.src = "../html/pernos.html";  //Local
    iframe.src = "html/perno.html" ;//Web
});

