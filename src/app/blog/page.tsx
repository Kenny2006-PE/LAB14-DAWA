import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Mi Proyecto SEO</title>
        <meta name="description" content="Explora los artículos más recientes en nuestro blog." />
        <meta property="og:title" content="Blog - Mi Proyecto SEO" />
        <meta property="og:description" content="Explora los artículos más recientes en nuestro blog." />
        <meta property="og:type" content="website" />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Blog</h1>
        <p>Bienvenido a nuestro blog.</p>
      </main>
    </>
  );
}
