"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation"; // Traemos el Hook o, la HERRAMIENTA para esto.

function ProductList() {
  //                   {               }
  const searchParams = useSearchParams(); // Como siempre una ejecución del hook como quien calienta la pizza antes de comer.
//      shoes
  const category = searchParams.get("category"); // Hacer .get me permite rescatar el valor de una prop especifica de un objeto.
                                                 // Si esa prop "category" no existe o no tiene nada, da null.

  const products = [                                                // Por acá mokapeamos una lista de productos.
    { id: 1, name: "Zapatillas para correr", category: "shoes" },
    { id: 2, name: "Botines de fútbol", category: "shoes" },
    { id: 3, name: "Camiseta deportiva", category: "clothing" },
    { id: 4, name: "Campera liviana", category: "clothing" },
    { id: 5, name: "Mochila urbana", category: "accessories" },
  ];

  const filteredProducts = category                                 // Si category tiene valor, filtro los productos por esa categoria.
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <section className="rounded-xl border border-teal-500 bg-teal-950/40 p-5">
      <h2 className="text-2xl font-semibold text-teal-200">
        Lista de productos
      </h2>

      <p className="mt-3 text-teal-100">
        Categoría leída desde la URL:
      </p>

      <p className="mt-2 rounded-lg border border-teal-400 bg-neutral-950 p-3 font-mono text-sm text-teal-200">
        category = {category ? `"${category}"` : "null"}
      </p>

      {/* ACÁ TENEMOS LA MUESTRA DE LA LISTA DE PRODCUTOS YA FILTRADA. SI NO HAY FILTRO, SE MUESTRAN TODOS. */}
      <ul className="mt-5 grid gap-3"> 
        {
          filteredProducts.map((product) => (
            <li
              key={product.id}
              className="rounded-lg border border-neutral-700 bg-neutral-900 p-4"
            >
              <p className="font-semibold text-neutral-100">
                {product.name}
              </p>

              <p className="mt-1 text-sm text-neutral-400">
                Categoría: {product.category}
              </p>
            </li>
          ))
        }
      </ul>
      {/* SI DESPUES DE FILTRAR NO QUEDÓ NINGUN PRODUCTO, MOSTRAMOS UN MENSAJE DE "NO HAY PRODUCTOS PARA ESA CATEGORÍA". */}
      {filteredProducts.length === 0 && (
        <p className="mt-5 rounded-lg border border-red-500 bg-red-950/40 p-4 text-red-100">
          No hay productos para esa categoría.
        </p>
      )}
    </section>
  );
}

export default function SearchParamsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <Link
            href="/"
            className="text-sm text-teal-300 underline-offset-4 hover:underline"
          >
            Volver al inicio
          </Link>

          <h1 className="mt-6 text-4xl font-bold text-teal-200">
            Search Params
          </h1>

          <p className="mt-3 text-neutral-300">
            Este ejemplo muestra cómo leer datos desde la URL usando
            useSearchParams. El valor de category se usa para filtrar productos.
          </p>
        </div>

        <section className="rounded-xl border border-neutral-700 bg-neutral-900 p-5">
          <h2 className="text-2xl font-semibold text-neutral-100">
            Cambiar la URL desde la navegación
          </h2>

          <p className="mt-3 text-neutral-300">
            Cada botón navega a la misma página, pero cambiando el query param
            category en la URL.
          </p>


          {/* ACA NAVEGAMOS A LA MISMA PAGINA PERO CON DISTINTOS PARAMETROS EN LA URL: */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/search-params"
              className="rounded-lg border border-neutral-600 bg-neutral-950 p-4 text-center text-neutral-200 transition hover:bg-neutral-800"
            >
              Todos
            </Link>

            <Link
              href="/search-params?category=shoes"
              className="rounded-lg border border-teal-500 bg-teal-950/40 p-4 text-center text-teal-100 transition hover:bg-teal-900"
            >
              Shoes
            </Link>

            <Link
              href="/search-params?category=clothing"
              className="rounded-lg border border-blue-500 bg-blue-950/40 p-4 text-center text-blue-100 transition hover:bg-blue-900"
            >
              Clothing
            </Link>

            <Link
              href="/search-params?category=accessories"
              className="rounded-lg border border-purple-500 bg-purple-950/40 p-4 text-center text-purple-100 transition hover:bg-purple-900"
            >
              Accessories
            </Link>
          </div>
        </section>

        <section className="rounded-xl border border-neutral-700 bg-neutral-900 p-5">
          <h2 className="text-2xl font-semibold text-neutral-100">
            Código clave del ejemplo
          </h2>

          <pre className="mt-5 overflow-x-auto rounded-lg bg-neutral-950 p-4 text-sm text-neutral-200">
            {`const searchParams = useSearchParams();

            const category = searchParams.get("category");

            const filteredProducts = category
            ? products.filter((product) => product.category === category)
            : products;`}
          </pre>
        </section>

        <Suspense
          fallback={
            <p className="rounded-xl border border-neutral-700 bg-neutral-900 p-5 text-neutral-300">
              Cargando productos...
            </p>
          }
        >
          <ProductList />
        </Suspense>
      </section>
    </main>
  );
}