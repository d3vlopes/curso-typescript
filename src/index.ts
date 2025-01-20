interface Todo {
  title: string;
  description: string;
  isCompleted: boolean;
}

// cria um novo tipo omitindo as propriedades definidas
type TodoPreview = Omit<Todo, 'isCompleted'>;

// TodoPreview contém as propriedades title & isCompleted
const todoPreview: TodoPreview = {
  title: 'Limpar quarto',
  description: 'Loren ipsum dolor sit',
};
