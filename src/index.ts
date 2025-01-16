interface User {
  name: string;
  age: number;
  isAdmin: boolean;
  getName: () => string;
}

const customer: User = {
  name: 'Leandro',
  age: 30,
  isAdmin: false,
  getName: () => customer.name,
};
