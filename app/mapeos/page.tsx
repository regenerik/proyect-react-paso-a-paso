"use client";
import Link from "next/link";
import { useState } from "react";

export default function MapeosPage() {
  // estados locales
  const [mostrarNotas, setMostrarNotas] = useState(true);

  // array de objetos para renderizar cards
  const alumnos = [
    {
      nombre: "Ana",
      tecnologia: "React",
      nota: 9,
      descripcion: "Entendió componentes y estado local.",
    },
    {
      nombre: "Bruno",
      tecnologia: "Next",
      nota: 8,
      descripcion: "Está practicando rutas y navegación.",
    },
    {
      nombre: "Carla",
      tecnologia: "JavaScript",
      nota: 10,
      descripcion: "Viene bastante filosa con funciones flecha.",
    },
  ];

  // array simple para mostrar otro mapeo más chico
  const temas = ["Componentes", "Props", "Estado", "Eventos", "Mapeos"];

  // area de renderizado.
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-300 underline">
            Volver al inicio
          </Link>

          <h1 className="mt-4 text-3xl font-bold">Mapeos en React</h1>

          <p className="mt-3 text-slate-300">
            En React usamos map para recorrer un array y transformar cada dato
            en algo visual. Por ejemplo: una lista, una card o un botón.
          </p>
        </div>

        {/* EJEMPLO 1 ARRAY SIMPLE */}
        <div className="rounded-xl border border-blue-500 bg-blue-950/40 p-6">
          <h2 className="text-xl font-semibold text-blue-200">
            Ejemplo 1: map con array simple
          </h2>

          <p className="mt-2 text-blue-100">
            Recorremos un array de textos y renderizamos un elemento por cada
            tema.
          </p>

          <ul className="mt-4 grid gap-3">



            {
                temas.map((tema, index) => (

                    <li
                        key={index}
                        className="rounded-lg border border-blue-400 bg-black/40 p-3 text-blue-100"
                    >
                        {index + 1}. {tema}
                    </li>
                    
                ))
            }

          </ul>

        </div>

        {/* EJEMPLO 2 CARDS */}
        <div className="rounded-xl border border-pink-500 bg-pink-950/40 p-6">
          <h2 className="text-xl font-semibold text-pink-200">
            Ejemplo 2: map para renderizar cards
          </h2>

          <p className="mt-2 text-pink-100">
            Acá el array tiene objetos. Cada objeto se transforma en una card.
            Usamos función flecha dentro del área de renderizado.
          </p>

          <button
            onClick={() => setMostrarNotas((prev) => !prev)}
            className="mt-4 rounded-lg bg-pink-500 px-4 py-2 font-semibold text-black hover:bg-pink-400"
          >
            {mostrarNotas ? "Ocultar notas" : "Mostrar notas"}
          </button>

          <div className="mt-6 grid gap-4 md:grid-cols-3">


            {
              alumnos.map((alumno, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-pink-400 bg-black/40 p-5"
                >
                  <h3 className="text-xl font-bold text-pink-200">
                    {alumno.nombre}
                  </h3>

                  <p className="mt-2 text-pink-100">
                    Tecnología: {alumno.tecnologia}
                  </p>

                  {
                    mostrarNotas && (
                      <p className="mt-2 text-2xl font-bold text-pink-300">
                        Nota: {alumno.nota}
                      </p>
                    )
                  }

                  <p className="mt-3 text-sm text-pink-100">
                    {alumno.descripcion}
                  </p>
                </div>
              ))
            }

          </div>
        </div>

        {/* EXPLICACION KEY */}
        <div className="rounded-xl border border-yellow-500 bg-yellow-950/40 p-6">
          <h2 className="text-xl font-semibold text-yellow-200">
            ¿Para qué sirve key?
          </h2>

          <p className="mt-2 text-yellow-100">
            React pide una key para identificar cada elemento de una lista.
            En este ejemplo usamos el index porque la lista es fija y sencilla.
            Si la lista cambia, se borra o se reordena, conviene usar un id real.
          </p>

          <pre className="mt-4 overflow-auto rounded-lg bg-black p-4 text-sm text-green-300">
{`{alumnos.map((alumno, index) => (
  <div key={index}>
    <h3>{alumno.nombre}</h3>
    <p>{alumno.tecnologia}</p>
  </div>
))}`}
          </pre>
        </div>
      </section>
    </main>
  );
}
