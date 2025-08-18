import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { AuthProvider } from './context/AuthProvider';
import { ExtendedPage, Page } from './types';
import { LoginPage } from './pages/LoginPage';
import styles from './styles/App.module.css'; // usar como módulo

function App() {
  const [currentPage, setCurrentPage] = useState<Page | ExtendedPage>('login');

  const navigateTo = (page: ExtendedPage | Page, businessId?: string) => {
    console.log(`Navegando a la página: "${page}"`);

    if (page === 'businessDetails') {
      alert(`Aquí se mostrarían los detalles del negocio con ID: ${businessId ?? '(sin id)'}`);
    }

    setCurrentPage(page);
  };

  return (
    <AuthProvider>
      <main className={styles.mainContent}>
        {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />}
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {/* TODO: componente para businessDetails si lo vas a usar */}
      </main>
    </AuthProvider>
  );
}

export default App;
