function stringOrDate(value: Date | string) {
  return value;
}

const value1 = stringOrDate(new Date());
// erro, o compilador não sabe se value1 tem o tipo string ou Date
value1.getTime();

const value2 = stringOrDate(new Date()) as Date;

value2.getTime();
