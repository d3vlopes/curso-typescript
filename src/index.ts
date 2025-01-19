interface User<T> {
  data: T;
}

interface UserModel {
  name: string;
  email: string;
}

function createUser({ data }: User<UserModel>) {
  return data;
}

const user = createUser({
  data: { name: 'John Doe', email: 'jdoe@example.com' },
});
