"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function VentaDetallePage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const products = [
    {
      id: 1,
      name: "Zapatillas para correr",
      category: "shoes",
      price: 85000,
      description: "Zapatillas livianas para correr o caminar.",
    },
    {
      id: 2,
      name: "Camiseta deportiva",
      category: "clothing",
      price: 32000,
      description: "Camiseta cómoda para entrenar o usar todos los días.",
    },
    {
      id: 3,
      name: "Mochila urbana",
      category: "accessories",
      price: 54000,
      description: "Mochila resistente para notebook, libros y cosas varias.",
    },
    {
      id: 4,
      name: "Botines de fútbol",
      category: "shoes",
      price: 99000,
      description: "Botines para cancha de césped sintético.",
    },
  ];
//                                                  "1" ===         "1"
  const product = products.find((product) => String(product.id) === id);

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <Link
            href="/ventas"
            className="text-sm text-indigo-300 underline-offset-4 hover:underline"
          >
            Volver a ventas
          </Link>

          <h1 className="mt-6 text-4xl font-bold text-indigo-200">
            Detalle de producto
          </h1>

          <p className="mt-3 text-neutral-300">
            Esta página lee el id directamente desde la URL usando useParams.
          </p>
        </div>

        <section className="rounded-xl border border-indigo-500 bg-indigo-950/40 p-5">
          <h2 className="text-2xl font-semibold text-indigo-200">
            Parámetro rescatado desde la URL
          </h2>

          <p className="mt-3 text-indigo-100">
            El valor que vino en la ruta es:
          </p>

          <p className="mt-4 rounded-lg border border-indigo-400 bg-neutral-950 p-4 font-mono text-lg text-indigo-200">
            id = "{id}"
          </p>

          <p className="mt-4 text-sm text-indigo-100">
            Si la URL es /ventas/3, entonces useParams rescata id = "3".
          </p>
        </section>

        {
        product ? (
          <section className="rounded-xl border border-green-500 bg-green-950/40 p-5">
            <h2 className="text-2xl font-semibold text-green-200">
              Producto encontrado
            </h2>

            <div className="mt-5 rounded-lg border border-neutral-700 bg-neutral-900 p-5">
              <p className="text-sm font-semibold text-green-200">
                ID {product.id}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-neutral-100">
                {product.name}
              </h3>

              <p className="mt-2 text-neutral-300">
                {product.description}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <p className="rounded-lg border border-neutral-700 bg-neutral-950 p-3 text-neutral-200">
                  Categoría: {product.category}
                </p>

                <p className="rounded-lg border border-neutral-700 bg-neutral-950 p-3 text-neutral-200">
                  Precio: ${product.price}
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-xl border border-red-500 bg-red-950/40 p-5">
            <h2 className="text-2xl font-semibold text-red-200">
              Producto no encontrado
            </h2>

            <p className="mt-3 text-red-100">
              No existe un producto con el id "{id}". Probá con 1, 2, 3 o 4.
            </p>
          </section>
        )
        }

        <section className="rounded-xl border border-neutral-700 bg-neutral-900 p-5">
          <h2 className="text-2xl font-semibold text-neutral-100">
            Código clave de esta página
          </h2>

          <pre className="mt-5 overflow-x-auto rounded-lg bg-neutral-950 p-4 text-sm text-neutral-200">
{`const params = useParams<{ id: string }>();

const id = params.id;

const product = products.find(
  (product) => String(product.id) === id
);`}
          </pre>
        </section>
      </section>
    </main>
  );
}