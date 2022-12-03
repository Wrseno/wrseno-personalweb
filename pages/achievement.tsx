import Layout from "../layout";
import achievementJSON from '../data/achievements.json';
import certificateJSON from '../data/certificate.json';
import AchievementCard from '../components/AchievementCard';
import Image from 'next/image';

interface AchievementProps {
  achievement: Array<any>;
  certificate: Array<any>;
}

export default function Achievement(props: AchievementProps) {

  const {achievement, certificate} = props;

  return (
    <Layout pageTitle="Achievements Page">
        <main id='achievement_page' className='pt-32'>
          <div className='container mx-auto max-w-screen-lg'>
            <div className="flex flex-wrap relative">
                <h1 className='w-full text-3xl font-bold text-center'>Achievements</h1>
                <div className='w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10'></div>
                <div className="w-full lg:1/2 lg:my-24 my-14">
                  {achievement.map((ach, index) => {
                      if (index % 2 == 0 ){
                        return <AchievementCard key={index} ach={ach} layout={false}/>
                      } else {
                        return <AchievementCard key={index} ach={ach} layout={true}/>
                      }
                    })}
                </div>

                <div className="w-full">
                  <h1 className="text-3xl font-bold text-center my-8">Certificate</h1>
                  <ul className="grid md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-6 mb-4">
                    {certificate.map((cert, index)=>{
                        return (
                          <li key={index} className="p-2 hover:cursor-pointer rounded-lg border-gradient my-4 md:my-0">
                            <div className="gradient-content w-full">
                              <Image
                                src={`/img/${cert.image}`}
                                  width='400'
                                    height='300'
                                      alt="certificate"
                                    placeholder="blur"
                                  blurDataURL={`/img/${cert.image}`}
                                className="hover:scale-105 duration-300"
                              />
                              <p className="text-base text-center p-4 font-semibold">{cert.title} <br /> {cert.course} <a href={cert.url} className="hover:text-slate-500 font-bold">Detail</a></p>
                            </div>
                          </li>
                        )
                      })}
                  </ul>
                </div>
            </div>
          </div>          
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const achievement = achievementJSON;
  const certificate = certificateJSON; 

  return {
    props: {
      achievement,
      certificate,
    },
  };
};