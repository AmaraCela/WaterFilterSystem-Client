import { createSlice } from "@reduxjs/toolkit";
import { PhoneOperator } from "../../types/types";
import { getPhoneOperators } from "./userThunks";

interface UserState {
    phoneOperators: PhoneOperator[];
}

const initialState: UserState = {
    phoneOperators: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPhoneOperators.fulfilled, (state: UserState, action: any) => {
            state.phoneOperators = action.payload;
        })
    }
   
});

export default userSlice.reducer;