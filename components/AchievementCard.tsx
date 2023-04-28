import Image from "next/image";

interface AchievementDetail {
  title: string;
  desc: string;
  date: string;
  image: string;
}

interface AchievementCardProps {
  ach: AchievementDetail;
  layout: boolean;
}

export default function AchievementCard(props: AchievementCardProps) {
  const { layout, ach } = props;

  return (
    <div className='shadow-neumorphism bg-white dark:shadow-dark-neumorphism dark:bg-dark md:p-0 rounded-lg mb-14'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 relative p-4'>
        <h1
          className={`text-gradient text-4xl font-bold my-auto mx-auto mb-4 ${
            layout ? "absolute right-10 top-6" : ""
          } hidden lg:block`}
        >
          {ach.date}
        </h1>
        <Image
          src={`/img/${ach.image}`}
          width={384}
          height={224}
          alt='achievement'
          className='rounded-xl mx-auto duration-300 hover:cursor-pointer'
          placeholder='blur'
          blurDataURL={`/img/${ach.image}`}
          unoptimized
        />
        <div className='description my-auto lg:mx-4 p-4'>
          <h1 className='font-bold text-xl dark:text-slate-300 my-2'>
            {ach.title}
          </h1>
          <p className='text-base dark:text-slate-300'>{ach.desc}</p>
        </div>
      </div>
    </div>
  );
}
