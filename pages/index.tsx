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
      <main id='home_page' className='md:pt-32 pt-24'>
        <section className='container mx-auto max-w-screen-lg'>
          <div className='flex flex-wrap'>
            <PersonalInformation />
            <PersonalImage />

            <div className='relative'>
              <ul className='absolute right-6 top-20 lg:top-24'>
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
