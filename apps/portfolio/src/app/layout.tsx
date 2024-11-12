import Providers from 'apps/portfolio/services/Providers';
import './global.css';
import { ILayout } from '@nx-next-js-micro/components';
import { ROUTES } from 'apps/portfolio/constants/Routes';
import { FixedNavigation } from '@nx-next-js-micro/ui';

export const metadata = {
  title: 'Kendall Rey',
  description: 'Hello there, KR here.',
};

const RootLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-neutral-900">
        <FixedNavigation
          routes={ROUTES}
          linkClassName="border-b-2 border-transparent p-1"
          activeClassName="border-b-2 p-1 border-blue-500 text-white"
          className="max-w-[1200px] justify-center"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
