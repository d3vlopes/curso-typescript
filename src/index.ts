interface UseCase {
  resource: string;
  execute: () => void;
}

class CreateUserUseCase implements UseCase {
  resource = 'User';

  execute() {
    console.log(`Creating ${this.resource}`);
  }
}
