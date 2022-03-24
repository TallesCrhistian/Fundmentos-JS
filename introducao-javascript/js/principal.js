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


    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso invalido");
        pesoEhValido = false;
        tdimc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaEhValido) {
        console.log("Altur invalida");
        alturaEhValido = false;
        tdimc.textContent = "Altura Invalida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValido) {
        var imc = calculaImc(peso, altura);
        tdimc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true
    } else {
        return false;
    }

}