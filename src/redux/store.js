import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import proposalSlice from "./slice"; 

const persistConfig = {
  key: "root",
  storage,
};

const formPersistedReducer = persistReducer(persistConfig, proposalSlice);


const store = configureStore({
  reducer: {
    proposalDetails: formPersistedReducer,
  },
});

const persistor = persistStore(store);
export { store, persistor };
