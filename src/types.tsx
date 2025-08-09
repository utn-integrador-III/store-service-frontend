
export type ExtendedPage = 'home' | 'businessDetails';
export type Page = 'register'| 'login' | 'home';

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
    owner_request?: {
        business_name: string;
        business_description: string;
        address: string;
        logo_url?: string;
    };
}

export interface OwnerRequest {
    business_name: string;
    business_description: string;
    address: string;
    logo_url?: string;
    status: 'pending' | 'approved' | 'rejected';
}


export interface CategoryRequest {
    id: string;
    _id?: string;
    category_name: string;
    reason: string;
    evidence_url?: string;
}