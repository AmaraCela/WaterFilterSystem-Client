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
    SalesAgent?: SalesAgent;
}

export interface SalesAgent {
    agent_id: number;
    User: User;
}

export interface User {
    user_id: number;
    name: string;
    surname: string;
    email: string;
    role: string;
}

export interface Commission {
    commission_id: number;
    amount: number;
    approved: boolean;
    type: "REFERRAL" | "SPIF" | "TIERED";
    User: User;
    createdAt: string;
}

export interface Debt {
    nextPayment: string;
    amountPaidOff: number;
    amountToCollect: number;
    sale: number;
}