// Desafio 1

function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true
  } else {
    return false
  }
}
console.log(compareTrue(true, true));

// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3

function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  for (index = 0; index < array.length; index += 1) {
    return array[array.length - 1] + ', ' + array[0];
  }
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']))

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {

  let maiorNumero = 0;
  let repetido = 0;

  for (index = 0; index < array.length; index += 1) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index];
    }
    else if (array[index] < 0) {
      maiorNumero = array[index];
    }
  }
  for (index2 = 0; index2 < array.length; index2 += 1) {
    if (maiorNumero === array[index2]) {
      repetido += 1;
    }
  }
  return repetido;
}
console.log(highestCount([-2, -1, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  else if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
  else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {

  let mensagens = [];

  for (index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 == 0) && (array[index] % 5 == 0)) {
      mensagens.push('fizzBuzz');
    }
    else if (array[index] % 3 == 0) {
      mensagens.push('fizz');
    }
    else if (array[index] % 5 == 0) {
      mensagens.push('buzz');
    } else {
      mensagens.push('bug!')
    }
  }
  return mensagens;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(stringNumerica) {


  for (index = 0; index < stringNumerica.length; index += 1) {
    stringNumerica = stringNumerica.replace('a', 1);
    stringNumerica = stringNumerica.replace('e', 2);
    stringNumerica = stringNumerica.replace('i', 3);
    stringNumerica = stringNumerica.replace('o', 4);
    stringNumerica = stringNumerica.replace('u', 5);
  }
  return stringNumerica;
}
console.log(encode('hi, there!'))

function decode(stringCode) {



  for (index = 0; index < stringCode.length; index += 1) {
    stringCode = stringCode.replace(1, 'a');
    stringCode = stringCode.replace(2, 'e');
    stringCode = stringCode.replace(3, 'i');
    stringCode = stringCode.replace(4, 'o');
    stringCode = stringCode.replace(5, 'u');
  }
  return stringCode;
}
console.log(decode("H4w 1r2 y45 t4d1y?"));

// Desafio 10
function techList(array, name) {

  let arrayOrdenado = array.sort();
  let arrayObject = [];

  for (index = 0; index < arrayOrdenado.length; index += 1) {
    arrayObject.push({tech: array[index], name: name});
  }
  if(array.length == 0){
    return 'Vazio!'
  }
  return arrayObject;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
