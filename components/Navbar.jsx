import { navbarMenu } from '@/constants/navbarMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Navbar() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="p-6 border-b-2 mb-4 border-blue-100 flex items-center justify-between">
      {navbarMenu.map((val, ind) => {
        return (
          <Link
            key={ind}
            href={val.link}
            className={`${
              router.pathname === val.link
                ? 'bg-blue-700 text-white hover:bg-blue-700'
                : ''
            } px-4 rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 py-2 `}
          >
            {val.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
