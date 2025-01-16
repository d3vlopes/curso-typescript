interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

// precisa conter as propriedades com os tipos definidos na interface User
const customer: User = {
  name: 'Leandro',
  age: 30,
  isAdmin: false,
};

const admin: User = {
  name: 'John Doe',
  age: 34,
  isAdmin: 'true', // não contém as propriedades com o mesmo tipo da interface User
};
