import { createSlice } from "@reduxjs/toolkit";
import { Sale } from "../../types/types";

interface SaleState {
    sales: Sale []
}

const initialState: SaleState = {
    sales: [],
}

const saleSlice = createSlice({
    name: 'sale',
    initialState,
    reducers: {}
});

export default saleSlice.reducer;