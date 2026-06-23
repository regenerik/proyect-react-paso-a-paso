"use client";

import { useState } from "react";
import Link from "next/link";
import useGlobalReducer from "../../context/StoreContext"; // Nuestro nuevo amigo

export default function AgregarTareaPage() {

  const { store, dispatch } = useGlobalReducer(); // Funcion que al ejecutarse me devuelve un objeto con el estado y el dispatch para modificarlo.
  const [texto, setTexto] = useState(""); // A este ya lo conocemos.


  //handler para agregar tarea al estado global:
  const agregarTarea = () => {
    if (texto === "") return; // Si esta vacío no hacemos nada.

    // dispatch simplificado : 
    // dispatch({type: "ADD_TODO", payload: texto }); - si fuera un payload simple.

    dispatch({
      type: "ADD_TODO",    //Type ( que hay que hacer )
      payload: {           //Payload ( con que lo hacemos )
        id: Date.now(),
        label: texto,
      },
    });

    setTexto("");
  };

  //Area de renderizado:
  return (
    <main>
      <h1>Agregar tarea</h1>

      <p>Esta página modifica el estado global usando dispatch.</p>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribí una tarea"
      />

      <button onClick={agregarTarea}>Agregar tarea</button>

      <h2>Cantidad de tareas: {store.todos.length}</h2> // Usamos el store para ver cuantas tareas hay actualmente.

      <hr />

      <Link href="/ver-tareas">Ir a ver tareas</Link>
    </main>
  );
}