"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


//Podemos citar un componente dentro de otro sin necesidad de importarlo ya que está en el mismo archivo.
function DetectorScroll() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
   
    const handlerScroll = () => {
      setScrollY(window.scrollY);
    };

    // Cuando el componente aparece, agregamos la escucha del evento scroll.
    window.addEventListener("scroll", handlerScroll);


    // Ejecutamos una primera vez para cargar el valor actual.
    handlerScroll();

    // El return de useEffect sirve para limpiar.
    // Se ejecuta cuando este componente se desmonta.
    return () => {
      window.removeEventListener("scroll", handlerScroll);
      console.log("Limpieza: se quitó la escucha de scroll");
    };

  }, []);

  return (
    <div className="rounded-xl border border-cyan-500 bg-cyan-950/40 p-6">

      <h2 className="text-xl font-semibold text-cyan-200">
        Ejemplo 2: escucha de scroll con limpieza
      </h2>

      <p className="mt-2 text-cyan-100">
        Este componente escucha el scroll de la ventana. Cuando se desmonta,
        el return del useEffect elimina esa escucha.
      </p>

      <h3 className="mt-4 text-3xl font-bold text-cyan-300">
        Scroll actual: {Math.round(scrollY)} px
      </h3>

      <p className="mt-2 text-cyan-100">
        Probá scrollear la página. Después ocultá este componente con el botón
        de arriba y mirá la consola.
      </p>
    </div>
  );
}


export default function UseEffectPage() {
  // estados locales
  const [contador, setContador] = useState(0);
  const [mostrarDetector, setMostrarDetector] = useState(true);


useEffect(() => {
    console.log("El componente se montó");
  }, []);

  // Este useEffect se ejecuta cada vez que cambia contador.
  useEffect(() => {
    console.log("El contador cambió:", contador);
  }, [contador]);


  // area de renderizado.
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-300 underline">
            Volver al inicio
          </Link>

          <h1 className="mt-4 text-3xl font-bold">useEffect en React</h1>

          <p className="mt-3 text-slate-300">
            useEffect sirve para ejecutar código después de que React renderiza
            el componente. Por ejemplo: escuchar eventos, pedir datos, cambiar
            el título de la pestaña o limpiar algo cuando el componente se va.
          </p>
        </div>

        {/* EJEMPLO 1 CONTADOR */}
        <div className="rounded-xl border border-green-500 bg-green-950/40 p-6">
          <h2 className="text-xl font-semibold text-green-200">
            Ejemplo 1: efecto cuando cambia un estado
          </h2>

          <p className="mt-2 text-green-100">
            Solo por rendererizarse el componente para el usuario ya se ejecuta el useEffect y muestra el console.log.
            Después, cada vez que se actualiza el contador, el useEffect se vuelve a ejecutar porque tiene a contador en
            su array de dependencias.
          </p>

          <button
            onClick={() => setContador((prev) => prev + 1)}
            className="mt-4 rounded-lg bg-green-500 px-4 py-2 font-semibold text-black hover:bg-green-400"
          >
            Sumar contador
          </button>

          <h3 className="mt-4 text-3xl font-bold text-green-300">
            Contador: {contador}
          </h3>
        </div>

        {/* BOTON PARA MONTAR Y DESMONTAR */}
        <div className="rounded-xl border border-yellow-500 bg-yellow-950/40 p-6">
          <h2 className="text-xl font-semibold text-yellow-200">
            Montar y desmontar un componente
          </h2>

          <p className="mt-2 text-yellow-100">
            Este botón muestra u oculta el componente que escucha el scroll.
            Cuando lo ocultamos, se ejecuta la limpieza del useEffect.
          </p>

          <button
            onClick={() => setMostrarDetector((prev) => !prev)}
            className="mt-4 rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black hover:bg-yellow-400"
          >
            {mostrarDetector ? "Ocultar detector" : "Mostrar detector"}
          </button>
        </div>

        {mostrarDetector ? (
          <DetectorScroll />
        ) : (
          <div className="rounded-xl border border-red-500 bg-red-950/40 p-6">
            <h2 className="text-xl font-semibold text-red-200">
              El detector está desmontado
            </h2>

            <p className="mt-2 text-red-100">
              Como el componente ya no está en pantalla, React ejecutó el return
              del useEffect. Básicamente limpió la mugre antes de irse, cosa que
              muchos humanos no logran con la cocina.
            </p>
          </div>
        )}

        {/* CODIGO RESUMIDO */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Idea clave</h2>

          <p className="mt-2 text-slate-300">
            La función principal del useEffect ejecuta algo. El return limpia
            ese algo cuando el componente se desmonta.
          </p>

          <pre className="mt-4 overflow-auto rounded-lg bg-black p-4 text-sm text-green-300">
{`useEffect(() => {
  window.addEventListener("scroll", handlerScroll);

  return () => {
    window.removeEventListener("scroll", handlerScroll);
  };
}, []);`}
          </pre>
        </div>

        <div className="h-96 rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Espacio para probar scroll</h2>

          <p className="mt-2 text-slate-300">
            Este bloque alto está solo para que la página tenga scroll y el
            ejemplo se pueda probar sin invocar magia negra de CSS.
          </p>
        </div>
      </section>
    </main>
  );
}
