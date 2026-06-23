

//                            {      }
export default function Hijo(props: any) {
    
  return (
    <article className="rounded-2xl border border-yellow-400 bg-yellow-100 p-6 text-black shadow-xl">
      <h1 className="text-2xl font-bold">Componente Hijo</h1>

      <p className="mt-3">
        Este componente recibe datos desde el padre usando props.
      </p>

      <div className="mt-6 rounded-xl bg-white p-4">
        <h2 className="text-lg font-semibold">
          Valor heredado como string
        </h2>

        <p className="mt-2">
          props.nombreHeredado:{" "}
          <span className="font-bold text-blue-700">
            {props.nombreHeredado}
          </span>
        </p>
      </div>

      <div className="mt-6 rounded-xl bg-white p-4">
        <h2 className="text-lg font-semibold">
          Valor heredado como objeto
        </h2>

        <p className="mt-2">
          Nombre:{" "}
          <span className="font-bold text-blue-700">
            {props.personaHeredada.nombre}
          </span>
        </p>

        <p>
          Apellido:{" "}
          <span className="font-bold text-blue-700">
            {props.personaHeredada.apellido}
          </span>
        </p>

        <p>
          Edad:{" "}
          <span className="font-bold text-blue-700">
            {props.personaHeredada.edad}
          </span>
        </p>
      </div>
    </article>
  );
}