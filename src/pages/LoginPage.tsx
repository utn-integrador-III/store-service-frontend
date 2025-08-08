
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import commonStyles from '@/styles/Common.module.css';
import pageStyles from '@/styles/AuthPage.module.css';
import { API_BASE_URL } from '@/services/api';
import { Page } from '@/types';

interface LoginPageProps {
    navigateTo: (page: Page) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ navigateTo }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);
        const formData = new URLSearchParams();
        formData.append('username', email);
        formData.append('password', password);
        try {
            const response = await fetch(`${API_BASE_URL}/login/access-token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formData.toString(),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.detail || 'Error al iniciar sesión.');
            login(data.access_token);
            navigateTo('home');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={pageStyles.pageContainer}>
            <div className={commonStyles.formContainer}>
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className={commonStyles.formGroup}><label htmlFor="email">Correo Electrónico</label><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
                    <div className={commonStyles.formGroup}><label htmlFor="password">Contraseña</label><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
                    <button type="submit" className={`${commonStyles.button} ${commonStyles.buttonPrimary}`} disabled={isLoading}>
                        {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
                    </button>
                    {error && <p className={`${commonStyles.alert} ${commonStyles.alertError}`}>{error}</p>}
                </form>
            </div>
        </div>
    );
};