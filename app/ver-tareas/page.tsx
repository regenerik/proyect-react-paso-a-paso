"use client";

import Link from "next/link";
import useGlobalReducer from "../../context/StoreContext";

export default function VerTareasPage() {
  const { store } = useGlobalReducer();

  return (
    <main>
      <h1>Ver tareas</h1>

      <p>Esta página consume el estado global, pero no lo modifica.</p>

      <ul>
        {store.todos.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>

      <hr />

      <Link href="/agregar-tarea">Ir a agregar tarea</Link>
    </main>
  );
}
