//VARIAVEIS
var chances = 7;
var acertos = 0;
var imagem = 0;
//BANCO DE PALAVRAS
var palavras = ["cavalo", "zebra", "pinguim", "tartaruga", "elefante","cachorro", "gato", "girafa", "macaco", "ornitorrinco","foca", "vaca", "panda", "arara", "periquito", "borboleta"];
//SORTEIA PALAVRA
let palavra = palavras[Math.floor(Math.random() * palavras.length)];
console.log(palavra);
//CONSTROI ESPAÇO DAS LETRAS
let posicao;
for (posicao = 0; posicao < palavra.length; posicao++) {
  let span = document.createElement("span");
  span.setAttribute('id', posicao);
  let div = document.getElementById("palavra");
  div.appendChild(span);
}
//CRIANDO OS BOTÕES DAS LETRAS
let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let letras = alfabeto.split("");
for (posicao = 0; posicao < letras.length; posicao++) {
  let botao = document.createElement("button");
  let letra = document.createTextNode(letras[posicao]);
  botao.appendChild(letra);
  botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
  botao.setAttribute('id', letras[posicao]);
  let div = document.getElementById("letras");
  div.appendChild(botao);
}
//DIGITANDO A PALAVRA
function escolheLetra(letra) {
  let acertou = false;
  for (posicao = 0; posicao < palavra.length; posicao++) {
    if(acertos < palavra.length + 1 && chances > 0){
      if (letra === palavra[posicao]) {
        let span = document.getElementById(posicao);
        let l = document.createTextNode(letra);
        span.appendChild(l);
        let botao = document.getElementById(letra);
        botao.setAttribute('class', 'certa');
        botao.removeAttribute('onclick');
        acertos++;
        acertou = true;
      }
    }  
  }
    if(acertos < palavra.length + 1 && chances > 0){ 
      if (acertou === false) {
        if(imagem < 7){
          imagem++;
          document.getElementById("forca").src = "forca/lvl"+imagem+".png";
        }
        var botao = document.getElementById(letra);
        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');
        chances--;
      }
    }
    if (chances == 0) {
      let mensagem = document.createElement("p");
      let t1 = document.createTextNode("Você perdeu!");
      mensagem.appendChild(t1);
      let div = document.getElementById("resultado");
      div.appendChild(mensagem);
      chances--;
    }
    if(chances > 0){
      if (acertos == palavra.length) {
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("Você venceu!");
        mensagem.appendChild(t1);
        let div = document.getElementById("resultado");  
        div.appendChild(mensagem);
        acertos++;
      }
    }        
  } 
