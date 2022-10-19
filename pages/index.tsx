import Layout from './layout';
import Link from 'next/link';
import Social from './components/Social';
import socialsJSON from '../data/socials.json';

interface HomeProps {
  socials: Array<any>;
}

const Home = (props: HomeProps) => {

  const {socials} = props;

  return (
    <>
      <Layout pageTitle='Home Page'>
       <article id='home_page' className='md:pt-32 pt-24'>
        <section className='container lg:px-36'>
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2 md:w-1/2">
              <h1 className='text-base font-bold md:text-xl lg:text-2xl'>Hello, <span className='text-secondary '>I'm Seno.</span></h1>
              <h2 className='text-3xl font-bold mb-4 lg:text-5xl'>Web Developer</h2>
              <p className='font-semibold'>My full name is <span className='font-bold'>Warseno Bambang Setyono</span>. 
                <br/>I'm a <span className='text-secondary font-bold'>Web Engineering</span> and <span className='text-secondary font-bold'>Content Creator</span>,
                I love exploring new technology.
              </p>
              <div className='text-base font-semibold border-2 py-3 px-8 rounded-lg w-40 mt-2 hover:bg-primary hover:text-black hover:font-bold hover:ease-in-out hover:duration-300 hover:cursor-pointer hover:border-black'>
                <Link href="mailto:senogroups@gmail.com"><a>Contact Me</a></Link>
              </div>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2 md:w-1/2">
              <div className="relative mt-10">
                <img 
                src='/img/warseno-removebg.png'
                alt='Warseno Bambang Setyono'
                className='max-w-full mx-auto'
                />
                <span className='absolute -bottom-8 -z-10 left-1/2 -translate-x-1/2'>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={400} height={400}>
                    <path fill="#ad081b" d="M47.6,-28.7C59.2,-7.5,64.2,16.2,55.2,36.9C46.2,57.5,23.1,75,-2.4,76.4C-28,77.8,-56,63.1,-65.1,42.5C-74.1,21.8,-64.3,-4.8,-50.3,-27.4C-36.3,-49.9,-18.2,-68.4,-0.1,-68.4C18,-68.4,36.1,-49.8,47.6,-28.7Z" transform="translate(100 100) scale(1.1)" />
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

            <div className="mx-auto my-2 lg:my-12 animate-bounce md:hidden lg:block">
              <a href='#download-cv' className='flex items-center text-xl gap-4 text-slate-800'>
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1e293b" className="bi bi-caret-down-square" viewBox="0 0 16 16">
                  <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
                </svg>
              </a>
            </div>
            
            <div className="w-full my-72 lg:my-52 md:my-24">

              <p className="lg:text-2xl lg:px-60 text-center font-semibold md:px-44">If you are <span className='text-secondary'>interested</span>, please contact me via the <span className='text-secondary'>Contact Me</span> button. 
              Or check <span className='text-secondary'>my CV</span> first</p>
              
              <div className="lg:flex md:flex mx-auto">
                <div className='mx-auto lg:mr-6 md:mr-6 text-base text-center font-semibold border-2 py-3 rounded-lg w-52 mt-8 hover:bg-primary hover:text-black hover:font-bold hover:ease-in-out hover:duration-300 hover:cursor-pointer hover:border-black'>
                  <Link href="achievement"><a>See Achievements</a></Link>
                </div>

                <div id='download-cv' className='mx-auto lg:ml-6 md:ml-6 text-base text-center font-semibold border-2 py-3 rounded-lg w-52 mt-8 hover:bg-primary hover:text-black hover:font-bold hover:ease-in-out hover:duration-300 hover:cursor-pointer hover:border-black'>
                  <Link href="#"><a>Download CV</a></Link>
                </div>
              </div>

            </div>

          </div>
        </section>
       </article>
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