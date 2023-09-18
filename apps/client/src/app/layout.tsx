import '@/shared/style/globals.css';
import { GlobalProvider } from '@/shared/providers';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({ weight: ['500'], subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
