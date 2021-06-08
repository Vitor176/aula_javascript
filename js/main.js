
function button() {
   document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
  // console.log(document.getElementById("agradecimento"));
  // alert("Obrigado por clicar");
}

function redirecionar(){
  // window.open("https://google.com/");//abre em aba diferente
  window.location.href = "https://google.com/";//abre na mesma janela
}

function trocar(elemento){
  // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
  // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
  elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("Página carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value)
}
// function validaIdade(idade){
//   if(idade >= 18){
//     validar = true;
//   }
//   else{
//     validar = false;
//   }
//   return validar;
// }

// var idade = prompt("Qual sua Idade?");
// console.log(validaIdade(idade));
// alert(soma(5,10));
// var d = new Date();
// alert(d.getMinutes());
// alert(d.getHours());
// alert(d.getDay());
// var count;
// for (count = 0; count <=5; count++){
//   alert(count);
// }

// var count = 0;
// while(count <= 5){
//   console.log(count);
//   count++;
// }

// var idade = prompt("Qual a sua idade?");
// if(idade >= 18){
//   alert("Maior de Idade");
// }
// else{
//   alert("Menor de Idade");
// }

// var frutas = [{nome:"maçã",cor:"vermelha"
// },{nome:"uva",cor:"roxa"}];
// console.log(frutas[1].nome)
// var fruta = {nome:"maçã",cor:"vermelha"
// }
// console.log(fruta.nome);
// alert(fruta.cor);
// var lista = ["maçã","pera","laranja"];
// lista.push("uva");
// lista.pop();

// console.log(lista.toString());
// console.log(lista.join(" - "))//transforma em string com qual caractere eu quiser

// var nome = "Vitor Gabriel";
// var idade = 18;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// // alert(nome + "tem : " + idade + "anos");
// // alert (idade + idade2);
// console.log(nome);
// console.log(idade+idade2);
// console.log(frase.toUpperCase());
