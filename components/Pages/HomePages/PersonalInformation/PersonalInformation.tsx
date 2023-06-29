import Link from "next/link";

const PersonalInformation = () => {
  return (
    <div className='w-full self-center px-4 lg:w-1/2 md:w-1/2'>
      <h1 className='font-bold text-3xl lg:text-4xl'>
        Hello, <span className='text-gradient'>I&#39;m Seno.</span>
      </h1>
      <p className='font-semibold my-4'>
        My full name is Warseno Bambang Setyono.
        <span className='text-gradient font-bold text-2xl lg:block'>
          {" "}
          I&#39;m a Student, Frontend Developer and Content Creator.{" "}
        </span>
        Welcome to my personal website, where you can find my achievements,
        projects, and more.
      </p>
      <div className='text-base font-bold border-black dark:border-white dark:hover:border-slate-700 border-2 py-3 px-8 rounded-lg w-40 mt-2 hover:text-slate-700  hover:ease-in-out hover:duration-500 hover:cursor-pointer hover:border-slate-700'>
        <Link href='mailto:senogroups@gmail.com'>
          <span>Contact Me</span>
        </Link>
      </div>
    </div>
  );
};

export default PersonalInformation;
