function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error(`Ops! Algo deu errado... 
    Parece que o código se perdeu no caminho!`);
}
