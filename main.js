// id="valor"  num de caracteres da senha
// id="slider" slide
// id="button" botão
// id="hide" div onde mostra a senha gerada
// id="password" local da senha

let sizePass = document.querySelector("#valor");
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let divPass = document.querySelector("#hide");
let passW = document.querySelector("#password");

let charsetG =
  "abcdefghijklmnopqrstuvwzxABCDEFGHIJKLMNOPQRSTUVWZX1234567890<,>.?/:;^~}]{[!@#$%&*()_-+=°ºª¬§|";

let senha = "";

sizePass.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePass.innerHTML = this.value;
};

function gerarsenha() {
   let pass = "";
  for(let B = 0, P = charsetG.length; B < sliderElement.value; ++B){
    pass += charsetG.charAt(Math.floor(Math.random() * P))
  } 
  console.log(pass)
  document.getElementById("hide").style.display = "block";
  passW.innerHTML = pass;
  senha = pass;
}

function copy(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(senha);
  }


  