import { Meteors } from "@/components/ui/Meteors";

export function About() {
  return (
    <div id='about' className='py-12 px-2 flex justify-center items-center'>
      <div className=' w-full relative max-w-xl'>
        <div className='absolute inset-0 h-full w-full  bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl' />
        <div className='relative shadow-xl bg-gray-100 dark:bg-gray-950 p-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start'>
          <h1 className='font-bold text-3xl mb-4 relative z-50 text-center'>
            ABOUT ME
          </h1>

          <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
            I&apos;m a passionate educator, content creator, and programme
            coordinator dedicated to making a positive impact in the lives of
            others. With years of teaching experience, I&apos;ve had the
            privilege of shaping young minds and witnessing the transformative
            power of education.
          </p>

          <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
            Beyond the classroom, I&apos;ve expanded my reach through digital
            platforms. As a YouTuber with over 100,000 followers, I share
            insights on education, personal growth, and lifestyle. My food blog
            and education blog showcase my creativity and expertise, inspiring
            others to explore new ideas and perspectives.
          </p>

          <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
            Currently, I serve as the Coordinator of Programmes at Godfrey Okoye
            University in Enugu, where I drive innovation and excellence in
            academic programmes. My journey has taught me the value of
            collaboration, creativity, and community.
          </p>
          <p className='font-semibold text-base text-slate-500 mb-4 relative z-50'>
            Let&apos;s Connect and Create Something Amazing!
          </p>
          <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
            I&apos;m excited to collaborate with like-minded individuals who
            share my passion for education, content creation, and innovation.
            Whether you&apos;re an educator, entrepreneur, or simply someone
            with a vision, I&apos;m here to support and empower you. Let&apos;s
            work together to bring your vision to life and create something
            amazing!
          </p>

          <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
            Feel free to reach out and explore opportunities for collaboration.
            I can&apos;t wait to see what we can achieve together!
          </p>

          <Meteors number={40} />
        </div>
      </div>
    </div>
  );
}
