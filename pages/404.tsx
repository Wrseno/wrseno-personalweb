import React from "react";
import Layout from "../layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        },3000 );
    }, []);

  return (
    <Layout pageTitle="404 Not Found">
        <main className="container">
            <h1 className="my-64 text-center text-2xl font-semibold">404 | This page could not be found. <br />
                <span className="text-base">You will be redirected to the homepage in 3 seconds.</span>
            </h1>
        </main>
    </Layout>
  )
}
