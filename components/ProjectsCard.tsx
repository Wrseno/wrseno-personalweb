import Image from 'next/image';
import {BsGithub} from 'react-icons/bs';
import {BsLink45Deg} from 'react-icons/bs';
import Link from 'next/link';

interface ProjectsDetail {
    title: string;
    desc: string;
    image: string;
    category: Array<any>;
    repo: string;
    demo: string;
}

interface ProjectCardProps {
    project : ProjectsDetail;
    layout: boolean;
}

export default function ProjectsCard (props: ProjectCardProps) {

    const {layout, project} = props;

  return (
    <>
    <div className="flex flex-col mb-4 bg-opacity-0 shadow-lg rounded-xl md:flex-row md:mb-8  md:rounded-none md:shadow-none">
        <div className={`drop-shadow-3xl pt-0 w-full md:pt-2 md:w-2/5 
        ${ layout ? 'order-1 md:order-2' : '' }`}>
            <Image 
                src={`/img/${project.image}`}
                alt="projects" 
                width="500px"
                height="270px"
                className='rounded-lg'
                placeholder="blur"
                blurDataURL={`/img/${project.image}`}
            />
        </div>
        <div className={`w-full flex flex-col text-center justofy-between p-4 
        ${ layout ? 'order-2 md:order-1 md:pr-8' : 'md:pl-8' } md:w-3/5 md:text-left md:p-0 md:pb-2 `}>
            <div>
                <h2 className="text-2xl font-bold md:text-3xl">{project.title}</h2>
                <p className='mt-2 md:text-lg'>{project.desc}</p>
                <ul className='flex mt-4 justify-center md:justify-start'>
                    {
                        project.category.map((item, index) => {

                            return (
                                <li key={index} className="mx-1 md:mx-0 md:mr-2 grid">
                                    <div className={`bg-primary text-white py-2 px-4 mr-2 rounded-md font-bold}`}>
                                        {item.name}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="flex justify-center mt-2 md:justify-start md:mt-0">
                <Link href={`${project.repo}`} ><a  className='mr-4 text-black bg-white my-6 flex items-center py-2 px-4 w-28 rounded-md font-semibold'><BsGithub className='mr-2'/> Github</a></Link>
                <Link href={`${project.demo}`} ><a className='mr-4 text-black bg-white my-6 flex items-center py-2 px-4 w-28 rounded-md font-semibold'><BsLink45Deg className='mr-2'/> Demo</a></Link>
            </div>

        </div>
    </div>
        
</>
  )
}
