import Link from "next/link";
import Hijo2 from "./hijo2/hijo2";

export default function Padre2() {


    return (
        <main className="min-h-screen bg-neutral-950 p-8 text-white">
            <section className="mx-auto max-w-4xl space-y-8">
                <div>
                    <Link
                        href="/"
                        className="text-sm text-orange-300 underline-offset-4 hover:underline"
                    >
                        Volver al inicio
                    </Link>

                    <h1 className="mt-6 text-4xl font-bold text-orange-200">
                        Herencia 2.0: children
                    </h1>

                    <p className="mt-3 text-neutral-300">
                        En este ejemplo, el componente padre renderiza al componente hijo y le
                        pasa contenido entre la etiqueta de apertura y la etiqueta de cierre.
                    </p>
                </div>

                <section className="rounded-xl border border-orange-500 bg-orange-950/40 p-5">
                    <h2 className="text-2xl font-semibold text-orange-200">
                        Componente padre
                    </h2>

                    <p className="mt-3 text-orange-100">
                        Este texto pertenece directamente al padre.
                    </p>

                    <div className="mt-5 rounded-lg border border-neutral-700 bg-neutral-900 p-4">
                        <p className="mb-3 text-sm font-semibold text-neutral-300">
                            El padre está renderizando esto:
                        </p>

                        <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-4 text-sm text-neutral-200">
                            {`<Hijo2>
                            <p>Este pedacito de JSX nace en el padre.</p>
                            <button>Botón creado en el padre</button>
                            </Hijo2>`}
                        </pre>
                    </div>
                </section>

                {/* Renderizamos al hijo y le pasamos contenido entre la etiqueta de apertura y la etiqueta de cierre */}
                <Hijo2>
                    <p className="text-lg text-neutral-100">
                        Este pedacito de JSX nace en el padre.
                    </p>

                    <button className="mt-4 rounded-lg bg-orange-500 px-4 py-2 font-semibold text-neutral-950 transition hover:bg-orange-400">
                        Botón creado en el padre
                    </button>
                </Hijo2>

            </section>
        </main>
    );
}