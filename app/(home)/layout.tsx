import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import Button from './Button';


function Layout() {


  return (
    <section className="mt-16 mb-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
      <h1 className="text-balance text-6xl font-bold leading-tight tracking-tighter lg:pr-8 lg:text-8xl">      </h1>
        <div style={{display: "flex", gap: 32, alignItems: 'center'}}>
          <div>Statikus főoldal</div>
          <div>asd</div>
          <div style={{display: 'flex', gap: 32}}>
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/blog" >
              <p>Blogok</p>
            </Link>
            <Button />
            {/* <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
              <div>NYELV:</div>
              <div style={{display: 'flex', gap: 32}}>
              <Link href={`/hu/`} className="hover:underline">HUN</Link>
              <Link href={`/rs/`} className="hover:underline">HUN</Link>
              </div>
            </div> */}
          </div>
        </div>

    </section>
  );
}

export default Layout;
