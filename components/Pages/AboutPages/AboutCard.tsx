import Link from "next/link";

const AboutCard = () => {
  return (
    <>
      <p className='text-base mb-4 dark:text-slate-300'>
        I am a web developer from{" "}
        <span className='text-gradient font-bold'>Wonogiri, Indonesia.</span>{" "}
        Working in <span className='font-bold'>Web Development</span> and I also
        love to create video on{" "}
        <span className='font-bold'>
          <Link href='https://youtube.com/@sendevv'>Youtube</Link>
        </span>
        .
        <br /> I start learning Web Development in early 2022, after following{" "}
        <span className='font-bold'>LKS Web Technologies</span>.
        <br /> Until now I&#39;m still learning about{" "}
        <span className='font-bold'>Programming</span>.
      </p>
    </>
  );
};

export default AboutCard;
