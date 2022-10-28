import Link from 'next/link';
import { useState } from 'react';

export default function Header() {

  const [hamburger, setBurgerClass] = useState('hamburger-nonactive');
  const [menu_class, setMenuClass] = useState('menu-hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('hamburger-active')
      setMenuClass('menu-visible')
    } else {
      setBurgerClass('hamburger-nonactive')
      setMenuClass('menu-hidden')
    }
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <>
      <header className='flex bg-transparent navbar-fixed top-0 left-0 w-full items-center z-10'>
        <div className="container lg:px-36">
          <div className="flex justify-between relative">
            <div className="px-4">
              <Link href='/' ><a className='font-bold text-2xl block py-6'>wrseno <span className='text-primary'>•</span></a></Link>
            </div>
            <div className="flex items-center px-4">
              <button id={hamburger} name='hamburger' type='button' className='block absolute right-4 lg:hidden' onClick={updateMenu}>
                <span className='hamburger-line transition duration-300 ease-in-out origin-top-left '></span>
                <span className='hamburger-line-2 transition duration-300 ease-in-out'></span>
                <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
              </button>

              <nav id={menu_class} className='hidden absolute py-5 bg-black font-semibold
               shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full text-white lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
                <ul className='block lg:flex'>
                  <li className='group'><Link href='about'><a className='text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold'>About</a></Link></li>
                  <li className='group'><Link href='achievement'><a className='text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold'>Achievements</a></Link></li>
                  <li className='group'><Link href='project'><a className='text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold'>Projects</a></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
