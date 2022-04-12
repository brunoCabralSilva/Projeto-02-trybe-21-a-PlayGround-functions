// Desafio 11
function generatePhoneNumber(telefone) {
  
  let numeroNegativo = 0;
  let maiorQueNove = 0;
  let repeteMaisDeTresVezes = 0;
  let repete0 = 0, repete1 = 0, repete2 = 0, repete3 = 0, repete4 = 0, repete5 = 0, repete6 = 0, repete7 = 0, repete8 = 0, repete9 = 0; 


  for(i = 0; i < telefone.length; i += 1){
    for(j = 0; j < telefone.length; j += 1){
      if (telefone[i] === telefone[j]){
        if (telefone[j] === 0){
          repete0 += 1;
        }
        else if (telefone[j] === 1){
          repete1 += 1;
        }
        else if (telefone[j] === 2){
          repete2 += 1;
        }
        else if (telefone[j] === 3){
          repete3 += 1;
        }
        else if (telefone[j] === 4){
          repete4 += 1;
        }
        else if (telefone[j] === 5){
          repete5 += 1;
        }
        else if (telefone[j] === 6){
          repete6 += 1;
        }
        else if (telefone[j] === 7){
          repete7 += 1;
        }
        else if (telefone[j] === 8){
          repete8 += 1;
        }
        else if (telefone[j] === 9){
          repete9 += 1;
        }
      }
    }
    if (telefone[i] < 0){
      numeroNegativo = 1;
    }
    if (telefone[i] >= 10){
      maiorQueNove = 1;
    }
  }

  if (repete0 > 4 || repete1 > 4 || repete2 > 4 || repete3 > 4 || repete4 > 4 || repete5 > 4 || repete6 > 4 || repete7 > 4 || repete8 > 4 || repete9 > 4){
    repeteMaisDeTresVezes = true;
  }

  if (numeroNegativo == 0 && telefone.length === 11 && maiorQueNove === 0 && repeteMaisDeTresVezes == false){
    return("(" + telefone[0] + telefone[1] +") " + telefone[2] + telefone[3] + telefone[4] + telefone[5] + telefone[6] +"-" + telefone[7] + telefone[8] + telefone[9] + telefone[10]);
  }

  else if (telefone.length < 11 || telefone.length > 11){
    return("Array com tamanho incorreto.");
  }

  else if (numeroNegativo === 1 || maiorQueNove === 1 || repeteMaisDeTresVezes == true){
    return("não é possível gerar um número de telefone com esses valores");
  }

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  let condicao = false;
  let diferenca = 0;
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)){
    if (lineA > Math.abs(diferenca) && lineB > Math.abs(diferenca) && lineC > Math.abs(diferenca)){
      return(true);
    }
    else{
      return (false);
    }
  }
  else{
    return (false);
  }
}

// Desafio 13
function hydrate(bebida) { 
  let copoDeAgua = 0;
  let numeral = bebida.match(/\d+/g).map(Number);
  for (numero of numeral){
    copoDeAgua = copoDeAgua + numero;
  }
  if (copoDeAgua === 1){
    return (copoDeAgua + " copo de água");
  }
  else{
    return (copoDeAgua + " copos de água");
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
