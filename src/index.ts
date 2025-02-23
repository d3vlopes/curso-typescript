class GetProfileUseCase {
  public name: string;
  readonly username: string;

  constructor(name: string, username: string) {
    this.name = name;
    this.username = username;
  }
}

const getProfileUseCase = new GetProfileUseCase('Leandro Lopes', 'd3vlopes');

// Podemos alterar o valor
getProfileUseCase.name = 'Lopes Leandro';
// Não podemos alterar o valor de uma propriedade readonly
getProfileUseCase.username = 'lopes123';
