import React from "react";
import Layout from "../layout";
import socialsJSON from "../data/socials.json";
import {PersonalInformation, PersonalImage, Social} from "../components";

interface HomeProps {
  socials: Array<any>;
}

const Home = (props: HomeProps) => {
  const {socials} = props;

  return (
    <Layout pageTitle='Warseno Bambang Setyono Personal Website'>
      <main
        id='home_page'
        className='flex justify-center items-center h-vh-screen'
      >
        <section className='container mx-auto max-w-screen-lg'>
          <div className='flex flex-wrap'>
            <PersonalImage />
            <PersonalInformation
              greeting='Hello,'
              nickname='I&#39;m Seno.'
              fullname='My full name is Warseno Bambang Setyono. '
              profession='I&#39;m a Student, Junior Web Developer and Content Creator. '
              welcome='Welcome to my personal website, where you can find my achievements, projects, and more.'
            />

            <div className='relative'>
              <ul className='absolute right-6 top-20 lg:top-24 shadow-md p-2 backdrop-blur-sm bg-opacity-50'>
                {socials.map((item, index) => {
                  return <Social key={index} social={item} />;
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const socials = socialsJSON;

  return {
    props: {
      socials,
    },
  };
}
