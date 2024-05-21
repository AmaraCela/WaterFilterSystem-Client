import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import clientReducer from "./client/clientSlice";
import statisticsReducer from "./statistics/statisticsSlice";
import meetingReducer from "./meetings/meetingsSlice";
import saleReducer from "./sales/saleSlice";
import commissionReducer from "./comissions/comissionsSlice";
import debtReducer from "./debts/debtsSlice";
import userReducer from "./users/userSlices";
import callReducer from "./calls/callsSlice";


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    client: clientReducer,
    statistic: statisticsReducer,
    meeting: meetingReducer, 
    sale: saleReducer,
    commission: commissionReducer,
    debt: debtReducer,
    user: userReducer,
    call: callReducer,

})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const persistor = persistStore(store);