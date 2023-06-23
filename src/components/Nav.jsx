'use client';

import { Button, Navbar } from 'flowbite-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Nav() {

  const handleClick = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: "nearest"
    });
  };

  return (
    <Navbar
      fluid
      rounded
      className="fixed w-full top-0 z-50 bg-white"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
          jaimes.io
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='p-0' href="https://github.com/oscj" target="_blank">
          <FaGithub size={20} />
        </Button>
        <Button className='p-0 ml-2'>
          <FaLinkedin size={20} href="https://www.linkedin.com/in/oscj/" target="_blank"/>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link onClick={() => handleClick('about')}>
          About
        </Navbar.Link>
        <Navbar.Link onClick={() => handleClick('projects')}>
          Projects
        </Navbar.Link>
        <Navbar.Link onClick={() => handleClick('resume')}>
          Resume
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


