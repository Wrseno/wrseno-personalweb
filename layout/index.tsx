import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ReactNode} from "react";

interface LayoutProps{
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const {children, pageTitle} = props;
  return (
    <>
       <Head>
          <title>Wrseno | {pageTitle}</title>
            <meta name="author" content="Warseno Bambang Setyono"/>
              <meta name="description" content="Warseno Portofolio Website"/>
                <meta name="keywords" content="Warseno, Warseno Bambang, Warseno Bambang Setyono, wrseno, wrzeno, Warseno Skanja, Warseno SMK 1"/>
                <meta name="og:title" content="Warseno Bambang Setyono"/>
              <meta name="og:url" content="https://wrseno.my.id"/>
            <meta name="og:site_name" content="wrseno"/>
          <link rel="icon" href="/icon_wrseno.png"/>
        </Head>
        <Header/>
            <div>{children}</div>
        <Footer/>
    </>
  )
}
