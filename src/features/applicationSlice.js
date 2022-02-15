import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  disabled: true,
}

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setDisabled : (state, action) => {
      state.disabled = action.payload;
    }
  }
});

export const { setDisabled } = applicationSlice.actions

export const selectDisabled = (state) => state.application.disabled;

export default applicationSlice.reducer