import Navbar from './_nav/navbar';
import './globals.css';

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
          <Navbar user={{}}/>
        </Suspense>
        {children}
      </body>
    </html>
  );
}
