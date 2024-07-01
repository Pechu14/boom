let userImput = document.getElementById("userInput")
let result = document.getElementById("result")
let restart = document.getElementById("restart")

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        userInput.blur();
    }
});

userInput.addEventListener("blur", iniciarContador)


function inicioJuego() {
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    if (userImput.value == numeroAleatorio) {
        result.innerHTML = '<p>Número elegido: ' + userImput.value + '</p>'+
        '<p>Número correcto: ' + numeroAleatorio + '</p>'+
        '<p> ¡has salvado el mundo!</p>'
    }else {
        result.innerHTML = '<p>Número elegido: ' + userImput.value + '</p>'+
        '<p>Número correcto : ' + numeroAleatorio  + '</p>'+
        '<p> ¡error 404,mundo not found!</p>'
    }
}
const countdown = document.getElementById("countdown");

function iniciarContador() {
    let segundos = 5;
    countdown.innerText = segundos;
    const intervalo = setInterval(() => {
        segundos--;

        if (segundos >= 0) {
            countdown.innerText = segundos;
        } else {
            clearInterval(intervalo);
            inicioJuego()
        }
    }, 1000);
}



 restart.addEventListener("click", function() {
    result.innerHTML = '<p>Número elegido:0</p>' +
                    '<p>Número correcto:0</p>' +
                    '<p> ¡Vuelve a intentarlo!</p>'
    countdown.innerText = 0;                
});
