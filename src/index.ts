// number
enum Weight {
  LIGHT = 300,
  REGULAR = 400,
}

// string
enum Size {
  SMALL = '1.4rem',
  MEDIUM = '1.6rem',
}

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

// Não podemos alterar o valor de um enum
Size.SMALL = '1.2';

console.log(Weight.LIGHT); // 300
console.log(Weight['REGULAR']); // 400
console.log(Size.SMALL); // 1.4rem
console.log(Size['MEDIUM']); // 1.6rem
console.log(LogLevel.ERROR); // 0
console.log(LogLevel.WARN); // 1
