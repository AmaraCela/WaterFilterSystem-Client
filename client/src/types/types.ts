export interface Client {
    id: number;
    name?: string;
    surname?: string;
    phoneNo: string;
    profession?: string;
    address?: string;
    status: "IN_WAITLIST" | "IN_REDLIST";
    nextContactDate?: string;
}

export interface Call {
    call_id: number;
    client: number;
    phoneOperator: number;
    scheduledTime: Date;
    outcomeComment: string;
    completed: boolean;
}