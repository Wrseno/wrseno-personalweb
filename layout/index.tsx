import Head from "next/head";
import Header from "../components/Header";
import {ReactNode} from "react";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const {children, pageTitle} = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='author' content='Warseno Bambang Setyono' />
        <meta name='description' content='Warseno Personal Website' />
        <meta
          name='keywords'
          content='Warseno, Warseno Bambang, Warseno Bambang Setyono, wrseno, wrzeno'
        />
        <meta
          name='og:title'
          content='Warseno Bambang Setyono Personal Website'
        />
        <meta name='og:url' content='https://wrseno.my.id' />
        <meta name='og:site_name' content='wrseno' />
        <link rel='icon' href='/wrseno_icon2.png' />
      </Head>
      <Header />
      <div>{children}</div>
    </>
  );
}
