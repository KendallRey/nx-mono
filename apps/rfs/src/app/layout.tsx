import Providers from 'apps/rfs/services/Providers';
import './global.css';

export const metadata = {
  title: 'RFS - Homepage',
  description: 'RFS',
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
