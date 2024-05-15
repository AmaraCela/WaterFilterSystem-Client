import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";
import { Client } from "../../types/types";

export const redListClients = createAsyncThunk(
    'redListClients',
    async (_, { rejectWithValue }) => {
        try {
            const response = await createAPI("clients?status=IN_REDLIST", {})(null);
            const data = await response.json();
            return response.ok ? data : rejectWithValue("Error occured");
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const allClients = createAsyncThunk(
    'allClients',
    async (searchValue: string | null, { rejectWithValue }) => {
        try {
            let response;
            if (searchValue) {
                response = await createAPI(`clients?search=${searchValue}`, {})(null);
            }
            else {
                response = await createAPI("clients", {})(null);
            }
            const data = await response.json();
            return response.ok ? data : rejectWithValue("Error occured")
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const getClient = createAsyncThunk(
    'getClient',
    async (id: string, { rejectWithValue }) => {
        try {
            let response = await createAPI(`clients/${id}`, {})(null);
            let data = await response.json();

            return response.ok ? data : rejectWithValue("Error occured");
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const editClient = createAsyncThunk(
    'editClient',
    async (client: Client, { rejectWithValue }) => {
        try {
            let response = await createAPI(`clients/${client.id}`, { method: 'PUT' })(client);
            let data = await response.json();
            return response.ok ? data : rejectWithValue("Error occured");
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addReferences = createAsyncThunk(
    'addReferences',
    async (information: {
        originClientId: number;
        referralName: string;
        address?: string;
        phoneNumber: string;
        profession?: string;
        financiallyQualified: boolean;
        comments?: string;
    }[], { rejectWithValue }) => {
        try {
            let flag = true;
            let errors: any[] = [];
            let i = 0;
            for (const info of information) {
                let name = info.referralName.split(' ')[0];
                let surname = info.referralName.split(' ').length > 0 ? info.referralName.split(' ')[1] : null;
                let phoneNo = info.phoneNumber.trim() === '' ? null : info.phoneNumber;
                let address = info.address;
                let profession = info.profession;
                let hasMadePurchase = false;
                let referredBy = info.originClientId === -1 ? null : info.originClientId;
                let body = referredBy ? { name, surname, phoneNo, address, profession, hasMadePurchase, referredBy } : { name, surname, phoneNo, address, profession, hasMadePurchase };

                const response = await createAPI('clients', { method: 'POST' })(body);
                const data = await response.json();
                const errorInfo = { data, reference: i }
                !response.ok && errors.push(errorInfo);
                flag = flag && response.ok;
                i++;
            }
            return flag ? 'References added successfully' : rejectWithValue(errors);
        }
        catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
)


export const getReferences = createAsyncThunk(
    'getReferences',
    async(_, { rejectWithValue }) => {
        try {
            const response = await createAPI('clients?type=References', {})(null);
            const data = await response.json();
            return response.ok ? data : rejectWithValue('Could not retrieve references');
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
);