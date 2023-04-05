const contCentradores = document.getElementById('container-centrador')
const contElectrodos  = document.getElementById('container-electrodo')
const contPerno       = document.getElementById('container-perno')


// CAMBIAR Sección
const btn_centrador = document.getElementById("btn_centrador");
btn_centrador.addEventListener("click", () => {
    contCentradores.classList.remove('inactive');
    contCentradores.classList.add('active');

    contElectrodos.classList.add('inactive');
    contPerno.classList.add('inactive');
});

const btn_electrodo = document.getElementById("btn_electrodo");
btn_electrodo.addEventListener("click", () => {
    contCentradores.classList.add('inactive');

    contElectrodos.classList.remove('inactive');
    contElectrodos.classList.add('active')
    
    contPerno.classList.add('inactive');
});

const btn_perno= document.getElementById("btn_perno");
btn_perno.addEventListener("click", () => {
    contCentradores.classList.add('inactive');
    contElectrodos.classList.add('inactive');

    contPerno.classList.remove('inactive');
    contPerno.classList.add('active')
});






