export interface User {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
}

export interface ComplexModel{
    users: User[];
}