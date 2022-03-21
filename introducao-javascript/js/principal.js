var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;


    var tdimc = paciente.querySelector(".info-imc");

    var imcDaLinha = tdimc.textContent;


    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso invalido");
        pesoEhValido = false;
        tdimc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 4) {
        console.log("Altur invalida");
        alturaEhValido = false;
        tdimc.textContent = "Altura Invalida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValido) {
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("oi");
});








