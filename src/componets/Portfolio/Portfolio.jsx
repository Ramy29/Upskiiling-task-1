import React from 'react'

export default function Portfolio() {
  return (
    <>
<div className="w-full h-screen bg-black overflow-hiddden">
  <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
    <div className="flex-1 flex justify-between items-center">
      <img className="sm:w-[10rem] xs:w-[7rem] z-10" src="https://techakim.com/sam/tg/7268/li/imgs/samlogo2.png" alt="Logo" />
    </div>
    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
        <title></title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

  </header>
  <div className="absolute hidden sm:block md:top-20 sm:top-[8%] xs:top-[10%] xxl:top-4 xxl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] xs:left-[10%]">
    <img className="xxl:h-[680px] xl:h-[500px] md:h-[450px] sm:h-[480px]" src="https://techakim.com/sam/tg/7268/li/imgs/2.png" alt="Incognito Image" />
  </div>
  <div className="lg:px-16 xs:px-4 px-8 pb-4 h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 text-white">
    {/* col -1  */}
    <div className="w-full flex flex-col z-10">
      <h4 className="text-lg font-semibold text-white xl:text-2xl">Hey There</h4>
      <h1 className="xl:text-8xl sm:text-6xl xs:text-3xl font-semibold font-serif mt-2">I'm
        <span className>Ramy</span>
      </h1>
      
      <h4 className="text-rose-500 mt-4 lg:text-2xl">--FullStack Developer</h4>
      <p className="lg:w-[70%] xs:w-full text-white text-sm mt-4 xl:text-xl">Experienced full-stack developer with 4+ years
        of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.</p>
      <div>
        <button className="mt-6 px-6 py-1 bg-rose-500 text-lg text-white rounded-sm lg:text-2xl">Get In Touch</button>
      </div>
    </div>
    {/* col-2 */}
    <div className="w-full flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
      <div className="flex flex-col sm:items-end xs:items-center">
        <div className="inline-flex gap-1 items-center">
          <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">5</h2>
          <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
        </div>
        <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Years of Expireance</h4>
      </div>
      <div className="flex flex-col sm:items-end xs:items-center">
        <div className="inline-flex gap-1 items-center">
          <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">35</h2>
          <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
        </div>
        <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Component Contribution</h4>
      </div>
      <div className="
flex flex-col sm:items-end xs:items-center">
        <div className="inline-flex gap-1 items-center">
          <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">100K</h2>
          <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
        </div>
        <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">User's Got Help</h4>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
