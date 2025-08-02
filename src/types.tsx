
export type ExtendedPage = 'home' | 'businessDetails';

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