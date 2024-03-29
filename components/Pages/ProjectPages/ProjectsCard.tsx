import React from "react";
import Image from "next/image";
import {BsGithub} from "react-icons/bs";
import {BsLink45Deg} from "react-icons/bs";
import Link from "next/link";

interface ProjectsDetail {
  title: string;
  desc: string;
  image: string;
  category: Array<any>;
  repo: string;
  demo: string;
}

interface ProjectCardProps {
  project: ProjectsDetail;
  layout: boolean;
}

export default function ProjectsCard(props: ProjectCardProps) {
  const {layout, project} = props;

  return (
    <>
      <div className='my-4 rounded-xl shadow-neumorphism bg-white dark:shadow-dark-neumorphism dark:bg-dark'>
        <div className={"flex flex-col md:p-4 md:px-6 rounded-xl md:flex-row"}>
          <div
            className={`pt-0 w-full md:pt-2 md:w-2/3 
                ${layout ? "order-1 md:order-2" : ""}`}
          >
            <Image
              src={`/img/${project.image}`}
              alt='projects'
              width={500}
              height={500}
              className='duration-300 hover:cursor-pointer rounded-lg'
              placeholder='blur'
              blurDataURL={`/img/${project.image}`}
              unoptimized
            />
          </div>
          <div
            className={`w-full flex flex-col text-center justify-between p-4 
                ${
                  layout ? "order-2 md:order-1 md:pr-8" : "md:pl-8"
                } md:w-3/5 md:text-left md:p-0 md:pb-2 `}
          >
            <div>
              <h2 className='text-2xl font-bold md:text-3xl'>
                {project.title}
              </h2>
              <p className='mt-2 md:text-lg'>{project.desc}</p>
              <ul className='flex mt-4 justify-center md:justify-start'>
                {project.category.map((item, index) => {
                  return (
                    <li key={index} className='mx-1 md:mx-0 md:mr-2 grid'>
                      <div
                        className={`bg-primary text-white py-2 px-4 rounded-md text-xs md:text-base`}
                      >
                        {item.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='flex justify-center mt-2 md:justify-start md:mt-0'>
              <Link href={`${project.repo}`}>
                <span className='mr-4 text-white bg-black dark:text-black dark:bg-white my-6 flex items-center py-2 px-4 w-28 rounded-md font-semibold'>
                  <BsGithub className='mr-2' /> Github
                </span>
              </Link>
              <Link href={`${project.demo}`}>
                <span className='mr-4 text-white bg-black dark:text-black dark:bg-white my-6 flex items-center py-2 px-4 w-28 rounded-md font-semibold'>
                  <BsLink45Deg className='mr-2' /> Demo
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
