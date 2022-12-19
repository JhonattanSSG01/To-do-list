/* DESCRIPCION DEL COMPONENTE: Es el componente que va a tener una lista de tareas por hacer o hechas, 
donde va a poder eliminar todas las tareas que ya estén realizdas. */

// Principalmente se importa lo necesario que se vaya a utilizar en este componente principal.
import React from "react";
import CheckBox from "./CheckBox"; // Componente para poder seleccionar las tareas en la lista en la cual se iran agregando

// Constantes tasklist que como parametros se le pasa unas props necesarias para la funcionalidad y dinamismo de la app.
const TASKLIST = (props) => {
  const { list, setList } = props; // Se le asigna a la variable list las props que lleguen y estas se destructuran.

  /* Cuando el usuario intente escribir sobre el input de usuario o contraseña, se va a ejecutar el evento onChange en React. 
  Dentro de este evento, existe una propiedad target que guarda el elemento input. Esto quiere decir que, a través del comando 
  event.target, podemos tener acceso a toda la API del elemento HTML. Así, podemos acceder a todos los atributos del elemento input, 
  como lo son su type y value. */
  const onChangeStatus = (e) => {
    // Creamos un manejador de eventos  para verificar si estan hechas o no las tareas es decir recibe los datos del checkbox que hayan cambiado.
    const { name, checked } = e.target;

    /* Esta constante actualiza el listado de las tareas que se van agregando para la correcta visualizacion, en ella se usa un 
    metodo de los arrays para recorrer algo y que esta devuelva algo, para iterar a través de los elementos dentro de una colección 
    de arreglos en JavaScript. En este caso la lista y la nueva tarea agregada para la actualizacion correcta. */
    const updateList = list.map((item) => ({
      ...item, // Este operador permite que los elementos de un array se expandan y de esta manera, podemos añadir un array dentro de otro sin que ese resultado sean arrays anidados.
      done: item.id === name ? checked : item.done, // Se valida si la tarea es igual al nombre, es decir, si la tarea seleccionada es igual a el id que tiene dicha tarea esa tarea se checkea y si no se visualiza el nombre requerido.
    }));
    setList(updateList); // Se le asigna y almacena esos valores a la variable list
  };

  // Esta constante tiene una funcion asignada, la cual, nos ayuda a filtrar la lista de tareas que sea seleccione la cual se eliminaran del listado
  const onClickRemoveItem = _ => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList); // Se le asigna y almacena los nuevos valores a la variable list
  };

  // Esta constante tiene una funcion asignada, su funcionalidad nos ayuda a pintar el cuadrito seleccionado cuando se seleccione la tarea
  const chk = list.map((item) => (
    <CheckBox key={item.id} data={item} onChange={onChangeStatus} /> // Se llama el componente ya con toda su logica para el pintado de los checks.
  ));

  // Retorna una estructura HTML con la lista de tareas que se agregen durante la ejecucion del programa.
  return (
    <div className="todo-list">
      {list.length ? chk : "No tasks"}
      {/* Valida la longitud de la lista, si hay items, llama a la constante chk para la respectiva seleccion y si no, muestra un mensaje de no hay tareas agregadas. */}
      {list.length ? ( // Valida la longitud de la lista, si hay items se habilita el boton de eliminar las tareas seleccionadas, gracias al evento onclick que ejecuta la funcionalidad cuando se hace clic en ese botón.
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete All Done
          </button>
        </p>
      ) : null}
      {/* Si es falso(no hay items) sale null es decir vacio */}
    </div>
  );
};

export default TASKLIST; // Exportamos el componente para poder usarlo en el componente Container

