"use client"; // LO DE SIEMPRE...

import { useState } from "react"; // IMPORTAMOS USESTATE.

export default function TernarioYShort() {
    //ESTADOS LOCALES:
  const [usuario, setUsuario] = useState({
    nombre: "David",
    estaLogueado: true,
    esAdmin: false,
    tieneNotificaciones: true,
  });

  //Handlers:
  const cambiarLogin = () => {

/// los "..." se leen como "todas las props con los valores de"
    setUsuario( (prev) => (
  
      {
      ...prev,
      estaLogueado: !prev.estaLogueado,
    }

  )
  
  );


  };

  const cambiarAdmin = () => {
    setUsuario((prev) => ({
      ...prev,
      esAdmin: !prev.esAdmin,
    }));
  };

  const cambiarNotificaciones = () => {
    setUsuario((prev) => ({
      ...prev,
      tieneNotificaciones: !prev.tieneNotificaciones,
    }));
  };

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Ternario y short circuit
          </h1>

          <p className="mt-3 text-neutral-300">
            Todo lo que se muestra depende de un objeto guardado en estado
            local.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-6">
          <h2 className="text-xl font-semibold">Estado actual</h2>

          <pre className="mt-4 overflow-auto rounded-lg bg-black p-4 text-sm text-green-300">
            {JSON.stringify(usuario, null, 2)}
          </pre>
        </div>

        <div className="rounded-xl border border-blue-500 bg-blue-950/40 p-6">
          <h2 className="text-xl font-semibold text-blue-200">
            Ejemplo con ternario
          </h2>

          <div className="mt-4 rounded-lg bg-black p-4">

            {
            
              usuario.estaLogueado ? (
                <p className="text-green-300">
                  Bienvenido, {usuario.nombre}. Estás logueado.
                </p>
              ) : (
                <p className="text-red-300">
                  No estás logueado. Andá a tocar el botón, campeón.
                </p>
              )
            
            }

          </div>
        </div>

        <div className="rounded-xl border border-purple-500 bg-purple-950/40 p-6">
          <h2 className="text-xl font-semibold text-purple-200">
            Ejemplo con short circuit
          </h2>

          <div className="mt-4 space-y-3 rounded-lg bg-black p-4">

            {

              usuario.esAdmin && (
                <p className="text-yellow-300">
                  Panel secreto de administrador visible.
                </p>
              )

            }

            {
              usuario.tieneNotificaciones && (
                <p className="text-cyan-300">
                  Tenés notificaciones nuevas.
                </p>
              )

            }



            {

              !usuario.esAdmin && !usuario.tieneNotificaciones && (
                <p className="text-neutral-400">
                  No hay nada especial para mostrar.
                </p>
              )

            }
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <button
            className="rounded-lg bg-green-600 px-4 py-2 font-semibold hover:bg-green-500"
            onClick={cambiarLogin}
          >
            Switch login con prev
          </button>

          <button
            className="rounded-lg bg-yellow-600 px-4 py-2 font-semibold hover:bg-yellow-500"
            onClick={cambiarAdmin}
          >
            Switch admin con prev
          </button>

          <button
            className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold hover:bg-cyan-500"
            onClick={cambiarNotificaciones}
          >
            Switch notificaciones con prev
          </button>
        </div>
      </section>
    </main>
  );
}