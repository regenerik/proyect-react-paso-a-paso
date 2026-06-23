"use client";

import { useState } from "react";


export default function VariableVsEstado() {

  let nombre = "Variable común";

  const [ name, setName ] = useState("Valor inicial");
 
  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Variable común vs estado local
          </h1>

          <p className="mt-3 text-neutral-300">
            En este ejemplo vemos por qué escribir en un input no alcanza para
            actualizar la pantalla. Para que React vuelva a pintar el componente,
            necesitamos usar estado local.
          </p>
        </div>

        <div className="rounded-xl border border-red-500 bg-red-950/40 p-6">
          <h2 className="text-xl font-semibold text-red-200">
            Intento con variable común
          </h2>

          <p className="mt-2 text-red-100">
            Este input intenta cambiar una variable llamada nombre.
          </p>

{/* // ACÁ EL INTENTO CON VARIABLE COMÚN !!--------------------------------------------------------
          //Primer input */}
          <input
            className="mt-4 w-full rounded-lg border border-red-400 bg-black p-3 text-white outline-none"
            placeholder="Escribí un nombre..."
            onChange={(e) => {                  // Cuando hay cambios en el input...
              nombre = e.target.value;          // Cambia el valor de la "nombre",pero react no muestra el cambio.
              console.log("Valor escrito en el input:", e.target.value);
              console.log("Valor actual de la variable nombre:", nombre);
            }}
          />

          //Muestra el valor de la variable común "nombre":
          <h3 className="mt-4 text-lg font-bold text-red-300">
            Valor actual de la variable nombre: {nombre}
          </h3>

          <p className="mt-2 text-sm text-red-200">
            Aunque escribas en el input y la variable cambie en consola, este
            texto no se actualiza en pantalla porque React no vuelve a
            renderizar por cambios en una variable común.
          </p>
        </div>

// ACÁ EL CAMBIO CON ESTADO LOCAL !!--------------------------------------------------------

        <div className="rounded-xl border border-green-500 bg-green-950/40 p-6">
          <h2 className="text-xl font-semibold text-green-200">
            Cambio con estado local
          </h2>

          <p className="mt-2 text-green-100">
            Este input cambia un estado local llamado name.
          </p>

          //El input que cambia el estado local "name":
          <input
            className="mt-4 w-full rounded-lg border border-green-400 bg-black p-3 text-white outline-none"
            placeholder="Escribí un nombre..."
            onChange={(e) => {
              let valorEscrito = e.target.value;
              console.log("Valor escrito en el input:", valorEscrito);
              setName(valorEscrito);
            }}
          />
          
          //Muestra el valor del estado local "name":
          <h3 className="mt-4 text-lg font-bold text-green-300">
            Valor actual del estado local name: {name}
          </h3>

          <p className="mt-2 text-sm text-green-200">
            Acá sí se actualiza el texto en pantalla porque setName cambia el
            estado local y React vuelve a renderizar el componente.
          </p>
        </div>
      </section>
    </main>
  );
}