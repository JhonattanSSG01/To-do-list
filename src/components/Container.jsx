/* DESCRIPCION DEL COMPONENTE: Contiene los componentes requeridos los cuales son: FormTodo y TaskList, estos
 traen la funcionalidad propuesta para lograr lo esperado que es añadir tareas, visualizarlas y checkearlas 
 cuando estén hechas y se tiene la posibilidad de eliminarlas.
 Es el componente que va a pasar FormTodo a TaskList.
 */

import React, { useState } from "react"; // Se importa el hook useState de control estados de react.

// Importamos los componentes, ya que, el componente Container es el padre de todos los componentes
import TaskList from "./TaskList"; // Componente que lista tareas.
import FormTodo from "./FormTodo"; // Componente que agrega tareas.

// Se declara una constante e inicializa con una función flecha(arrow funtion) sin parametros (_), la cual, tiene como objetivo añadir items a la lista vacia
const CONTAINER = _ => {
  const [list, setList] = useState([]); // Estado nuevo(lista), se almacena los datos del componente FormTodo a la lista vacía.

  // Recibe las propiedades del componente FormTodo para ir organizarlas cada vez que se agrega una nueva.
  const handleAddItem = (addItem) => {
    setList([...list, addItem]); // Se le asigna los items de la lista de tareas como argumentos para aasignarlos a la variable list
  };
  // Retorna una estructura HTMl llamando a los componentes requeridos para la correcta visualizacion de los datos y como tal de la aplicacion.
  return (
    <div>
      <FormTodo handleAddItem={handleAddItem} /> {/* Genera la funcioanlidad que trae la constante handleAddItem */}
      <TaskList list={list} setList={setList} /> {/* Genera un valor cada vez que se ingrese */}
    </div>
  );
};

export default CONTAINER; // Exportamos el componente para poder usarlo en el componente App y se visualice en la vista principal del HTML
