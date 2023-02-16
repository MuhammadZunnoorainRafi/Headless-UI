import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Navbar />
        <Link
          href="/"
          className="px-4 py-2 mx-7 bg-black text-white rounded-lg hover:bg-gray-800 duration-150"
        >
          Back
        </Link>
        <div className="mt-32 max-w-6xl mx-auto flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: 'Headless UI',
};

export default Layout;
