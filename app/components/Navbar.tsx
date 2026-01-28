'use client';

import Link from 'next/link';
import { Instagram, Facebook, Tiktok, Menu } from 'lucide-react';
import Image from 'next/image';
import { TikTok_Sans } from 'next/font/google';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-around  py-15 bg-transparent text-white">

      <div className='absolute flex items-center justify-center w-100% gap-x-6'>

        {/* Centro: Logo */}
        <div className="">
          <Image src="/images/hero.png" alt="Logo VLCS" width={150} height={40} className="cursor-pointer" />
        </div>
      
      </div>

      {/* Direita: Ícones */}


      <div className="flex w-full items-right justify-end right-10 px-10 space-x-8">

        {/* Redes Sociais */}
        <div className="hidden lg:flex items-center space-x-2">
          <img src="/images/redes/insta.png" alt="Instagram" className="h-5 w-5 cursor-pointer hover:scale-120 transition duration-300" />
          <img src="/images/redes/face.png" alt="Facebook" className="h-5 w-5 cursor-pointer hover:scale-120 transition duration-300" />
          <img src="/images/redes/tiktok.png" alt="TikTok" className="h-5 w-5 cursor-pointer hover:scale-120 transition duration-300" />
          <img src="/images/redes/youtube.png" alt="Email" className="h-5 w-5 cursor-pointer hover:scale-120 transition duration-300" />
        </div>
         
      </div>
      
    </nav>
  );
}