import { setRequestLocale } from 'next-intl/server';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{props.children}</>;
}
