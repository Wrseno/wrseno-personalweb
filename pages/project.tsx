import React from "react";
import Layout from "../layout";
import projectsJSON from "../data/projects.json";
import ProjectsCard from "../components/ProjectsCard";

interface ProjectProps {
  projects: Array<any>;
}

export default function Projects(props: ProjectProps) {
  const { projects } = props;

  return (
    <Layout pageTitle='Wrseno | Projects Page'>
      <main id='project_page' className='pt-32'>
        <section className='container mx-auto max-w-screen-lg'>
          <div className='flex flex-wrap relative'>
            <h1 className='w-full text-3xl font-bold text-center'>Projects</h1>

            <div className='w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10'></div>
            <div className='flex flex-col lg:my-24 my-14'>
              {projects.map((item, index) => {
                if (index % 2 == 0) {
                  return (
                    <ProjectsCard key={index} project={item} layout={false} />
                  );
                } else {
                  return (
                    <ProjectsCard key={index} project={item} layout={true} />
                  );
                }
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = projectsJSON;

  return {
    props: {
      projects,
    },
  };
}
