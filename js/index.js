
/* 
*********************************************************************
Funciones para la Página Index.html
*********************************************************************
*/


document.getElementById('ingresar').style.pointerEvents="none";
document.getElementById('ingresar').style.cursor="default";
document.querySelector('#username').addEventListener("input", habilitarIngreso);

function habilitarIngreso(){
    document.getElementById('ingresar').style.pointerEvents="auto";
    document.getElementById('ingresar').style.cursor="pointer";
    ingreso();
}

function ingreso() {
    document.querySelector("#ingresar").addEventListener("click", logIn);
}

//Función de inicio de la app
function logIn() {
    let usuario = document.getElementById("username").value;
    let saludo = (`Hola ${usuario}, bienvenido al Juego!!`);
    console.log(saludo);

    localStorage.setItem("usuario", usuario);
    console.log(localStorage.getItem("usuario"));
    localStorage.setItem('saludo', saludo);
}

function dosJugadores() {
    $('#falsoBtn').click(() =>{
        $("#container1").append('<p id="noDis">Esta característica del Juego aún no está lista</p>')
        $("#noDis").fadeIn(2000)
        $("#noDis").fadeOut(2000)
    })
}
dosJugadores();

function animacion() {
    var titulo = $("#title");
    var login = $("#logIn");
    var btn = $("#ingresar");
    var falsoBtn = $("#falsoBtn");

    titulo.fadeIn(2000);
    login.fadeIn(2000).animate({opacity: '1'}, "slow")
    btn.fadeIn(2000).animate({opacity: '1'}, "slow");
    falsoBtn.fadeIn(2000).animate({opacity: '1'}, "slow");
}
animacion();

function limpiar() {
    localStorage.clear(); 
}







