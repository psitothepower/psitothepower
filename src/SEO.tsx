import { Helmet } from "react-helmet"

interface SeoParams {
  title: string | undefined
  url: string | undefined
  thumbnail: string | undefined
  description: string | undefined
  keywords: string | undefined
}

function SEO(p: SeoParams) {
  return (
    <Helmet>
      <title>{p.title}</title>

      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content={p.description} />
      <meta name="keywords" content={p.keywords} />

      <link rel="canonical" href={p.url} />
      <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      <link rel="apple-touch-icon" type="image/png" href="logo192.png" />
      <link rel="manifest" href="manifest.json" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={p.title} />
      <meta property="og:description" content={p.description} />
      <meta property="og:image" content={p.thumbnail} />
      <meta property="og:url" content={p.url} />

      <meta property="twitter:url" content={p.url} />
      <meta property="twitter:domain" content="psitothepower.com" />
      <meta name="twitter:card" content={p.thumbnail} />
      <meta name="twitter:title" content={p.title} />
      <meta name="twitter:description" content={p.description} />
      <meta name="twitter:image" content={p.thumbnail} />
    </Helmet>
  );
}

export default SEO;
