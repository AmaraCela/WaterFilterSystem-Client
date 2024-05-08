import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

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
    async (client: {
        id?: number;
        name?: string;
        surname?: string;
        phoneNo?: string;
        profession?: string;
        address?: string;
        status?: "IN_WAITLIST" | "IN_REDLIST";
        hasMadePurchase?: boolean;
        nextContactDate?: string;
        createdAt?: string;
    }, { rejectWithValue }) => {
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
            for (const info of information) {
                let name = info.referralName.split(' ')[0];
                let surname = info.referralName.split(' ').length > 0 ? info.referralName.split(' ')[1] : null;
                let phoneNo = info.phoneNumber;
                let address = info.address;
                let profession = info.profession;
                let hasMadePurchase = false;
                let referredBy = info.originClientId;
                let body = {name, surname, phoneNo, address, profession, hasMadePurchase, referredBy};

                const response = await createAPI('clients', { method: 'POST' })(body);
                return response.ok ? 'References added successfully' : rejectWithValue('There was an error registering the references');
            }
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)