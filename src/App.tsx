import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { AuthProvider } from './context/AuthProvider';
import { ExtendedPage, Page } from './types'; 
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import './styles/App.module.css';
import { OwnerDashboardPage } from './pages/OwnerDashboardPage';


function App() {
  
  const [currentPage, setCurrentPage] = useState<Page | ExtendedPage>('login');

  
  const navigateTo = (page: ExtendedPage | Page, businessId?: string) => {
    console.log(`Navegando a la página: "${page}"`);
    
    if (page === 'businessDetails') {
      alert(`Aquí se mostrarían los detalles del negocio con ID: ${businessId}`);
    }

    setCurrentPage(page); 
  };

  return (
    <AuthProvider>
      <main className="mainContent">
        {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />}
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        <OwnerDashboardPage />
        {/* Aquí podrías agregar un componente para businessDetails */}
      </main>
    </AuthProvider>
  );
}

export default App;
