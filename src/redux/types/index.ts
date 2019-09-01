export interface Customer {
    id?: string;
    firstName: string;
    lastName: string;
    dob: string;
};

export interface State {
    readonly customers: Customer[];
}
