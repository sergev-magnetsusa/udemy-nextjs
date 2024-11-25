import './globals.css';
import Header from '@/components/ui/Header';

export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
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