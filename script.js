//VARIAVEIS
let chances = 7;
let acertos = 0;
let imagem = 0;
//BANCO DE PALAVRAS
let palavras = ["cavalo", "zebra", "pinguim", "tartaruga", "elefante","cachorro", "gato", "girafa", "macaco", "ornitorrinco","foca", "vaca", "panda", "arara", "periquito", "borboleta"];
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
  //VERIFICANDO ACERTO
  for (posicao = 0; posicao < palavra.length; posicao++) {  
    if(acertos < palavra.length && chances > 0){
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
  //VERIFICANDO ERRO
    if(acertos < palavra.length && chances > 0){ 
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
    //CONDIÇÃO DE DERROTA
    if (chances == 0) {
      let mensagem = document.createElement("p");
      let texto = document.createTextNode("Você perdeu!");
      mensagem.appendChild(texto);
      let div = document.getElementById("resultado");
      div.appendChild(mensagem);
      chances--;
    }
    //CONDIÇÃO DE VITÓRIA
    if(chances > 0){
      if (acertos == palavra.length) {
        let mensagem = document.createElement("p");
        let texto = document.createTextNode("Você venceu!");
        mensagem.appendChild(texto);
        let div = document.getElementById("resultado");  
        div.appendChild(mensagem);
        acertos++;
      }
    }  
}
