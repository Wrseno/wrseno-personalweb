import Layout from "../layout";
import socialsJSON from "../data/socials.json";
import hobbiesJSON from "../data/hobby.json";
import {PersonalInformation, PersonalImage, Social} from "../components";

interface HomeProps {
  hobbies: Array<any>;
}

const Home = (props: HomeProps) => {
  const {hobbies} = props;
  console.log(hobbies);

  return (
    <Layout pageTitle='Warseno Bambang Setyono Personal Website'>
      <main id='home_page' className='md:pt-32 pt-24'>
        <section className='container mx-auto max-w-screen-lg'>
          <div className='flex flex-wrap'>
            <PersonalInformation
              greeting='Hello,'
              nickname='I&#39;m Seno.'
              fullname='My full name is Warseno Bambang Setyono.'
              profession='I&#39;m a Student, Frontend Developer and Content Creator.'
              welcome='Welcome to my personal website, where you can find my achievements,
            projects, and more.'
            />
            <PersonalImage />

            <div className='relative'>
              <ul className='absolute right-6 top-20 lg:top-24'>
                {/* {socials.map((item, index) => {
                  return <Social key={index} social={item} />;
                })} */}
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
  const hobbies = hobbiesJSON;

  return {
    props: {
      hobbies,
    },
  };
}
