
export type ExtendedPage = 'home' | 'businessDetails';
export type Page = 'login' | 'home';

export interface Category {
    id: string;
    _id?: string;
    name: string;
}

export interface Business {
    id:string;
    _id?: string;
    name: string;
    description: string;
    address: string;
    logo_url?: string;
    photos: string[];
    categories: string[];
    status: 'draft' | 'published';
}

export interface UserResponse {
    id: string;
    _id?: string;
    email: string;
    full_name?: string;
    phone_number?: string;
    created_at: string;
    role: 'usuario' | 'dueño' | 'admin';
}