class UseCase {
  protected handle() {
    // ...code
  }
}

class LoginUseCase extends UseCase {
  execute() {
    // podemos acessar aqui o método da subclasse
    this.handle();
  }
}

const useCase = new UseCase();

// não é possível acessar o método fora da classe/subclasse
useCase.handle();
