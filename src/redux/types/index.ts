export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
};

export interface State {
    customers: Customer[];
}
