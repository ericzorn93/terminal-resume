import { type ReactNode } from 'react';
import './styles/global.css';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
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
