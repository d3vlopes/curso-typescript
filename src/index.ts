function showMessage(message: any) {
  return message;
}

// a função showMessage aceita receber todos esses tipos de parâmetros
showMessage([1, 2, 3]); // array
showMessage('Olá'); // string
showMessage(1); // number

function showMessage2(message: string) {
  return message;
}

showMessage2([1, 2, 3]);
showMessage2(1);

// aceita somente parâmetros com o tipo correto
showMessage2('Olá');
