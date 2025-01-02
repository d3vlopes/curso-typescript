function functionWithCallback(
  callback: (result: number) => string,
  param: number,
) {
  console.log('=>', callback(param));
}

functionWithCallback((a) => a.toString(), 55);
