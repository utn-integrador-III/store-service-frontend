
import { createContext } from 'react';
import { UserResponse } from '@/types';

export interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    user: UserResponse | null;
    isAdmin: boolean;
    fetchUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);