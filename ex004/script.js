var nome = window.prompt("Qual é o seu nome?");
document.write(`Olá <strong>${nome}</strong>. Seu nome tem ${nome.length} letras.<br>`);
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}.<br>`);
document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}.<br>`);

var num = 1545.5;
document.write(num.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));