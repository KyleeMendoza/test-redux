import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./slice/tableSlice";
import { api } from "./services/api";

export default configureStore({
  reducer: {
    table: tableReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
