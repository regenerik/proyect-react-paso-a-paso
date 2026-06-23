## Pequeña guia de como se creó este proyecto React-Next

1 - Creá una carpeta "mi-proyecto" donde quieras

2 - Abri esa carpeta con VsCode.

3 - Abri la terminal con control + ñ

Primero chequeá Node, porque Next pide  **Node.js 20.9 o superior** . La documentación oficial lo marca como requisito mínimo, porque aparentemente ahora hasta hacer un “hola mundo” requiere pasaporte biométrico.

<pre class="overflow-visible! px-0!" data-start="370" data-end="396"><div class="relative w-full mt-4 mb-1"><div class=""><div class="contents"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="relative h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class=""><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ10">node</span><span></span><span class="ͼ12">-v</span><br/><span class="ͼ10">npm</span><span></span><span class="ͼ12">-v</span></code></pre></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></div></div></div></pre>

## Opción recomendada: instalar Next dentro de esa carpeta actual

Estando parado dentro de "mi-proyecto", corré:

<pre class="overflow-visible! px-0!" data-start="517" data-end="610"><div class="relative w-full mt-4 mb-1"><div class=""><div class="contents"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="relative h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class=""><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>npx create-next-app@latest . </span><span class="ͼ12">--ts</span><span></span><span class="ͼ12">--eslint</span><span></span><span class="ͼ12">--tailwind</span><span></span><span class="ͼ12">--app</span><span></span><span class="ͼ12">--turbopack</span><span></span><span class="ͼ12">--use-npm</span></code></pre></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></div></div></div></pre>

El `.` significa:

<pre class="overflow-visible! px-0!" data-start="631" data-end="677"><div class="relative w-full mt-4 mb-1"><div class=""><div class="contents"><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>instalá el proyecto en ESTA carpeta</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></div></pre>

Next oficialmente recomienda crear proyectos con `create-next-app`, y esa CLI permite elegir TypeScript, Tailwind, App Router, Turbopack y npm con flags.

Si te pregunta algo tipo:

<pre class="overflow-visible! px-0!" data-start="899" data-end="928"><div class="relative w-full mt-4 mb-1"><div class=""><div class="contents"><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>Ok to proceed? (y)</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></div></pre>

poné:

<pre class="overflow-visible! px-0!" data-start="937" data-end="950"><div class="relative w-full mt-4 mb-1"><div class=""><div class="contents"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="relative h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class=""><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>y</span></code></pre></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></div></div></div></pre>

- Después levantás el proyecto:

  npm run dev
- Y abrís en el navegador:

  http://localhost:3000

## Si te tira error porque la carpeta no está vacía

Si `mi-proyecto` ya tenia archivos previos y Next se pone exquisito, hacé esto:

    cd ..

    npx create-next-app@latest mi-proyecto-nuevo**--ts**--eslint**--tailwind**--app**--turbopack**--use-npm

    cd /mi-proyecto-nuevo

* npm* run dev

Los archivos clave para mirar son estos:

    app/layout.tsx   ← reemplaza la idea del index.html
	app/page.tsx     ← página principal, la ruta "/"
	app/globals.css  ← estilos globales
	package.json     ← scripts y dependencias
	public/          ← imágenes y archivos públicos

En App/page.tsx reemplazamos el contenido ( el mismo corresponde a la pagina principal visitada ).

---

Te parece horrible el botón de Next mientras codeas a la izquierda abajo ?
Sacalo en next.config.ts -  En el objeto nextConfig agregale el siguiente par "prop"+"value" dentro :
devIndicators: **false**,

Y listo ! ( chau botón )
