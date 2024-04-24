export interface Client {
    id: number;
    name?: string;
    surname?: string;
    phoneNo: string;
    profession?: string;
    address?: string;
    status: "IN_WAITLIST" | "IN_REDLIST";
    hasMadePurchase: boolean
    nextContactDate?: string;
    createdAt: string;
}

export interface Call {
    call_id: number;
    client: number;
    phoneOperator: number;
    scheduledTime: Date;
    outcomeComment: string;
    completed: boolean;
}

export interface Meeting {
    meeting_id: number;
    time: string;
    place: string;
    succesful: boolean;
    outcomeComment: string;
    Client: Client;
    phoneOperator: number;
    salesAgent: number;
    worker: number;
}

export interface Sale {
    id: number;
    client: number;
    salesAgent: number;
    phoneOperator: number;
    time: string | null;
    approved: boolean;
    price: number;
    warrantyExpiration: Date;
    renewalDate: Date;
    monthlyPayment: boolean;
    referredClients: number[];
    Client: Client;
}