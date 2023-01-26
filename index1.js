/*console.log('Diogo'); //descobri valores 
console.log("Diogo"); // string = texto
// diferença = aspas
console.log('Diogo "Alves"'); 
console.log("Diogo 'Alves'");
console.log(`"Diogo" 'Alves'`);
// parenteze é uma função e uma função executa uma ação;
console.log(123, 123.45, "Diogo");*/

///////////
// exibir mensagens
/*
//alert('mensagem');
//window.prompt('digite o seu nome');
//window.confirm('deseja apagar?');

// a função pode ou não retornar um valor;

const confirma = confirm('realmente deseja apagar?');

let n1 = window.prompt('digite um numero');
let n2 = prompt('digite outro numero');

// passa a variavel para ser tipo numero;
n1 = parseFloat(n1);
n2 = Number(n2);

const result = n1+n2;
console.log("resultado: ", result);

alert(`o resultado da conta foi de: ${result}`); */
/////

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/*varA = varB;
varB = varC;
varC = varA;
// da errado assim
*/
//const varATemp = varA;
//varA = varB;
//varB = varC; 
//varC = varATemp;
/*[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
//
let umaString = "um \"texto\""; // para escapar o caractere
                //01234567 
let umaString2 = "um texto"; // para escapar o caractere

console.log(umaString2[5]);

// concatena
console.log(umaString.concat(' em', ' um', ' dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
// procura caractere
console.log(umaString2.indexOf('um')); //(umaString2.indexOf('um', 3)); começa a busca atraves de um indice 
console.log(umaString2.match(/[a-z]/));
console.log(umaString2.replace('um', 'outra'));  // substitui uma palavra por outra
console.log(umaString2.slice(2, 5)); // imprime um intervalo
console.log(umaString2.slice(-3));
console.log(umaString2.slice(-3, -1));
console.log(umaString2.substring(umaString2.length - 5));
  
let umaString3 = "O rato roeu a roupa do rei de roma.";
console.log(umaString3.split('r')); // exclui o elemento 

console.log(umaString3.toUpperCase()); // coloca todo o texto em caixa alta
console.log(umaString3.toLowerCase()); // coloca todo o texto em caixa baixa
*/
// EXERCÍCIO

const nome = prompt('Digite seu nome: ');
//console.log(nome);
//document.body.innerHTML += "escrever <br/>";
//document.body.innerHTML += "escrever <br/>";

document.body.innerHTML += `Seu nome é <strong>${nome}</strong><br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome?  ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;


