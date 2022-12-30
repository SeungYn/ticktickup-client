export {};

interface Register {
  username: string | null;
  password: string | null;
  passwordConfirm: string | null;
}

interface Login {
  username: string | null;
  password: string | null;
}
interface InitialAuthFormState {
  register: Register;
  login: Login;
}

const initialAuthFormState: InitialAuthFormState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },

  login: {
    username: '',
    password: '',
  },
};
