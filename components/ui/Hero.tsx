"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// import { ModeToggle } from "../ModeToggle";
// import Statistics from "../Statistics";
import { FlipWords } from "./flipWords";
import ContactLinks from "../ContactLinks";
// import { TextGenerateEffect } from "./textGenerateEffect";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  const text = ["teacher", "blogger", "chef", "counsellor"];

  const words = `A fullstack Mobile-Web Specialist - MWS.`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='px-4 py-8 min-h-screen w-full dark:bg-gray-950 bg-gray-50 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-950 bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6'>
        <div className='sm:order-2'>
          <Image
            alt=''
            priority
            width={300}
            height={300}
            src='/chanty.png'
            className='object-cover w-full sm:w-[600px] md:w-[550px] aspect-auto shrink-0'
          />
        </div>

        <div className='sm:pl-4 w-full sm:max-w-[340px] md:max-w-[450px] lg:max-w-[550px]'>
          <h1 className='text-center sm:text-left font-bold text-2xl tracking-widest'>
            I&apos;m
          </h1>
          <h1 className='text-center sm:text-left font-bold text-4xl md:text-5xl tracking-widest'>
            Chukwu Uchanta
          </h1>
          <div className='text-center text-lg sm:text-left leading-[22px]'>
            <p>Coordinator of Programmes,</p>
            <p >
              Godfrey Okoye University, Enugu
            </p>
          </div>

          {/* <TextGenerateEffect words={words} /> */}

          <div className='dark:text-white text-gray-400 text-xl leading-snug tracking-wide text-center sm:text-left'>
            {/* <TextGenerateEffect words={words} /> */}
            {visible && (
              <div className='transition-all transform duration-500 mt-3'>
                I am a{""}
                <FlipWords words={text} className='' />
              </div>
            )}
          </div>

          <ContactLinks />
        </div>
      </div>

      <div className='absolute top-4 left-4'> {/* <ModeToggle /> */}</div>
      {/* <Statistics /> */}
    </div>
  );
};

export default Hero;
