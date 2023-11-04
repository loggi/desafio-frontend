export const metadata = {
  title: 'Loggi - Rasteador de pacotes',
  description: 'A powerful package tracking application by Loggi.',
  keywords: 'Loggi, package tracking, delivery, logistics',
  author: 'Amanda Albuquerque',
};

const MetaTags = ({ title, description, keywords, author }) => (
  <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
  </>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <MetaTags {...metadata} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
