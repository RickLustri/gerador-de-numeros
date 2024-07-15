var numeros = document.getElementById('numeros');
var btn = document.getElementById('btn');
btn.addEventListener('click', gerarNumero);


function gerarNumero() {
  var num = Math.floor(Math.random() * 1000) + 1;
  if(num == 1000 || num == 1 || num == 666) {
    numeros.style.color = 'red';
    numeros.innerHTML = num;
  }else{
    numeros.style.color = '';
    numeros.innerHTML = num;
  }
}