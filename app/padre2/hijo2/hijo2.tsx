import React from "react";

type Hijo2Props = {
  children: React.ReactNode;
};
//                              props
export default function Hijo2({ children }: Hijo2Props) {
 
  return (
    <section className="rounded-xl border border-orange-400 bg-neutral-900 p-5">
      <h2 className="text-2xl font-semibold text-orange-200">
        Componente hijo
      </h2>

      <p className="mt-3 text-neutral-300">
        Este componente hijo no inventa su contenido interno. Lo recibe desde el
        padre usando la prop especial children.
      </p>

      <div className="mt-5 rounded-lg border border-orange-500 bg-orange-950/40 p-5">
        <p className="mb-3 text-sm font-semibold text-orange-200">
          Contenido recibido por children:
        </p>

        {children}
      </div>
    </section>
  );
}