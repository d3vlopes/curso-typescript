interface Todo {
  title: string;
  description: string;
  isCompleted: boolean;
}

// cria um novo tipo com as propriedades definidas
type TodoPreview = Pick<Todo, 'title' | 'isCompleted'>;

// TodoPreview contém as propriedades title & isCompleted
const todoPreview: TodoPreview = {
  title: 'Limpar quarto',
  isCompleted: false,
};
