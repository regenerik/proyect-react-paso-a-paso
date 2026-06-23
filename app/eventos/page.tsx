"use client";
import { useState } from "react";




export default function Eventos() {//Componente funcional.

  //estados locales
  const [luz, setLuz] = useState(false);
  const [name, setName] = useState("");


  //handlers.
  const handlerClick = () => {
  
      setLuz((prev) => !prev);
    // Prev es un nombre representativo de un valor que recibimos automáticamente, 
    // que es el valor actual del estado. Lo negamos para cambiar su valor.
    console.log(luz);
  };

  const handlerInputName = (e: any) => {
    setName(e.target.value);
  };

  //area de renderizado.
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Eventos en React</h1>

          <p className="mt-3 text-slate-300">
            En esta página vemos ejemplos simples de onClick y onChange usando
            estado local. La idea es entender cómo una acción del usuario puede
            modificar un estado y actualizar la pantalla.
          </p>
        </div>

        {/* EJEMPLO 1 BOTON */}
        <div className="rounded-xl border border-yellow-500 bg-yellow-950/40 p-6">
          <h2 className="text-xl font-semibold text-yellow-200">
            Ejemplo 1: botón con handler
          </h2>

          <p className="mt-2 text-yellow-100">
            Este botón ejecuta una función llamada handlerClick.
          </p>

          <button
            onClick={handlerClick} // forma sensilla de llamar a una función.
            className="mt-4 rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black hover:bg-yellow-400"
          >
            Enciende / Apaga
          </button>

          <h2 className="mt-4 text-2xl font-bold">

            {/* ternario dentro de lás llaves de lógica: {" "} */}

            {luz ? "encendido" : "apagado"} 

          </h2>
        </div>

        {/* EJEMPLO 2 BOTON */}
        <div className="rounded-xl border border-orange-500 bg-orange-950/40 p-6">
          <h2 className="text-xl font-semibold text-orange-200">
            Ejemplo 2: botón con cambio directo
          </h2>

          <p className="mt-2 text-orange-100">
            En esta versión hacemos el cambio en una sola línea. Sirve, pero no
            tenemos una función separada para hacer más cosas.
          </p>

          <button
            // Cuando la función necesita llevar algun valor entre paréntesis 
            // va la función callback ()=> antes : "{  ()=> algunaFuncion(dato) }"".



            onClick={() => setLuz(    (prev) => !prev      )}
            // La función setLuz cuenta con el valor actual del estado, 
            // que se llama prev por ser un nombre representativo. 
            // Lo negamos para cambiar su valor.

            className="mt-4 rounded-lg bg-orange-500 px-4 py-2 font-semibold text-black hover:bg-orange-400"
          >
            Enciende / Apaga
          </button>

          <h2 className="mt-4 text-2xl font-bold">
            {luz ? "encendido" : "apagado"}
          </h2>
        </div>

        {/* FORMAS DE LLENAR UN INPUT */}
        <div className="rounded-xl border border-cyan-500 bg-cyan-950/40 p-6">
          <h2 className="text-xl font-semibold text-cyan-200">
            Ejemplo 3: input con onChange
          </h2>

          <p className="mt-2 text-cyan-100">
            Este input captura lo que escribe el usuario y lo guarda en el
            estado local name.
          </p>
{/* // ACA ESTA EL INPUT -------------------------------------------------------------- */}
          <input
            type="text"
            placeholder="Escribí tu nombre..."
            onChange={(e) => handlerInputName(e)} // O SI NO TAMBIEN SE PUEDE...
            // onChange={handlerInputName}
            // Forma directa, sin función callback.Funciona igual porque el handlerInputName ya recibe el evento como argumento.
            className="mt-4 w-full rounded-lg border border-cyan-400 bg-black p-3 text-white outline-none"
          />

          <h1 className="mt-4 text-2xl font-bold text-cyan-300">{name}</h1>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Otras formas posibles</h2>

          <p className="mt-2 text-slate-300">
            Acá vemos si usamos una función o si pasamos la instrucción directamente.
          </p>

          <pre className="mt-4 overflow-auto rounded-lg bg-black p-4 text-sm text-green-300">
          
             {/* Forma directa: */}
            <input type="text" onChange={(e) => setName(e.target.value)} />

            {/* Forma pasando el handler directamente: */}
            {/* <input type="text" onChange={handlerInputName} /> */}

          </pre>
          
        </div>
      </section>
    </main>
  );
}