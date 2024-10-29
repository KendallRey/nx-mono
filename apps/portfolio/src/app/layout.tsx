import Providers from 'apps/portfolio/services/Providers';
import './global.css';

export const metadata = {
  title: 'Kendall Rey',
  description: 'Hello there, KR here.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
