'use client';

import { div } from 'framer-motion/client';
import Image from 'next/image';


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-30 z-50 flex items-center justify-around  bg-transparent text-white">

      <div className="absolute inset-0 
  bg-gradient-to-b 
  from-black/30 
  from-70% 
  via-black/30
  via-60% 
  to-transparent"></div>

      <div className='absolute flex items-center justify-center w-100% gap-x-6'>

        {/* Centro: Logo */}
        <div className="">
          <Image src="/images/hero.png" alt="Logo VLCS" width={150} height={40} className="cursor-pointer" />
        </div>

      </div>

      {/* Direita: Ícones */}


      <div className="flex w-full items-right justify-end right-10 px-10 space-x-8">

        {/* Redes Sociais */}
        <div className="hidden lg:flex items-center space-x-2 z-50">
          <a href="https://www.instagram.com/vlcsbrasil/"><img src="/images/redes/insta.png" alt="Instagram" className="h-5 w-5 cursor-pointer hover:scale-110 transition duration-300" /></a>
          <a href="https://www.facebook.com/VLCSnation"><img src="/images/redes/face.png" alt="Facebook" className="h-5 w-5 cursor-pointer hover:scale-110 transition duration-300" /></a>
          <a href="https://www.tiktok.com/@vlcs_oficial"><img src="/images/redes/tiktok.png" alt="TikTok" className="h-5 w-5 cursor-pointer hover:scale-110 transition duration-300" /></a>
          <a href="https://www.youtube.com/@vlcs_oficial"><img src="/images/redes/youtube.png" alt="youtube" className="h-7 w-7 cursor-pointer hover:scale-110 transition duration-300 bor" /></a>
        </div>

      </div>

    </nav>
  );
}