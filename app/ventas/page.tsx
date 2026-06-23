"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VentasPage() {
  const router = useRouter();
  const [productId, setProductId] = useState("1");

  const products = [
    { id: 1, name: "Zapatillas para correr", price: 85000 },
    { id: 2, name: "Camiseta deportiva", price: 32000 },
    { id: 3, name: "Mochila urbana", price: 54000 },
    { id: 4, name: "Botines de fútbol", price: 99000 },
  ];

  function navegarAlProducto() {
    if (!productId) return;
    router.push(`/ventas/${productId}`);
  }

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <Link
            href="/"
            className="text-sm text-indigo-300 underline-offset-4 hover:underline"
          >
            Volver al inicio
          </Link>

          <h1 className="mt-6 text-4xl font-bold text-indigo-200">
            Dynamic Params: useParams
          </h1>

          <p className="mt-3 text-neutral-300">
            En este ejemplo escribimos un id, navegamos a una URL dinámica y
            después otra página rescata ese id usando useParams.
          </p>
        </div>

        <section className="rounded-xl border border-indigo-500 bg-indigo-950/40 p-5">
          <h2 className="text-2xl font-semibold text-indigo-200">
            Buscar producto por id
          </h2>

          <p className="mt-3 text-indigo-100">
            Probá con los ids 1, 2, 3 o 4.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto]">
            <input
              type="number"
              min="1"
              value={productId}
              onChange={(event) => setProductId(event.target.value)}
              className="rounded-lg border border-indigo-400 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-indigo-200"
              placeholder="Ingresá un id"
            />

            <button
              type="button"
              onClick={navegarAlProducto}
              className="rounded-lg bg-indigo-500 px-5 py-3 font-semibold text-neutral-950 transition hover:bg-indigo-400"
            >
              Ver producto
            </button>
          </div>

          <p className="mt-4 rounded-lg border border-indigo-400 bg-neutral-950 p-3 font-mono text-sm text-indigo-200">
            ID actual en estado: {productId}
          </p>
        </section>

        <section className="rounded-xl border border-neutral-700 bg-neutral-900 p-5">
          <h2 className="text-2xl font-semibold text-neutral-100">
            Productos disponibles
          </h2>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {products.map((product) => (
              <li
                key={product.id}
                className="rounded-lg border border-neutral-700 bg-neutral-950 p-4"
              >
                <p className="font-semibold text-indigo-200">
                  ID {product.id}
                </p>

                <p className="mt-1 text-neutral-100">
                  {product.name}
                </p>

                <p className="mt-1 text-sm text-neutral-400">
                  ${product.price}
                </p>

                <Link
                  href={`/ventas/${product.id}`}
                  className="mt-3 inline-block text-sm text-indigo-300 underline-offset-4 hover:underline"
                >
                  Ver detalle
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-neutral-700 bg-neutral-900 p-5">
          <h2 className="text-2xl font-semibold text-neutral-100">
            Código clave de esta página
          </h2>

          <pre className="mt-5 overflow-x-auto rounded-lg bg-neutral-950 p-4 text-sm text-neutral-200">
{`const [productId, setProductId] = useState("1");
const router = useRouter();

function navegarAlProducto() {
  router.push(\`/ventas/\${productId}\`);
}`}
          </pre>
        </section>
      </section>
    </main>
  );
}