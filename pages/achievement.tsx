import Layout from "./layout";
import achievementJSON from '../data/achievements.json';
import certificateJSON from '../data/certificate.json';
import AchievementCard from './components/AchievementCard';
import Image from 'next/image';

interface AchievementProps {
  achievement: Array<any>;
  certificate: Array<any>;
}

export default function Achievement(props: AchievementProps) {

  const {achievement, certificate} = props;

  return (
    <Layout pageTitle="Achievements Page">
        <div id='achievement_page' className='pt-32'>
          <div className='container lg:px-36'>
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
                  <h1 className="lg:text-3xl font-bold text-center my-8">Certificate</h1>
                  <ul className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {certificate.map((cert, index)=>{
                        return (
                          <li key={index} className="mx-auto mb-8 hover:opacity-75 hover:cursor-pointer border-2 border-slate-300 rounded-lg bg-slate-300">
                            <Image
                              src={`/img/${cert.image}`}
                              width='300'
                              height='300'
                              alt='certificate'
                            />
                            <p className="text-base text-center py-2 text-black font-semibold">{cert.title} <br /> {cert.course} <a target='_blank' href={cert.url} className="hover:text-slate-500 font-bold">Detail</a></p>
                          </li>
                        )
                      })}
                  </ul>
                </div>
            </div>
          </div>          
      </div>
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