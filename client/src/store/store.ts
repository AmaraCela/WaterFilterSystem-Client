import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import clientReducer from "./client/clientSlice";
import statisticsReducer from "./statistics/statisticsSlice";
import meetingReducer from "./meetings/meetingsSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    client: clientReducer,
    call: statisticsReducer,
    meeting: meetingReducer, 
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const persistor = persistStore(store);