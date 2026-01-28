'use client';
import React from 'react';
import Navbar from './Navbar';


export default function Hero() {

    return (
        <section className="h-screen">
            <Navbar />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/70"></div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-black/20"></div>
            <video
                src="/video/video_hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-screen object-cover"
            />
        </section>
    );
}