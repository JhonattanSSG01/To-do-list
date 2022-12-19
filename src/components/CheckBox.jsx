import React, { Fragment } from "react"; // Se importa el componente de react que nos ayuda a pintar sin necesidad de crear un contenedor padre

// Constantes checkbox que como parametros se le pasa unas props
const CHECKBOX = (props) => {
    const {
        onChange, // El evento que secede cuando ingresamos algo al input.
        data: { id, description, done },// Aqui verifico las propiedades que necesito traerme como el id, la descripcion y si esta hecho o no la tarea
    } = props;
    // Retorna una estructura HTML
    return (
      /* El componente fragment en React es un componente desarrollado por esta librería JavaScript para agrupar elementos sin introducir elementos extra 
        a nivel de DOM. En este sentido, es un componente hueco que no te romperá estilos ni semántica. Tambien se puede interpretar <> </>*/
      <Fragment>
        {/* Es el icono del cuadrito check */}
        <svg
          viewBox="0 0 0 0"
          style={{ position: "absolute", zIndex: -1, opacity: 0 }} // Estilos en linea, siempre hay que colocarlos en {} para iterpretar codigo js en react y en otras {} para manejar esos estilo como en js que se manaejan como objetos
        >
          <defs>
            <path id="todo__line" d="M21 12.3h168v0.1z" />
            <path
              id="todo__box"
              d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
            />
            <path id="todo__check" d="M10 13l2 2 5-5" />
            <circle id="todo__circle" cx="13.5" cy="12.5" r="10" />
          </defs>
        </svg>

        <label className="todo new-item">
          <input // este input me permite agregar nuevas tareas, ver si la tarea esta terminada y la descripcion del archivo
            className="todo__state"
            name={id}
            type="checkbox"
            defaultChecked={done}
            onChange={onChange} // Evento que nos permite definir acciones a ejecutar cuando algo sucede
          />
          {/* Es el icono del cuadrito check con el chulo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 200 25"
            className="todo__icon"
          >
            <use xlinkHref="#todo__line" className="todo__line" />
            <use xlinkHref="#todo__box" className="todo__box" />
            <use xlinkHref="#todo__check" className="todo__check" />
            <use xlinkHref="#todo__circle" className="todo__circle" />
          </svg>
          <div className="todo__text">{description}</div>{/* Se visualiza la descripcion respectiva que se haya agregado en el input */}
        </label>
      </Fragment>
    );
};

export default CHECKBOX; // Exportamos el componente para poder usarlo en el componente Container