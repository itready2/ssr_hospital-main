import "./globals.css";

export function generateStaticParams() {
  const locales = ['en', 'th'];
  return locales.map(locale => ({ locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <head>
        <link rel="icon" href="/minilogo.png" />
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}