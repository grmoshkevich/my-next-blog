import './globals.css';
import { Providers } from './providers'; // Adjust path
import { ReactNode } from 'react'; // Import ReactNode for typing

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log('🦋', );
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}