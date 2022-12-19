/*
DESCRIPCION DEL COMPONENTE: Primero agregamos los elementos input y button. Después generamos el estado description para asignarlo al input.
Finalmente validamos el botón, sí description no tiene valor lo deshabilitamos y si tiene datos lo habilitamos.
Es el componente donde vamos a escribir una tarea, y vamos a poder agregarla.
 */

// Importamos un Hook para el manejo de estados de las variables y la asignacion de datos a ellas.
/* useState() es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente. Acepta un valor inicial para esa variable y devuelve un array con dos elementos, el valor de la variable y la función para modificarla. Como el valor devuelto por la función es un array, podemos descomponerlo para acceder a sus elementos de manera individual.*/
import React, { useState } from "react";

// Constante formtodo que como parametros se le pasa unas props(propiedades que tendra HTML)
const FORMTODO = (props) => {
  const { handleAddItem } = props; // Declara constante destructurada y se le asigna las props(parametros que se pueden heredar).
  const [description, setDescription] = useState(""); // El estado que tendra la variable descripcion y el poder cambiar ese estado del componente.
  const handleSubmit = (e) => {
    // Manejador de evento onSubmit en el formulario

    // Cuando creamos un formulario, si tiene un atributo "action" el comportamiento por defecto es redirigir la página hacia la dirección del action, sino por defecto refresca la página actual. Es decir, si necesitas que tu página web no se actualice después del submit, debería colocar event.preventDefault() en la función que maneja el evento.
    e.preventDefault(); // Nos ayuda a evitar que se refresque la pagina y se pierda la informacion.

    handleAddItem({
      // Recibe un metodo y envia unos valores(props)
      done: false, // Estado de la tarea(terminado o no terminado)
      id: (+new Date()).toString(), // El ID sera la fecha y esta se convierte en cadena de texto.
      description, // Declara llave vacia
    });
    setDescription(""); // Limpiamos el estado de la variable description.
  };
  // Se retorna la estructura del HTML despues de la funcionalidad
  return (
    <form onSubmit={handleSubmit}>
      {/* Evento del formulario y llama la funcionalidad cuando damos enter en el input o click en el boton*/}
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={description} // Asigna el valor que devuelve la funcionalidad
            /* Nos permite definir acciones a ejecutar cuando algo sucede. Al ser un evento debemos pasarle una función. Esta función recibe el evento que nos manda React, conocido como event(e). Event no es más que un objeto con ciertas características de limpieza que equivale al evento para poder trabajar con él.*/
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="button pink"
            disabled={description ? "" : "disabled"} // La condicion ternario valida si description tiene datos(True) este habilita el boton, en caso contrario lo inhabilita
          >
            Add {/* Nombre del boton */}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FORMTODO; // Exportamos el componente para poder usarlo en el componente Container.
