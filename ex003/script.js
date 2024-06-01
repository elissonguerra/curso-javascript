var nota1 = Number.parseInt(window.prompt("Digite um número:"));
var nota2 = Number.parseInt(window.prompt("Digite outro número:"));
var soma = nota1 + nota2;
var nome = window.prompt("Qual o seu nome?");
var idade = window.prompt("Qual sua idade?");

window.alert("A soma é: " + soma);
window.alert(`O aluno ${nome}, de ${idade} anos, tirou a nota ${soma}`);