/*
//Maneiras de declarar funções em JavaScript
// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
  console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
  console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
};
obj.falar()
*/

/*
 const conta = (...args) => {
  console.log(args);
};
conta('+', 1, 20, 30, 40, 50);
 */

/*
// Retorno da função
function criaMultiplicador(multiplicador) {
  // multiplicador
  return function(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
*/

/*
// ESCOPO LEXICO
const nome = 'Luiz';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Otávio';
  falaNome();
}
usaFalaNome();
*/

/*
//Closures

// Global
function retornaFuncao(nome) {
  return function(sobrenome) {
    return nome + ' ' + sobrenome;
  };
}

function falaNome(nome) {
  const sobrenome = 'Miranda';
  console.log(nome, sobrenome);
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao('Miranda'),
  funcao2('Oliveira'));
*/

/*
//Funções de callback

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) +
    min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}
*/

/*
// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Luiz'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(30, 80, 1.80);
*/

/*
// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
*/

/*
// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  // const ID = 123456;
  // const metodoInterno = function() {};

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
p2.metodo();
*/


/*
// funcoes geradoras
function* geradora1() {
  // Código qualquer ...
  yield 'Valor 1';
  // Código qualquer ...
  yield 'Valor 2';
  // Código qualquer ...
  yield 'Valor 3';
}

function* geradora2() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

function* geradora5() {
  yield function() {
    console.log('Vim do y1');
  };

  return function() {
    console.log('Vim do return');
  };

  // ...

  yield function() {
    console.log('Vim do y3');
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();
*/
/**/
/**/
/**/