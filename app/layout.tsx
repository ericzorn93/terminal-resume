import { type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '../styles/global.scss';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const now = new Date();
  const year = now.getFullYear();
  const titleText = `Eric Zorn - Senior Software Engineer | Resume ${year}`;

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Eric Zorn - Senior Full-Stack Software Engineer Resume"
          />
          <title>{titleText}</title>
        </head>
        <body>
          <main className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base">
            <div className="bg-light-background dark:bg-dark-background w-full h-screen p-2">
              {children}
            </div>
          </main>
        </body>
      </html>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default AppLayout;
