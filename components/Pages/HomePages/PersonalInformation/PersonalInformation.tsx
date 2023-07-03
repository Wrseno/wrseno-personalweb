import Link from "next/link";

interface PersonalInformationProps {
  greeting: string;
  nickname: string;
  fullname: string;
  profession: string;
  welcome: string;
}

const PersonalInformation = (props: PersonalInformationProps) => {
  const {greeting, nickname, fullname, profession, welcome} = props;

  return (
    <div className='w-full self-center px-4 lg:w-1/2 md:w-1/2'>
      <h1 className='font-bold text-3xl lg:text-4xl'>
        {greeting} <span className='text-gradient'>{nickname}</span>
      </h1>
      <p className='font-semibold my-4'>
        {fullname}
        <span className='text-gradient font-bold text-2xl lg:block'>
          {profession}
        </span>
        {welcome}
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
