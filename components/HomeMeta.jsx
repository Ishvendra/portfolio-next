import Head from 'next/head';

const HomeMeta = () => {
  return (
    <Head>
      <title>Ishvendra | Frontend and Fullstack.in Developer Portfolio</title>
      <meta
        name='description'
        content='Ishvendra Singh – Frontend and Fullstack.in Developer portfolio. From intuitive interfaces to scalable architectures, showcasing projects, skills, and work experience.'
      />
      <meta
        name='keywords'
        content='Ishvendra, Frontend and Fullstack.in Developer, React, Next.js, Portfolio, Software Developer, Frontend, Backend, Projects, Skills'
      />
      <meta name='robots' content='index, follow' />
      <link rel='canonical' href='https://ishvendra.in/' />

      <meta
        property='og:title'
        content='Ishvendra | Frontend and Fullstack.in Developer Portfolio'
      />
      <meta
        property='og:description'
        content='Ishvendra Singh – Frontend and Fullstack.in Developer. Check out my projects, skills, and work experience.'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://ishvendra.in/' />
      <meta
        property='og:image'
        content='https://ishvendra.in/assets/common/og-image.jpg'
      />

      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content='Ishvendra | Frontend and Fullstack.in Developer Portfolio'
      />
      <meta
        name='twitter:description'
        content='Ishvendra Singh – Frontend and Fullstack.in Developer. Check out my projects, skills, and work experience.'
      />
      <meta
        name='twitter:image'
        content='https://ishvendra.in/assets/common/og-image.jpg'
      />

      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content='#520000' />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Ishvendra Singh',
            url: 'https://ishvendra.in/',
            image: 'https://ishvendra.in/assets/common/og-image.jpg',
            jobTitle: 'Frontend & Fullstack Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Self-employed',
            },
            sameAs: [
              'https://www.linkedin.com/in/your-linkedin',
              'https://github.com/your-github',
              'https://twitter.com/your-twitter',
            ],
            description:
              'Ishvendra builds clean, intuitive interfaces and scalable web architectures. Passionate about coding, astronomy, and self-growth.',
          }),
        }}
      />
    </Head>
  );
};

export default HomeMeta;
