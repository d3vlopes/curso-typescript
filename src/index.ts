class LoginUseCase {
  // adicionando explicitamente o modificador
  public username: string;

  constructor(username: string) {
    this.username = username;
  }

  // omitindo o modificador de acesso
  execute() {
    // ...code
  }
}

const loginUseCase = new LoginUseCase('d3vlopes');

// é possível acessar fora da classe
loginUseCase.username;
loginUseCase.execute();
