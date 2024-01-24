
function validarEmail() {
    var emailInput = document.getElementById('miInput').value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(emailInput)) {
        cambiarClase();
        document.getElementById('error').textContent = 'Formato de email incorrecto';

    } else {
        enviarDatos();
        window.location.href = 'congrats.html';
    }
}
function enviarDatos() {
    var datoEntrada = document.getElementById('miInput').value;
    localStorage.setItem('datoEntrada', datoEntrada);
    
}

function cambiarClase(){
    var error = document.getElementById('error');
    var botonFlase = document.getElementById('miInput');
    error.classList.toggle('false');
    botonFlase.classList.add('botonFalse');
}