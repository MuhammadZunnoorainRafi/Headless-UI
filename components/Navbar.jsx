import { navbarMenu } from '@/constants/navbarMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Navbar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  return (
    <div
      className={`p-6 ${
        navbar ? 'bg-blue-100' : ' bg-slate-900'
      } border-b-2 sticky top-0 left-0 duration-200  backdrop-blur-md   bg-opacity-30  mb-4 border-blue-100 flex items-center justify-between`}
    >
      {navbarMenu.map((val, ind) => {
        return (
          <Link
            key={ind}
            href={val.link}
            className={`${
              router.pathname === val.link
                ? 'bg-blue-700 text-white hover:bg-blue-700'
                : ''
            } px-4 rounded-lg text-white bg-slate-800 hover:bg-blue-100 py-2 `}
          >
            {val.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
