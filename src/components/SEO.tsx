export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export const SEO = ({
  description = "Inteligência Territorial e Hídrica para o Oeste da Bahia",
  keywords = "OBahia, Land use change, Water resources",
  title = "OBahia",
  ogImage = "images/meta.png",
  ogUrl = "images/meta.png",
  twitterImage = "",
}: SEOProps) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <link rel="icon" href="images/favicon.ico" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="images/safari-pinned-tab.svg"
        color="#181b23"
      />

      <meta name="title" content="OBahia" />

      <meta
        name="author"
        content="Developed by Fernando Martins Pimenta -
            fernando.m.pimenta@gmail.com"
      />

      <meta
        name="description"
        content="Geoprocessing and Remote Sensing for Agriculture"
      />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="OBahia" />
      <meta property="og:url" content={`${ogUrl}`} />
      <meta property="og:type" content={"website"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
