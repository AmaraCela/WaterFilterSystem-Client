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