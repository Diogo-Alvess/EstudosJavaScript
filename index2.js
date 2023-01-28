//let num1 = 0.7; //number
//let num2 = 0.1; //number

// num1 = num1.toString();
//console.log(num1.toString() + num2); //concatena
//console.log(typeof num1);
//console.log(num1.toString(2)); // imprime em binario
//console.log(num1.toFixed(2)); // casas decimais
//console.log(num1.isInteger(num1)); // se o numero é inteiro ou não
//let temp = num1 * 'ola'; // NaN
//console.log(Number.isNaN(temp)); // se for NaN ele retorna true, se não false

//num1 += num2; // 0.8
//num1 += num2; // 0.9
//num1 += num2; // 1.0 para isso...
//num1 = num1.toFixed(2);

//console.log(Number.isInteger(num1))
//console.log(num1);

///////

//let num3 = 9;
// let num4 = Math.floor(num3); // arredonda pra baixo
// let num4 = Math.ceil(num3); // arredonda pra cima
// let num4 = Math.round(num3) // arredonda pro mais proximo
// console.log(Math.max(1,2,3,-10,20, 1500)); //maior numero da sequencia
// console.log(Math.min(1,2,3,-10,20, 1500)); //menor numero da sequencia
// const aleatorio = Math.random(); cria numero aleatorio;
//console.log(Math.random()); //imprime numero aleatorio

//console.log(Math.pow(2,10)); // mesma coisa que (potencia/potenciação)
//console.log(2**10);

////

/*
const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
*/

// ARRAYS               0       1        2          3      4
//let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo 

//console.log(typeof alunos); // para ter certeza que é um array ...
//console.log(alunos instanceof Array);

// alunos.push('Luiza');  // Adiciona no fim
// alunos.push('Eduardo');

// console.log(alunos.slice(0, -2)); // imprime ate o elemento ou -num

// console.log(alunos[50]);

// delete alunos[1];   // deleta mas nao o indice e fica vazio
// console.log(alunos[1]);

// const removido = alunos.shift(); // remove inicio
// console.log(removido);
// console.log(alunos);

// alunos.unshift('Fábio'); // Adiciona no começo
// alunos.unshift('Luiza');


// alunos.push('Luiza'); // Adiciona no fim
// alunos.push('Fábio');

// alunos[alunos.length] = 'Luiza';  // Adiciona no fim atraves do retorno do proximo indice
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana'; 

// alunos[0] = 'Eduardo'; // Altera
// alunos[3] = 'Luiza'; // Adicionando

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);
/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
  
    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
  };
  
  pessoa1.fala();
  pessoa1.incrementaIdade();
  */
 /*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
 /*
 /*
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
  };
  const b = a;
  
  b.nome = 'João';
  console.log(a);
  console.log(b); 
  */

// EXERCICIO

function meuEscopo () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
      `${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();