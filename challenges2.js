// Desafio 11
function generatePhoneNumber(arrayNumero) {

  let repetido = 0;

  if (arrayNumero.length !== 11) {
    return "Array com tamanho incorreto."
  }
  for (index = 0; index < arrayNumero.length; index += 1) {
    if (arrayNumero[index] < 0 || arrayNumero[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (index2 = 0; index2 < arrayNumero.length; index2 += 1) {
      if (arrayNumero[index] === arrayNumero[index2]) {
        repetido += 1;
        if (repetido > 2) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
    repetido = 0;
  }
  return arrayNumero.join('').toString().replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');;
}
console.log(generatePhoneNumber([]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  let diferenca1 = Math.abs(lineB - lineC) < lineA;
  let diferenca2 = Math.abs(lineC - lineA) < lineB;
  let diferenca3 = Math.abs(lineA - lineB) < lineC;
  let soma1 = lineA < lineC + lineB;
  let soma2 = lineB < lineA + lineC;
  let soma3 = lineC < lineB + lineA;

  if (diferenca1 && soma1 == true) {
    return true;
  }
  else if (diferenca2 && soma2 == true) {
    return true;
  }
  else if (diferenca3 && soma3 == true){
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 13, 2));



// Desafio 13
function hydrate(string) {
  let stringOrdenada = string.split("");
  let arrayNumbers = [];
  let numeros = 0;

  for (index = 0; index < stringOrdenada.length; index += 1) {
    if (isNaN(stringOrdenada[index]) === false) {
      arrayNumbers.push(parseInt(stringOrdenada[index]));
    }
  }
  for (index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
    if (isNaN(arrayNumbers[index2]) === false) {
      numeros += arrayNumbers[index2];
    }
  }
  if(numeros === 1){
    return numeros + " copo de água";  
  }
    return numeros + " copos de água";
}
console.log(hydrate("1 cerveja"));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
