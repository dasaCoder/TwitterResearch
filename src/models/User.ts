export interface User {
    email: string;
    password: string;
    confirmPassword?: string;
    userId?: string;
    document_ID?: string;
}