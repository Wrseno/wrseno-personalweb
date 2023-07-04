import React from "react";
import Layout from "../layout";
import Image from "next/image";
import skillsJSON from "../data/skills.json";
import hobbiesJSON from "../data/hobby.json";
import {AboutCard, Hobby} from "../components";

interface AboutProps {
  skills: Array<any>;
  hobbies: Array<any>;
}

export default function About(props: AboutProps) {
  const {skills, hobbies} = props;

  return (
    <Layout pageTitle='Wrseno | About Page'>
      <main id='about_page' className='pt-32'>
        <section className='container mx-auto max-w-screen-lg'>
          <div className='flex flex-wrap relative'>
            <h1 className='w-full text-3xl font-bold text-center'>About Me</h1>
            <div className='w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10'></div>
            <div className='w-full self-center'>
              <h1 className='text-lg font-bold lg:text-xl lg:mt-24 mt-14'>
                Who Am I
              </h1>

              <AboutCard />
            </div>
          </div>

          <div className='w-full self-center my-8'>
            <h1 className='text-lg font-bold mb-4 lg:text-xl'>
              What I&#39;m Doing
            </h1>
            <ul className='grid lg:grid-cols-2 md:grid-cols-2'>
              {hobbies.map((hobby, index) => (
                <Hobby
                  key={index}
                  icon={hobby.icon}
                  title={hobby.title}
                  description={hobby.description}
                />
              ))}
            </ul>
          </div>

          <div className='w-full self-center'>
            <h1 className='text-lg font-bold lg:my-8 mt-12 lg:text-xl'>
              What I Learned
            </h1>
            <div>
              <ul className='grid lg:grid-cols-6 md:grid-cols-4 gap-8 grid-cols-3 mb-4'>
                {skills.map((skill, index) => {
                  return (
                    <li
                      key={index}
                      className='mx-auto dark:bg-slate-900 bg-slate-200 rounded-md p-2 hover:cursor-pointer hover:ease-in-out hover:duration-300'
                    >
                      <Image
                        src={`${skill.image}`}
                        width='70'
                        height='70'
                        alt='skills'
                        blurDataURL={`${skill.image}`}
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
  const hobbies = hobbiesJSON;

  return {
    props: {
      skills,
      hobbies,
    },
  };
}
