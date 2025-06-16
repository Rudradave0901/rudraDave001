import React from 'react'

// Components
import Navbar from './Navbar'

import { useState } from 'react'
 

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

  return (
    <>
        <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
            <div className="max-w-screen-2xl w-full mx-auto px-4 items-center justify-between flex md:grid md:grid-cols-[1fr_3fr_1fr] md:px-6">
                <h1>
                    <a href="/" className='logo'>
                        <img src="/images/logo.svg" alt="Logo Icon" height={40} width={40} />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button className='menu-btn md:hidden flex justify-center items-center' onClick={() => setNavOpen((prev) => !prev)}>
                        <span className='material-symbols-rounded'>
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>

                <a className='btn btn-secondary hidden md:flex ml-auto' href="#contect"> Contact Me <img src="/images/callIcon.svg" alt="Call Icon" height={16} width={16} /> </a>

            </div>
        </header>
    </>
  )
}

export default Header