import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { TbMailCode } from "react-icons/tb";
// import { Button } from "./ui/button";

const ContactLinks = () => {
  return (
    <div className='pt-4 flex justify-center sm:justify-start gap-6 z-40'>
      <Link href='tel:+2348063859632'>
        <button className='group inline-flex animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-3 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
          <MdPhoneAndroid className='w-7 h-7  shrink-0 text-blue-600' />
        </button>
      </Link>

      <Link href='mailto:chanty4t@gmail.com'>
        <button className='group inline-flex animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-3 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
          <TbMailCode className='w-7 h-7  shrink-0 text-white ' />
        </button>
      </Link>

      <Link href='https://wa.me/2348063859632'>
        <button className='group inline-flex animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-3 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
          <FaWhatsapp className='w-7 h-7  shrink-0 text-green-600 ' />
        </button>
      </Link>

      {/* <Button
        asChild
        variant='outline'
        size='icon'
        className='p-6 bg-green-300 dark:bg-gray-700 z-40 transition duration-700 rounded-full hover:rounded-lg hover:scale-125 hover:rotate-[360deg] hover:bg-green-200  '>
        <Link href='https://wa.me/2348063856120'>
          <FaWhatsapp className='w-6 h-6 shrink-0 text-white hover:text-green-600' />
        </Link>
      </Button> */}
      {/* <Button
        asChild
        variant='outline'
        size='icon'
        className='p-6 bg-green-300 dark:bg-gray-700 z-40 transition duration-700 rounded-full hover:rounded-lg hover:scale-125 hover:rotate-[360deg] hover:bg-green-200  '>
        <Link href='mailto:ask@soft-lutions.com.ng'>
          <TbMailCode className='w-6 h-6  shrink-0 text-white hover:text-green-600' />
        </Link>
      </Button> */}

      {/* <Button
        asChild
        variant='outline'
        size='icon'
        className='p-6 bg-green-300 dark:bg-gray-700 z-40 transition duration-500 rounded-full hover:rounded-lg hover:scale-125 hover:rotate-[360deg] hover:bg-green-200  '>
        <Link href='tel:+2348063856120'>
          <MdPhoneAndroid className='w-6 h-6  shrink-0 text-white hover:text-green-600' />
        </Link>
      </Button> */}
    </div>
  );
};

export default ContactLinks;
