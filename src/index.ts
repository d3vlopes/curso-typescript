let fullName: string;

function joinArgs(...args: string[]): void {
  fullName = args.join(' ');

  console.log(fullName);
}

joinArgs('Leandro', 'Lopes');
