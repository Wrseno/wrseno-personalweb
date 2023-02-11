import React from "react";
import { DiscussionEmbed } from "disqus-react";
import Layout from "../layout";

const GuestBook = () => {
  const disqusShortname = "wrseno";
  const disqusConfig = {
    url: "https://wrseno.my.id/guestbook",
  };

  return (
    <Layout pageTitle='Guestbook Page'>
      <main id='guestbook_page' className='pt-32'>
        <section className='container mx-auto max-w-screen-lg'>
          <div className='flex flex-wrap relative'>
            <h1 className='w-full text-3xl font-bold text-center'>Guestbook</h1>
            <div className='w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10'></div>

            <div className='w-full lg:my-24 my-14'>
              <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default GuestBook;
