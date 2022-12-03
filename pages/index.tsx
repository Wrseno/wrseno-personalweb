import Layout from "../layout";
import Link from "next/link";
import Social from "../components/Social";
import socialsJSON from "../data/socials.json";
import Image from "next/image";

interface HomeProps {
  socials: Array<any>;
}

const Home = (props: HomeProps) => {

  const {socials} = props;

  return (
    <>
      <Layout pageTitle="Home Page">
       <main id="home_page" className="md:pt-32 pt-24">
        <section className="container mx-auto max-w-screen-lg">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2 md:w-1/2">
              <h1 className="font-bold text-3xl lg:text-4xl">Hello, <span className="text-gradient">I&#39;m Seno.</span></h1>
              <p className="font-semibold my-4">My full name is Warseno Bambang Setyono. 
                 <span className="text-gradient font-bold text-2xl lg:block"> I&#39;m a Student, Frontend Developer and Content Creator. </span>
                 Welcome to my personal website, where you can find my achievements, projects, and more.
              </p>
              <div className="text-base font-bold border-black dark:border-white dark:hover:border-slate-700 border-2 py-3 px-8 rounded-lg w-40 mt-2 hover:text-slate-700  hover:ease-in-out hover:duration-500 hover:cursor-pointer hover:border-slate-700">
                <Link href="mailto:senogroups@gmail.com"><a>Contact Me</a></Link>
              </div>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2 md:w-1/2">
              <div className="relative mt-10">
                <Image 
                  src="/img/warseno-removebg.png"
                    alt="Warseno Bambang Setyono"
                      width="400"
                        height="300"
                      className="max-w-full mx-auto"
                    placeholder="blur"
                  blurDataURL="/img/warseno-removebg.png"
                />       
                <span className="absolute mx-auto -bottom-0 lg:-bottom-16 -z-10 lg:left-40 left-28 -translate-x-1/2 w-full">
                  <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    
                    <defs>                         
                      <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            
                        <stop id="stop1" stop-color="rgba(232, 5, 2, 1)" offset="0%"></stop>                            
                        <stop id="stop2" stop-color="rgba(251, 22, 184, 1)" offset="100%"></stop>                        
                      </linearGradient>                    
                    </defs>                
                    <path fill="url(#sw-gradient)" d="M21.1,-22.6C29.1,-18.4,38.5,-13.4,41.5,-5.9C44.5,1.6,41.1,11.7,35.1,18.5C29,25.2,20.4,28.7,11.9,31.2C3.4,33.7,-5,35.2,-11.1,32.3C-17.3,29.3,-21.2,21.9,-23.3,15C-25.4,8.1,-25.7,1.8,-24.1,-3.7C-22.5,-9.2,-18.9,-13.7,-14.6,-18.6C-10.2,-23.4,-5.1,-28.5,0.7,-29.3C6.5,-30.2,13.1,-26.8,21.1,-22.6Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>              
                  </svg>
                </span>     
              </div>
            </div>

          
            <div className="relative">
              <ul className="absolute right-6 top-20 lg:top-24">
                  {
                    socials.map((item, index) => {
                      return <Social key={index} social={item}/>
                    })
                  }
              </ul>
            </div>

          </div>
        </section>
       </main>
      </Layout>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const socials = socialsJSON;

  return {
    props: {
      socials,
    },
  };
}