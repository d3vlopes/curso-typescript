abstract class UseCase {
  // propriedade abstrata
  protected abstract resource: string;

  // método abstrato
  abstract execute(): void;
}

class CreateUserUseCase extends UseCase {
  // implementação da propriedade abstrata
  protected resource = 'users';

  // implementação do método abstrato
  execute() {
    console.log(`Creating a new ${this.resource}`);
  }
}
