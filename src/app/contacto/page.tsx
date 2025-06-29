import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Mi Proyecto SEO</title>
        <meta name="description" content="Ponte en contacto con nosotros para más información." />
        <meta property="og:title" content="Contacto - Mi Proyecto SEO" />
        <meta property="og:description" content="Ponte en contacto con nosotros para más información." />
        <meta property="og:type" content="website" />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Contacto</h1>
        <p>Contáctanos para más información.</p>
      </main>
    </>
  );
}
