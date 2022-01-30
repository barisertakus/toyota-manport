import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "helpers/api";

const initialState = {
  token: null,
  loading: false,
  userData: {},
  isChecked : false,
};

export const fetchUserData = createAsyncThunk(
  "auth/auth/getUserFromToken",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      const response = await api.post("api/auth/getUserFromToken", { token: accessToken });
      return response.data;
    } catch (e) {
      // localStorage.removeItem("token");
      return rejectWithValue("");
    }
  }
);

export const login = createAsyncThunk("auth/login", async ({ payload, history}) => {
  const response = await api.post("api/auth/login", payload)
  const {token} = response.data
  localStorage.setItem("token",token);
  history.push("/");
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return response.data;
});

export const signOut = createAsyncThunk("auth/signOut", async () => {
  localStorage.removeItem("token");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signOut.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      const { token, ...user } = action.payload;
      state.token = token;
      state.userData = user;
      state.loading = false;
      if(!state.isChecked) state.isChecked = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
    },
    [fetchUserData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      const { token, ...user } = action.payload;
      state.token = token;
      state.userData = user;
      state.loading = false;
      if(!state.isChecked) state.isChecked = true;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
      if(!state.isChecked) state.isChecked = true;
    },
  },
});

export const userSelector = (state) => state.auth.userData
export const checkedSelector = (state) => state.auth.isChecked

export default authSlice.reducer;
