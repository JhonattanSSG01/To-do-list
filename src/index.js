import React from 'react'; // Se importa de react para expresar que libreria vamos a usar.
import ReactDOM from 'react-dom/client'; // Se importa de react DOM para el tema de la manipulacion del documento HTML.
import './index.css'; // Estilos Css
import App from './App'; // Componente que tiene el componente principal para la construccion de la aplicacion.

// Se accede al id root de HTML para que renderice el componente App como tal la aplicacion y se logre visualizar.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Componente principal que abarca los demas componentes los cuals se pintaran en el index HTML */}
  </React.StrictMode>
);
