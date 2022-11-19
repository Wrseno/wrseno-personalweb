import Layout from "../layout";
import Image from "next/image";
import skillsJSON from "../data/skills.json";
import AboutCard  from "../components/AboutCard";

interface AboutProps {
  skills: Array<any>;
}

export default function About(props: AboutProps) {

  const {skills} = props;

  return (
    <div>
      <Layout pageTitle="About Page">
        <main id="about_page" className="pt-32">
          <section className="container mx-auto">
            
            <AboutCard/>

              <div className="w-full self-center px-8 ">
                <h1 className="text-lg font-bold lg:my-8 mt-12 lg:text-xl">What I Learned</h1>
                <div>
                      <ul className="grid lg:grid-cols-4 md:grid-cols-4 lg:gap-8 grid-cols-2 lg:mb-4">
                      {
                        skills.map((skill, index) => {
                          return (
                            <li key={index} className="mx-auto dark:hover:bg-slate-900 hover:bg-slate-300 hover:rounded-md lg:p-12 p-6 hover:cursor-pointer hover:ease-in-out hover:duration-300">
                              <Image 
                                src={`/img/${skill.image}`}
                                  width="70"
                                    height="70"
                                    alt="skills"
                                  placeholder="blur"
                                blurDataURL={`/img/${skill.image}`}
                              />
                              <p className="text-center font-semibold">{skill.title}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                </div>
              </div>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const skills = skillsJSON;

  return {
    props: {
      skills
    },
  };
};
