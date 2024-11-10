import Providers from 'apps/portfolio/services/Providers';
import './global.css';
import { FixedNavigation } from '@nx-next-js-micro/ui';
import { ILayout, IRoute } from '@nx-next-js-micro/components';

export const metadata = {
  title: 'Kendall Rey',
  description: 'Hello there, KR here.',
};

const ROUTES: IRoute[] = [
  { href: '/', name: 'Home' },
  { href: '/project', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
];

const RootLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-neutral-900">
        <FixedNavigation
          routes={ROUTES}
          linkClassName="border-b-2 border-transparent p-1"
          activeClassName="border-b-2 p-1 border-blue-500 text-white"
          className="max-w-[1200px]"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
