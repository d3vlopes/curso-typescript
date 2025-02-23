class LoginUseCase {
  private username: string;

  constructor(username: string) {
    this.username = username;
  }

  execute() {
    // ...code
  }
}

const loginUseCase = new LoginUseCase('d3vlopes');

// não é possível acessar fora da classe
loginUseCase.username;
