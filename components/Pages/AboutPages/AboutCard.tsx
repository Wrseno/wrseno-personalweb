import Link from "next/link";

const AboutCard = () => {
  return (
    <>
      <div className='flex flex-wrap relative'>
        <h1 className='w-full text-3xl font-bold text-center'>About Me</h1>
        <div className='w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10'></div>
        <div className='w-full self-center'>
          <h1 className='text-lg font-bold lg:text-xl lg:mt-24 mt-14'>
            Who Am I
          </h1>
          <p className='text-base mb-4 dark:text-slate-300'>
            I am a web developer from{" "}
            <span className='text-gradient font-bold'>
              Wonogiri, Indonesia.
            </span>{" "}
            Working in <span className='font-bold'>Web Development</span> and I
            also love to create video on{" "}
            <span className='font-bold'>
              <Link href='https://youtube.com/@sendevv'>Youtube</Link>
            </span>
            .
            <br /> I start learning Web Development in early 2022, after
            following <span className='font-bold'>LKS Web Technologies</span>.
            <br /> Until now I&#39;m still learning about{" "}
            <span className='font-bold'>Programming</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
