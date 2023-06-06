import { useState } from 'react';

import { navLinks } from '../../constants';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index.js';
import Menu from '../Menu';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Menu toggleMenu={toggleMenu} />
      <nav className="w-full">
        <div className="h-[120px] md:h-[124px]">
          <div
            className={`fixed z-50 flex w-full items-center px-8 py-8 transition-all duration-500
            ${toggleMenu && 'z-[999999] bg-[#1b252e]'} top-0 ${
              toggleMenu ? 'bg-[#1b252e] text-white' : 'bg-white'
            } menu md:px-16`}
          >
            <div className="mt-2 grow basis-0 md:mt-3">
              <div
                className={`w-fit ${toggleMenu && 'z-[999999] opacity-100'}`}
              >
                <Link className="w-fit" to={'/'}>
                  <Logo toggleMenu={toggleMenu} />
                </Link>
              </div>
            </div>
            <div
              onClick={() => setToggleMenu((prev) => !prev)}
              className={`group flex flex-col items-center justify-center gap-1.5 cursor-pointer`}
            >
              <div
                className={`h-0.5 w-12 rounded-full bg-black transition ease transform duration-[700ms] md:w-14 ${
                  toggleMenu && '-rotate-45 translate-y-[7px] bg-white '
                } `}
              ></div>
              <div
                className={`h-0.5 w-12 rounded-full bg-black transition ease transform duration-[700ms] md:w-14 ${
                  toggleMenu && 'rotate-45 bg-white'
                } `}
              ></div>
            </div>
            {/* {toggleMenu && (
              <div className="fixed left-0 top-0 right-auto bottom-auto h-screen w-full bg-theme px-8 py-16 -translate-y-full z-40 transition-[transform,opacity] duration-[500ms] ease-in-out md:px-16 md:py-24">
                <div className="mt-28 flex h-full w-full transform flex-col items-center font-bold text-white transition duration-[500ms] ease-out -translate-y-full motion-reduce:transition-none md:items-center">
                  <div className="flex w-full flex-col items-center gap-4 py-2 text-2xl uppercase md:py-4 md:text-4xl">
                    {navLinks.map((navLink, index) => (
                      <Link
                        to={navLink.id}
                        className={`border-b-2 border-white px-4 pb-1 ${
                          index === navLinks.length - 1 ? 'md:hidden' : ''
                        }`}
                        key={navLink.id}
                      >
                        {navLink.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )} */}
            <div className="hidden grow basis-0 text-right text-[15px] md:block">
              <Link className="text-theme font-bold uppercase" to={'/contact'}>
                contact us
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="fixed left-0 top-0 right-auto bottom-auto h-screen w-full bg-theme px-8 py-16 -translate-y-full z-40 transition-[transform,opacity] duration-[500ms] ease-in-out md:px-16 md:py-24">
          <div className="mt-28 flex h-full w-full transform flex-col items-center font-bold text-white transition duration-[500ms] ease-out -translate-y-full motion-reduce:transition-none md:items-center">
            <div className="flex w-full flex-col items-center gap-4 py-2 text-2xl uppercase md:py-4 md:text-4xl">
              {navLinks.map((navLink, index) => (
                <Link
                  to={navLink.id}
                  className={`border-b-2 border-white px-4 pb-1 ${
                    index === navLinks.length - 1 ? 'md:hidden' : ''
                  }`}
                  key={navLink.id}
                >
                  {navLink.title}
                </Link>
              ))}
            </div>
          </div>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
