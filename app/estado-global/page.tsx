import Link from "next/link";

const storeCode = `export type Todo = {
  id: number;
  label: string;
};

export type Store = {
  todos: Todo[];
};

export type Action =
  | {
      type: "ADD_TODO";
      payload: Todo;
    }
  | {
      type: "CLEAR_TODOS";
    };

export const initialStore = (): Store => ({
  todos: [
    { id: 1, label: "Hacer la cama" },
    { id: 2, label: "Sacar la basura" },
  ],
});

export default function storeReducer(state: Store, action: Action): Store {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "CLEAR_TODOS":
      return {
        ...state,
        todos: [],
      };

    default:
      return state;
  }
}`;

const contextCode = `"use client";

import { createContext, ReactNode, useContext, useReducer } from "react";
import storeReducer, { initialStore, Store, Action } from "../store/store";

type StoreContextType = {
  store: Store;
  dispatch: React.Dispatch<Action>;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useGlobalReducer debe usarse dentro de StoreProvider");
  }

  return context;
}`;

const providersCode = `"use client";

import { ReactNode } from "react";
import { StoreProvider } from "../context/StoreContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}`;

const layoutCode = `import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Ejemplos React",
  description: "Proyecto de ejemplos con Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`;

const agregarTareaCode = `"use client";

import { useState } from "react";
import Link from "next/link";
import useGlobalReducer from "../../context/StoreContext";

export default function AgregarTareaPage() {
  const { store, dispatch } = useGlobalReducer();
  const [texto, setTexto] = useState("");

  const agregarTarea = () => {
    if (texto.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        label: texto,
      },
    });

    setTexto("");
  };

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

      <h2>Cantidad de tareas: {store.todos.length}</h2>

      <hr />

      <Link href="/ver-tareas">Ir a ver tareas</Link>
    </main>
  );
}`;

const verTareasCode = `"use client";

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
}`;

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-xl border border-neutral-700 bg-neutral-950 p-4 text-sm text-neutral-100">
      <code>{code}</code>
    </pre>
  );
}

export default function EstadoGlobalPage() {
  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <section className="mx-auto max-w-5xl space-y-8">
        <div>
          <Link
            href="/"
            className="text-sm text-cyan-300 transition hover:text-cyan-200"
          >
            ← Volver al inicio
          </Link>

          <h1 className="mt-6 text-4xl font-bold text-cyan-200">
            Estado global con Context + Reducer
          </h1>

          <p className="mt-3 max-w-3xl text-neutral-300">
            Guía simple para implementar un estado global en Next usando context,
            reducer, provider y dispatch. La idea es que una página pueda modificar
            el estado y otra pueda consumirlo.
          </p>
        </div>

        <section className="rounded-2xl border border-cyan-500 bg-cyan-950/30 p-6">
          <h2 className="text-2xl font-semibold text-cyan-200">
            Idea general
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-cyan-700 bg-neutral-950/60 p-4">
              <h3 className="font-semibold text-cyan-100">store</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Guarda los datos globales.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-700 bg-neutral-950/60 p-4">
              <h3 className="font-semibold text-cyan-100">dispatch</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Pide un cambio en el estado.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-700 bg-neutral-950/60 p-4">
              <h3 className="font-semibold text-cyan-100">reducer</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Decide cómo cambia el estado.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-700 bg-neutral-950/60 p-4">
              <h3 className="font-semibold text-cyan-100">provider</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Comparte el estado con toda la app.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-2xl font-semibold text-white">
              1. Crear carpetas hermanas de app
            </h2>

            <p className="mt-3 text-neutral-300">
              En la raíz del proyecto, al mismo nivel que <span className="text-cyan-300">app</span>,
              creamos dos carpetas:
            </p>

            <CodeBlock
              code={`context/
store/`}
            />
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-2xl font-semibold text-white">
              2. Crear store/store.ts
            </h2>

            <p className="mt-3 text-neutral-300">
              Este archivo define el estado inicial, los tipos y el reducer.
            </p>

            <CodeBlock code={storeCode} />
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-2xl font-semibold text-white">
              3. Crear context/StoreContext.tsx
            </h2>

            <p className="mt-3 text-neutral-300">
              Este archivo crea el contexto, el provider y el hook personalizado
              para consumir el estado global.
            </p>

            <CodeBlock code={contextCode} />
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-2xl font-semibold text-white">
              4. Crear app/providers.tsx
            </h2>

            <p className="mt-3 text-neutral-300">
              Este componente permite envolver toda la app con el StoreProvider.
            </p>

            <CodeBlock code={providersCode} />
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-2xl font-semibold text-white">
              5. Modificar app/layout.tsx
            </h2>

            <p className="mt-3 text-neutral-300">
              El layout envuelve todos los children con Providers para que toda
              la aplicación tenga acceso al contexto.
            </p>

            <CodeBlock code={layoutCode} />
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-2xl font-semibold text-white">
              6. Crear app/agregar-tarea/page.tsx
            </h2>

            <p className="mt-3 text-neutral-300">
              Esta página modifica el estado global usando dispatch.
            </p>

            <CodeBlock code={agregarTareaCode} />
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-2xl font-semibold text-white">
              7. Crear app/ver-tareas/page.tsx
            </h2>

            <p className="mt-3 text-neutral-300">
              Esta página consume el estado global, pero no lo modifica.
            </p>

            <CodeBlock code={verTareasCode} />
          </article>
        </section>

        <section className="rounded-2xl border border-cyan-500 bg-cyan-950/30 p-6">
          <h2 className="text-2xl font-semibold text-cyan-200">
            Flujo final
          </h2>

          <CodeBlock
            code={`Usuario escribe una tarea
        ↓
Hace click en "Agregar tarea"
        ↓
dispatch manda una acción
        ↓
El reducer recibe state + action
        ↓
El reducer devuelve un nuevo estado
        ↓
El Provider actualiza el estado global
        ↓
Otra página puede leer ese nuevo estado`}
          />

          <p className="mt-4 text-neutral-300">
            En resumen: para leer usamos <span className="text-cyan-300">store</span>.
            Para modificar usamos <span className="text-cyan-300">dispatch</span>.
            El reducer es el que decide cómo se actualiza todo, porque dejar que
            cualquiera toque el estado directo sería convertir React en una verdulería.
          </p>
        </section>
      </section>
    </main>
  );
}