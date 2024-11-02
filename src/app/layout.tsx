import { Metadata } from 'next';
import './globals.css';

export const metadata : Metadata = {
  title: 'Площадка жителей комплекса - Сити-Квартал Октябрьский',
  description: 'Портал, площадка жителей комплекса Сити-Квартал Октябрьский',
  icons: {
    icon: '/assets/images/favicon.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
