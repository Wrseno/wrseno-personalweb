import Layout from "../layout";
import Image from "next/image";
import skillsJSON from "../data/skills.json";
import AboutCard from "../components/Pages/AboutPages/AboutCard";

interface AboutProps {
  skills: Array<any>;
}

export default function About(props: AboutProps) {
  const {skills} = props;

  return (
    <Layout pageTitle='Wrseno | About Page'>
      <main id='about_page' className='pt-32'>
        <section className='container mx-auto max-w-screen-lg'>
          <AboutCard />

          <div className='w-full self-center'>
            <h1 className='text-lg font-bold lg:my-8 mt-12 lg:text-xl'>
              What I Learned
            </h1>
            <div>
              <ul className='grid lg:grid-cols-6 md:grid-cols-4 lg:gap-8 grid-cols-3 lg:mb-4'>
                {skills.map((skill, index) => {
                  return (
                    <li
                      key={index}
                      className='mx-auto dark:bg-slate-900 bg-slate-200 hover:rounded-md p-8 hover:cursor-pointer hover:ease-in-out hover:duration-300'
                    >
                      <Image
                        src={`${skill.image}`}
                        width='70'
                        height='70'
                        alt='skills'
                        placeholder='blur'
                        blurDataURL={`${skill.image}`}
                        unoptimized
                        className='mx-auto'
                      />
                      <p className='text-center font-semibold'>{skill.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const skills = skillsJSON;

  return {
    props: {
      skills,
    },
  };
}
