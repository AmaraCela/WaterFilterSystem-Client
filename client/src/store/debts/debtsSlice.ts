import { createSlice } from "@reduxjs/toolkit"
import { Debt } from "../../types/types";
import { getDebts } from "./debtsThunk";

interface DebtState {
    debts: Debt[],
}

const initialState: DebtState = {
    debts: []
}

const debtSlice = createSlice({
    name: 'debt',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getDebts.fulfilled, (state: DebtState, action: any) => {
            state.debts = action.payload;
        })
    }
});

export default debtSlice.reducer;