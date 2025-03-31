// sem utilizar Parameter Properties
class CreteUserUseCase {
  private readonly name: string;
  private readonly email: string;
  private readonly password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

// com Parameter Properties
class CreateUserUseCase {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
  ) {}
}
