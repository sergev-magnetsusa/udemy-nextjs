import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Next.js Caching',
  description: 'Learn how Next.js caching works',
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
    <Header/>
    <main>{children}</main>
    </body>
    </html>
  );
};

export default RootLayout;
