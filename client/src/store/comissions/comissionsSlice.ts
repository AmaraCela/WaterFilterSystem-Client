import { createSlice } from "@reduxjs/toolkit"
import { Commission } from "../../types/types"
import { approveCommission, declineCommission, getUnapprovedCommissions } from "./comissionsThunk"

interface CommissionState {
    commissions: Commission[],
    approved: boolean,
    declined: boolean,

}

const initialState: CommissionState = {
    commissions: [],
    approved: false,
    declined: false,
}

const commissionsSlice = createSlice({
    name: 'commission',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUnapprovedCommissions.fulfilled, (state: CommissionState, action: any) => {
            state.commissions = action.payload;
        }).addCase(approveCommission.fulfilled, (state: CommissionState, action: any) => {
            state.approved = true;
        }).addCase(approveCommission.pending, (state: CommissionState, action: any) => {
            state.approved = false;
            state.declined = false;
        }).addCase(declineCommission.pending, (state: CommissionState, action: any) => {
            state.declined = false;
            state.approved = false;
        }).addCase(declineCommission.fulfilled, (state: CommissionState, action: any) => {
            state.declined = true;
        })
    }
});

export default commissionsSlice.reducer;