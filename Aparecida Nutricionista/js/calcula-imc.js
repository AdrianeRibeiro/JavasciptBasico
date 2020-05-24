var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  if(!ValidaPeso(peso)) {
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  } 
  
  if(!ValidaAltura(altura)){
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
  }

 
  if(ValidaPeso(peso) && ValidaAltura(altura)){
    tdImc.textContent = calculaImc(peso, altura) ;    
  } 
}

function ValidaPeso(peso) {
  return peso >= 0 && peso < 1000;
}

function ValidaAltura(altura) {
  return altura >= 0 && altura <= 3.00;
}

function ValidaGordura(gordura) {
  return gordura >= 0 && gordura <+ 100;
}

function calculaImc(peso, altura) {
  var imc = 0;

  var imc = peso / (altura * altura);

  return imc.toFixed(2);
}
