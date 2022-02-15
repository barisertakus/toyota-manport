import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/authSlice";
import applicationReducer from "features/applicationSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    application: applicationReducer,
  },
});
