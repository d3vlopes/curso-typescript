interface Identifier {
  id: string;
}
interface Address {
  street: string;
}

interface User {
  name: string;
}

type Customer = Address & User & Identifier;

const customer: Customer = {
  id: crypto.randomUUID(),
  name: 'John Doe',
  street: 'Loren ipsum dolor',
};
