import { type ReactNode } from 'react';
import './styles/global.css';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
      </head>

      <body>
        <main className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base">
          <div className="bg-light-background dark:bg-dark-background w-full h-full p-2">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default AppLayout;
