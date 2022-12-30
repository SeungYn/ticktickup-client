export {};

interface Register {
  username: string;
  password: string;
  passwordConfirm: string;
}

interface Login {
  username: string;
  password: string;
}
interface InitialAuthFormState {
  register: Register;
  login: Login;
}

const initialAuthFormState = {};
