import './globals.css';

export const metadata = {
  title: 'Площадка жителей комплекса - Сити-Квартал Октябрьский',
  description: 'Портал, площадка жителей комплекса Сити-Квартал Октябрьский',
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