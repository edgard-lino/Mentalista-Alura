function mudartema() {
   document.body.classList.toggle("dark");
}



let chute = document.getElementById('chute');

let resultado = document.querySelector('.resultado');

let numeroSecreto;

let contador = 0;

let vitoria = 0;

let derrota = 0;

console.log(derrota);

document.querySelector('#chutar').onclick = function () {
    if (contador === 0) {
        numeroSecreto = parseInt(Math.random()*11);
    }

   if (isNumero(chute.value) && chute.value.length != 0) {
        if (Number(chute.value) === numeroSecreto) {
            resultado.innerHTML = `Você acertou, o número secreto é ${numeroSecreto}.<br>Parabéns!!!`;
            vitoria++;
            document.getElementById('vitoria').innerHTML = vitoria;
            document.querySelector('#chute').disabled = true;
            document.querySelector('#chutar').disabled = true;
        } else if (contador < 1) {
            resultado.innerHTML = `Você errou, mas ainda restam duas tentativas.`;
            maiorOuMenor ();
            contador++;
        } else if (contador < 2) {
            resultado.innerHTML = `Você errou, mas ainda resta uma tentativa.`;
            maiorOuMenor ();
            contador++;
        } else {
            resultado.innerHTML = `Você errou, o número secreto é ${numeroSecreto}.`;
            derrota++;
            document.getElementById('derrota').innerHTML = derrota;
            document.querySelector('#chute').disabled = true;
            document.querySelector('#chutar').disabled = true;
        }
   } else {
        window.alert('Digite um número de 0 a 10.');
   }
   document.getElementById('chute').value = "";
}

function isNumero (n) {
    if (Number(n) >= 0 && Number(n) <= 10) {
        return true
    } else {
        return false
    }
}

function maiorOuMenor () {
    if (chute.value > numeroSecreto) {
        resultado.innerHTML += `<br>O número secreto é menor que ${chute.value}.`
    } else if (chute.value < numeroSecreto) {
        resultado.innerHTML += `<br>O número secreto é maior que ${chute.value}.`
    }
}

document.querySelector('.jogar-novamente').onclick = function () {
    contador = 0;
    resultado.innerHTML = `Você tem três chances para <br> adivinhar o número secreto.`
    document.querySelector('#chute').disabled = false;
    document.querySelector('#chutar').disabled = false;
}

document.querySelector('.zerar-placar').onclick = function () {
    vitoria = 0;
    derrota = 0;
    document.getElementById('vitoria').innerHTML = vitoria;
    document.getElementById('derrota').innerHTML = derrota;
}