interface User {
  name: string;
  email: string;
  created_at: Date;
}

// created_at é obrigatório
const user: User = {
  name: 'Leandro Lopes',
  email: 'leandro@email.com',
};

// todas as propriedades de User são opcionais
const user2: Partial<User> = {
  name: 'Leandro Lopes',
  email: 'leandro@email.com',
};
