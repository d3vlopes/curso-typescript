interface User<T extends { name: string }> {
  data: T;
}

interface UserModel {
  name: string | null;
  email: string;
}

// name não pode ser do tipo null
function createUser({ data }: User<UserModel>) {
  return data;
}
