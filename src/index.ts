function withGeneric<T>(value: T) {
  return value;
}

// a função aceita o tipo que a gente passar entre <>
const value1 = withGeneric<Date>(new Date());
const value2 = withGeneric<string>('Leandro');
const value3 = withGeneric<boolean>(true);
const value4 = withGeneric<number>(15);

console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
