
import React from 'react';
import styles from '@/styles/Header.module.css';


interface HeaderProps {
    navigateTo: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerNav}>
                <h1 onClick={() => navigateTo('home')}>ServiBook</h1>
                <nav className={styles.navLinks}>
                    {}
                </nav>
            </div>
        </header>
    );
};