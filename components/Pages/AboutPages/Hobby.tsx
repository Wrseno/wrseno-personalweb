import Image from "next/image";

interface HobbyProps {
  icon: string;
  title: string;
  description: string;
}

const Hobby = (props: HobbyProps) => {
  const {icon, title, description} = props;
  return (
    <li className='p-1 border-gradient rounded-lg my-2 mx-2'>
      <div className='gradient-content lg:flex justify-start items-start gap-5 rounded-lg p-6'>
        <div>
          <Image
            src={`/icon/${icon}.svg`}
            width={42}
            height={42}
            alt='Web Development'
            className='mx-auto lg:my-4'
          />
        </div>

        <div>
          <h4 className='text-base font-semibold text-center lg:text-start'>
            {title}
          </h4>
          <p className='dark:text-slate-300'>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default Hobby;
