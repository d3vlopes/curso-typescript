function soma(x: number, y: number | string) {
  if (typeof y === 'number') return x + y;

  return `${y} não é um número`;
}

console.log(soma(10, 27));
console.log(soma(10, '27'));
