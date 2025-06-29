'use client'; // Necesario si el componente tiene interactividad

import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicComponent = dynamic(() => import("../app/components/LargeComponent"), {
  ssr: false,
  loading: () => <p>Cargando componente...</p>, // opcional pero recomendado
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - Mi Proyecto SEO</title>
        <meta name="description" content="Bienvenido a la página de inicio de Mi Proyecto SEO." />
        <meta property="og:title" content="Inicio - Mi Proyecto SEO" />
        <meta property="og:description" content="Bienvenido a la página de inicio de Mi Proyecto SEO." />
        <meta property="og:type" content="website" />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Bienvenido</h1>
        <DynamicComponent />

        <h2 style={{ fontFamily: "sans-serif", fontSize: "24px", fontWeight: "bold" }}>
          Texto con <code>sans-serif</code> (sin Inter)
        </h2>

        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Texto global con fuente Inter (debería verse distinta)
        </h2>

        <h2 style={{ fontFamily: "serif", fontSize: "24px", fontWeight: "bold" }}>
          Texto con <code>serif</code> (fuente con serifas)
        </h2>
      </main>
    </>
  );
}