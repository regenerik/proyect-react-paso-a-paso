"use client";

import { useState } from "react";                 //IMPORTAMOS EL HOOK DE ESTADO
import Hijo from "../../components/hijo";         //IMPORTAMOS EL COMPONENTE HIJO PARA USARLO DENTRO DEL PADRE
// Pero no se llamaba "hijo", en vez de hijo ?
// Cuando es "export default" a lo que nos traemos le podemos poner
// el nombre que se nos antoje.


export default function Padre() {// LA fUNCION.

  //ESTADOS LOCALES:
  const [name, setName] = useState("Juan React");

  const [persona, setPersona] = useState({
    nombre: "Ada",
    apellido: "Lovelace",
    edad: "36",
  });


  //AREA DE RETORNO:
  return (
    // EL FONDO
    <main className="min-h-screen bg-blue-950 p-8 text-white">

      {/* EL CONTENEDOR PRINCIPAL */}
      <section className="mx-auto max-w-5xl space-y-8 rounded-2xl border border-blue-400 bg-blue-900 p-8">
        
        {/* TITULO Y DESCRIPCION */}
        <div>
          <h1 className="text-3xl font-bold">Componente Padre</h1>

          <p className="mt-3 text-blue-100">
            Este componente maneja estados locales y se los pasa al componente
            hijo usando props.
          </p>
        </div>

        {/* PRIMER ESTADO LOCAL */}
        <div className="rounded-xl bg-blue-800 p-6">
          <h2 className="text-xl font-semibold">Primer estado local: string</h2>

            {/* ACA VEO */}
          <p className="mt-2">
            Valor actual de estado local:{" "}
            <span className="font-bold text-yellow-300">{name}</span>
          </p>

            {/* ACA MODIFICO */}
          <input
            className="mt-4 w-full rounded-lg border border-blue-300 bg-black p-3 text-white outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>

        <div className="rounded-xl bg-blue-800 p-6">
          <h2 className="text-xl font-semibold">
            Segundo estado local: objeto
          </h2>

          <p className="mt-2 text-blue-100">
            Este objeto también se comparte con el hijo.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm text-blue-100">Nombre</label>

              <input
                className="mt-2 w-full rounded-lg border border-blue-300 bg-black p-3 text-white outline-none"
                value={persona.nombre}
                onChange={(e) =>
                  setPersona((prev) => ({
                    ...prev,
                    nombre: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label className="block text-sm text-blue-100">Apellido</label>

              <input
                className="mt-2 w-full rounded-lg border border-blue-300 bg-black p-3 text-white outline-none"
                value={persona.apellido}
                onChange={(e) =>
                  setPersona((prev) => ({
                    ...prev,
                    apellido: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label className="block text-sm text-blue-100">Edad</label>

              <input
                className="mt-2 w-full rounded-lg border border-blue-300 bg-black p-3 text-white outline-none"
                value={persona.edad}
                onChange={(e) =>
                  setPersona((prev) => ({
                    ...prev,
                    edad: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* COMPONENTE HIJO */}

        <Hijo nombreHeredado={name} personaHeredada={persona} />
        
      </section>
    </main>
  );
}