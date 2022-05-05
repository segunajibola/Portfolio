const About = () => {
  return (
    <div name='about' id='about' className='w-full h-auto pt-40 md:h-screen bg-[#0a192f] dark:bg-gray-100 text-gray-300 dark:text-gray-800'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div className='absolute -mt-16 pb-8 pl-4'>
            <p className='opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600 dark:text-gray-900 dark:opacity-60'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>Hey Segun here👋, nice to meet you. A little bit about me.</p>
          </div>
          <div>
            <p>I love building awesome software that improves
            the lives & business of others. I create responsive websites
            for clients ranging from portfolio webpages for individuals and functional websites for small-businesses. I also love design and teaching.</p>
            <p className='mt-3'>In my leisures, I read about Arsenal, tech news and latest gadgets. PS. I use <a href='https://www.twitter.com/iamsegunajibola' className='text-blue-400'>Twitter</a> alot.</p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;