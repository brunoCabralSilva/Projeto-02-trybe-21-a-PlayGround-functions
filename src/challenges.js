// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 && parametro2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(recebeString) {
  let stringsDivididas = recebeString.split(' ');
  return stringsDivididas;
}

// Desafio 4
function concatName(nomeCompleto) {
  let ultimoPrimeiro = nomeCompleto[nomeCompleto.length-1] + ', ' + nomeCompleto[0];
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let comparador = numeros[0];
  let contador = 0;

  for (let num of numeros) {
    if (num > comparador) {
      comparador = num;
    }
  }
  for (let cont of numeros) {
    if (cont === comparador) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return ('cat1');
  }

  else if (distanciaCat1 > distanciaCat2) {
    return ('cat2');
  }

  else if (distanciaCat1 === distanciaCat2) {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let arrayNum = [];
  let contador = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    for (let j = numeros[i]; j >= 2; j -= 1) {
      if (numeros[i] % [j] === 0) {
        contador += 1;
        if (contador <= 2 && numeros[i] % 5 === 0 && numeros[i] % 3 === 0) {
          arrayNum[i] = 'fizzBuzz';
        }
        else if (contador <= 2 && numeros[i] % 5 === 0) {
          arrayNum[i] = 'buzz';
        }
        else if (contador <= 2 && numeros[i] % 3 === 0) {
          arrayNum[i] = 'fizz';
        }
        else {
          arrayNum[i] = 'bug!';
        }
      }
      contador = 0;
    }
  }
  return arrayNum;
}

// Desafio 9
function encode(palavra) {

  let codificada = [];
  let concatenadaEncode = '';

  for (i = 0; i < palavra.length; i += 1) {
    if (palavra[i] === 'a'.toLowerCase()) {
      codificada.push(1);
    }
    else if (palavra[i] === 'e'.toLowerCase()) {
      codificada.push(2);
    }
    else if (palavra[i] === 'i'.toLowerCase()) {
      codificada.push(3);
    }
    else if (palavra[i] === 'o'.toLowerCase()) {
      codificada.push(4);
    }
    else if (palavra[i] === 'u'.toLowerCase()) {
      codificada.push(5);
    }
    else {
      codificada.push(palavra[i]);
    }
  }
  for (letra of codificada) {
    concatenadaEncode = concatenadaEncode + letra;
  }
  return (concatenadaEncode);
}

function decode(palavra) {

  let decodificada = [];
  let concatenadaDecode = "";

  for (i = 0; i < palavra.length; i += 1) {
    if (palavra[i] === '1') {
      decodificada.push('a');
    }
    else if (palavra[i] === '2') {
      decodificada.push('e');
    }
    else if (palavra[i] === '3') {
      decodificada.push('i');
    }
    else if (palavra[i] === '4') {
      decodificada.push('o');
    }
    else if (palavra[i] === '5') {
      decodificada.push('u');
    }
    else {
      decodificada.push(palavra[i]);
    }
  }
  for (letra of decodificada) {
    concatenadaDecode = concatenadaDecode + letra;
  }
  return (concatenadaDecode);
}

// Desafio 10
function techList(nomeTech, nome) {

  let listaTecnologias = [];
  nomeTech.sort();

  if (nomeTech.length === 0) {
    return ('Vazio!');
  }
  else {
    for (tecnologia of nomeTech) {
      listaTecnologias.push({ name: nome, tech: tecnologia });
    }
    return (listaTecnologias);
  }
}

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
