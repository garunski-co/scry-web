import './globals.css';

import Nav from './_nav/nav';
import { Suspense } from 'react';

export const metadata = {
  title: 'Scry',
  description:
    'Personality Survey'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
