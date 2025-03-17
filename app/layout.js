import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pxc5lqp.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
