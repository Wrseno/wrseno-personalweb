import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CertificateDetail {
  image: string;
  title: string;
  course: string;
  url: string;
}

interface CertificateProps {
  cert: CertificateDetail;
}

const CertificateCard = (props: CertificateProps) => {
  const {cert} = props;

  return (
    <li className='mx-auto hover:cursor-pointer rounded-lg shadow-neumorphism bg-white dark:bg-gradient-to-r dark:from-pink-700 to dark:bg-red-700 dark:shadow-dark-neumorphism my-4 md:my-0'>
      <div className='w-full'>
        <Image
          src={`/img/${cert.image}`}
          width='400'
          height='300'
          alt='certificate'
          placeholder='blur'
          blurDataURL={`/img/${cert.image}`}
          className='duration-300 mx-auto rounded-t-xl'
          unoptimized
        />
        <p className='text-base text-center p-4 font-semibold'>
          {cert.title} <br /> {cert.course}{" "}
          <Link href={cert.url} className='hover:text-slate-500 font-bold'>
            Detail
          </Link>
        </p>
      </div>
    </li>
  );
};

export default CertificateCard;
