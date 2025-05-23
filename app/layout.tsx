import './globals.css'
export const metadata = {
  title: 'MemoRegen',
  description: 'Aidez les aînés à entretenir leur mémoire avec l’IA.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#facc15" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
