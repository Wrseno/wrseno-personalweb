import React from "react";
import Image from "next/image";
import {Glass, Particles} from "../../../";

const PersonalImage = () => {
  return (
    <div className='w-full self-end px-4 lg:w-1/2 md:w-1/2'>
      <div className='relative mt-10'>
        <Image
          src='/img/warseno_bambang.png'
          alt='Warseno Bambang Setyono'
          width={400}
          height={300}
          className='max-w-full mx-auto z-10 border-b-2 border-black dark:border-white'
          placeholder='blur'
          blurDataURL='/img/warseno-bambang-setyono.png'
          unoptimized
        />
        <span className='absolute mx-auto -bottom-0 lg:-bottom-16 -z-10 lg:left-40 left-28 -translate-x-1/2 w-full'>
          <svg
            id='sw-js-blob-svg'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <linearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'>
                <stop
                  id='stop1'
                  stopColor='rgba(232, 5, 2, 1)'
                  offset='0%'
                ></stop>
                <stop
                  id='stop2'
                  stopColor='rgba(251, 22, 184, 1)'
                  offset='100%'
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill='url(#sw-gradient)'
              d='M21.1,-22.6C29.1,-18.4,38.5,-13.4,41.5,-5.9C44.5,1.6,41.1,11.7,35.1,18.5C29,25.2,20.4,28.7,11.9,31.2C3.4,33.7,-5,35.2,-11.1,32.3C-17.3,29.3,-21.2,21.9,-23.3,15C-25.4,8.1,-25.7,1.8,-24.1,-3.7C-22.5,-9.2,-18.9,-13.7,-14.6,-18.6C-10.2,-23.4,-5.1,-28.5,0.7,-29.3C6.5,-30.2,13.1,-26.8,21.1,-22.6Z'
              width='100%'
              height='100%'
              transform='translate(50 50)'
            ></path>
          </svg>
        </span>
        <Glass />
        <Particles />
      </div>
    </div>
  );
};

export default PersonalImage;
