export default function LocaleLayout({ children, params: { locale } }: any) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
