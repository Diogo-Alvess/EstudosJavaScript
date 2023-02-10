/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
=== igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)
*/
//const num1 = 10; // number
//const num2 = 10; // number
//const comp = num1 !== num2;
//console.log(comp);

/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/
// const expressaoAnd = true && true && true && true;
// const expressaoOr = false || false || false || false;

// const usuario = 'Luiz'; // form usuário digitou
// const senha = '123456'; // form usuário digitou

// //                      True                  False
// const vaiLogar = usuario === 'Luiz' && senha === '12345';

//console.log(!!true);

/*
//OPERAÇÃO TERNARIA

// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);*/

/*
// OBJETO DATA

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
*/

/* // switch
function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
  case 0:
    diaSemanaTexto = 'Domingo';
    return diaSemanaTexto;
  case 1:
    diaSemanaTexto = 'Segunda';
    return diaSemanaTexto;
  case 2:
    diaSemanaTexto = 'Terça';
    return diaSemanaTexto;
  case 3:
    diaSemanaTexto = 'Quarta';
    return diaSemanaTexto;
  case 4:
    diaSemanaTexto = 'Quinta';
    return diaSemanaTexto;
  case 5:
    diaSemanaTexto = 'Sexta';
    return diaSemanaTexto;
  case 6:
    diaSemanaTexto = 'Sábado';
    return diaSemanaTexto;
  default:
    diaSemanaTexto = '';
    return diaSemanaTexto;
  }
}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);
*/

/*
// For in -> lê os índices ou chaves do objeto
//                 0       1      2
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// for (let index in frutas) {
//   console.log(frutas[index]);
// }

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
*/

/*
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// console.log('####');

// for (let i in nomes) {
//   console.log(nomes[i]);
// }

// console.log('####');

// for (let valor of nomes) {
//   console.log(valor);
// }

// console.log('####');

// nomes.forEach(function(valor, indice, array) {
//   console.log(valor, indice, array);
// });
*/

/*
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF';
}
*/

/*
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
  console.log(rand);
}
console.log('######');

do {
  console.log(rand);
} while(rand !== 10);
*/

/* 
//Tratando e lançando erros (try, catch, throw)

function soma(x, y) {
  if (
    typeof x !== 'number' || 
    typeof y !== 'number'
  ) {
    throw new Error('x e y precisam ser números.');
  }

  return x + y;
}

try {
  console.log(soma(1, 2));
  // console.log(soma('1', 2));
} catch(error) {
  console.log(error);
  console.log('Alguma coisa mais amigável pro usuário.');
}
finally{
 // sempre
}
*/

/*
//setInterval e setTimeout
function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

const timer = setInterval(function() {
  console.log(mostraHora());
}, 1000);

setTimeout(function() {
  clearInterval(timer);
}, 3000);

setTimeout(function() {
  console.log('Olá mundo!');
}, 5000);
*/