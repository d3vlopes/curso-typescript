function withTwoGeneric<T, U>(name: T, age: U) {
  return `Olá, me chamo ${name} e tenho ${age} anos`;
}

const greeting = withTwoGeneric<string, number>('Leandro', 30);

console.log(greeting);
