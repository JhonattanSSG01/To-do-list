import React from 'react'; // Se importa de react para expresar que libreria vamos a usar.
import './App.scss'; // Estilos scss
import Container from './components/Container'; // Componente el cual abarca todo los componentes que son requeridos para construir correctamente la aplicacion.

// La funcion conlleva el retrono del componente Container para su respectiva construccion en el documento HTML
function App() {
  return (
    <div className="App">
      <Container/> {/* Componente padre */}
    </div>
  );
};

export default App; // Exportamos el componente para poder usarlo en el componente principal (index).
