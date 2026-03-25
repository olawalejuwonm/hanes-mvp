import '../src/globals.css';
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";

export const metadata = {
  title: 'HANES - Welsh Heritage Through Augmented Reality',
  description: 'Step into the shoes of legendary Welsh icons. Explore castles, battlefields, and sacred sites through immersive AR.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
