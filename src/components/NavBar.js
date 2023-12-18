import { hamburger } from '../assets/icons'
import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'
const NavBar = () => {
    return (
      <header className='sm:px-16 px-8 py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-width:1440px margin:0 auto'>
          <a href='/'>
            <img
              src={headerLogo}
              alt='logo'
              width={129}
              height={29}
              className='m-0 w-[129px] h-[29px]'
            />
          </a>
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
            <a href='/'>Sign in</a>
            <span>/</span>
            <a href='/'>Explore now</a>
          </div>
          <div className='hidden max-lg:block'>
            <img src={hamburger} alt='hamburger icon' width={25} height={25} />
          </div>
        </nav>
      </header>
    );
  };

export default NavBar