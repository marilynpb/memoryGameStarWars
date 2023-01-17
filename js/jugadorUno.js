

/* 
*********************************************************************
Funciones para la Página Jugador Uno
*********************************************************************
*/

let score = 0;
const startButton = document.querySelector('#start');
const grid = document.querySelector('#juego');
const resultado = document.querySelector('#score');
var tarjetasSeleccionadas = [];
var idTarjetasSeleccionadas = [];
var personajesEncontrados = [];

function saludo (){
    $('#saludo').append(localStorage.saludo);
}
saludo();


//MANIPULACIÓN DEL DOM
function crearElementosDOM() {
    $("h2").prepend('<h2 style= "display:none">STAR WARS MEMORY GAME</h2>');
    $("h2").fadeIn(4000);
    $('#saludo').append('<br><button id="btnGet">console chars</button><br>');
//EVENTO GET
    $('#btnGet').click (() => {
        $.get(URL, function (respuesta, estado) {
            if(estado === "success") {
                console.log(respuesta);
                let data = respuesta.results;
                console.log(data);
                $('#btnGet').hide();
                for (const dato of data) {
                    console.log(`${dato.name}`);
                }
            }    
        })
    });
}
crearElementosDOM();

function instrucciones() {
    //CREACIÓN DE BOTÓN MOSTRAR CONTROLES Y EVENTO SHOW()
        $('.instrucciones').append('<br><h5 id="instrucciones" style= display:none>Deberás encontrar a 10 personajes de la gran saga de Star Wars en el menor tiempo posible. Para ello, haz click en las tarjetas para darlas vuelta y encontrar su respectivo par. <br>¡Que la Fuerza te acompañe!</h5><br><span style= display:none>tip: puedes guiarte con la música para hacerlo cada vez mejor</span><button id="mostrarInstrucciones">instrucciones</button>')
        $('#mostrarInstrucciones').on('click', function() {
            $('#instrucciones').show();
            $('span').show();
            $('#mostrarInstrucciones').hide();
    //CREACIÓN DE BOTÓN QUITAR CONTROLES Y EVENTO HIDE() CON JQUERY
            $('#instrucciones').prepend('<button id="ocultarInstrucciones">ocultar instrucciones</button><br>')
    //EVENTO HIDE() CON JQUERY
        $('#ocultarInstrucciones').click (() => {
            $('#instrucciones, #ocultarInstrucciones').slideUp(3000);
            $('span').slideUp(3000);
            $('#mostrarInstrucciones').show(3000);
            })        
        })
}

instrucciones();

//Arrays de las tarjetas del juego
const tarjetas = [
    {
        name: "Luke", 
        img: "../img/luke.jpg"
    },
    {name: "Luke", img: "../img/luke.jpg"},
    {name: "Chewie", img: "../img/chewie.jpg"},
    {name: "Chewie", img: "../img/chewie.jpg"},
    {name: "Grogu", img: "../img/grogu.jpg"},
    {name: "Grogu", img: "../img/grogu.jpg"},
    {name: "Jabba", img: "../img/jabba.jpg"},
    {name: "Jabba", img: "../img/jabba.jpg"},
    {name: "Maul", img: "../img/maul.jpg"},
    {name: "Maul", img: "../img/maul.jpg"},
    {name: "ObiWan", img: "../img/obiWan.jpg"},
    {name: "ObiWan", img: "../img/obiWan.jpg"},
    {name: "R2D2", img: "../img/r2d2.jpg"},
    {name: "R2D2", img: "../img/r2d2.jpg"},
    {name: "Trooper", img: "../img/trooper.jpg"},
    {name: "Trooper", img: "../img/trooper.jpg"},
    {name: "DarthVader", img: "../img/vader.jpg"},
    {name: "DarthVader", img: "../img/vader.jpg"},
    {name: "C3PO", img: "../img/c3po.jpg"},
    {name: "C3PO", img: "../img/c3po.jpg"},
]


//Test de las imágenes del juego
console.log('Los Personajes del Juego son: ');
for (let index = 0; index < tarjetas.length; index++) {
    console.log(tarjetas[index].name);
}


//Sorteo aleatorio de las imágenes del juego
tarjetas.sort(() => Math.random() - 0.5);

//Distribuímos las tarjetas para el juego
function juego() {
    for (let i = 0; i < tarjetas.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', '../img/blanco.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', girar)
        grid.appendChild(card)
    }
}

function girar() {
    let cardId = this.getAttribute('data-id');
    tarjetasSeleccionadas.push(tarjetas[cardId].name);
    idTarjetasSeleccionadas.push(cardId);
    this.setAttribute('src', tarjetas[cardId].img);
    if(tarjetasSeleccionadas.length === 2){
        setTimeout(chequearTarjetas, 400)
    }
}

function chequearTarjetas() {
    let cards = document.querySelectorAll('img');
    const idPrimeraTarjeta = idTarjetasSeleccionadas [0];
    const idSegundaTarjeta = idTarjetasSeleccionadas [1];
    if (tarjetasSeleccionadas[0] === tarjetasSeleccionadas[1]) {
        console.log('Encontramos un personaje');
        personajesEncontrados.push(tarjetasSeleccionadas);
        console.log(tarjetasSeleccionadas);
        score++;
        console.log(score);
            let textoPuntaje = `<h5>personajes encontrados: ${score}</h5>`
            $('#puntaje').html(textoPuntaje);
            if(personajesEncontrados.length >= 10){
                $('#puntaje').html(`<h5 class="puntaje">felicidades! encontraste todos los personajes</h5>`);
            }
    }else{
        console.log('No encontramos personaje');
        cards[idPrimeraTarjeta].setAttribute('src', '../img/blanco.jpg');
        cards[idSegundaTarjeta].setAttribute('src', '../img/blanco.jpg');
    }
    tarjetasSeleccionadas = [];  //  reinicio  array seleccionados
    idTarjetasSeleccionadas = []; // reinicio array id  de tarjetas 
    console.log(tarjetasSeleccionadas.length);
}

//iniciar Juego
function startGame() {
    $('#start').hide();
    score = 0;
    juego();    
};

startButton.addEventListener('click', startGame);






