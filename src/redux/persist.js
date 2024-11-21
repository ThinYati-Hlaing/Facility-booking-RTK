import localStorage from "redux-persist/lib/storage";

const persistSlices = ["auth"];

export const persistConfig = {
  key: "root",
  devTools: true,
  storage: localStorage,
  whitelist: persistSlices,
};
