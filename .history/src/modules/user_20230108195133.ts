import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialUserFormStateType {
  username: string;
  service: string;
}

// const initialUserState = {
//   auth: localStorage.getItem()
// };

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {},
});
interface aa {
  t: () => void;
}
class test implements aa {
  t() {}
}
