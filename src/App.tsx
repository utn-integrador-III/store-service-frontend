
import React from 'react';
import { HomePage } from './pages/HomePage';
import { ExtendedPage } from './types'; 
import './styles/App.module.css';

function App() {

  const navigateTo = (page: ExtendedPage, businessId?: string) => {
    console.log(`Navegando a la página: "${page}"`);

    if (page === 'businessDetails') {
      alert(`Aquí se mostrarían los detalles del negocio con ID: ${businessId}`);
    }
  };

  return (
    <main className="mainContent">
      <HomePage navigateTo={navigateTo} />
    </main>
  );
}

export default App;