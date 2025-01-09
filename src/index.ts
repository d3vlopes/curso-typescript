async function loadUser(): Promise<{ name: string }> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await response.json();

  return user;
}

loadUser().then((user) => console.log(user.name));
