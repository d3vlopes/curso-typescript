const fullName: unknown = 'Leandro Lopes';

// Precisamos fazer uma verificação primeiro
console.log(fullName.toUpperCase());

if (typeof fullName === 'string') {
  console.log(fullName.toUpperCase()); // OK
}

const objeto: Record<string, string> = {
  chaveA: 'Value A',
  chaveB: false, // aceita apenas value do tipo string
};

const objetoUnknown: Record<string, unknown> = {
  chaveA: 'Value A',
  // Aceita outros tipos
  chaveB: false,
  chaveC: 10,
};
