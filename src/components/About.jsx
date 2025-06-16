import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 25
  },
  {
    label: 'Years of experience',
    number: 3
  }
];

const About = () => {
  return (
    <>
        <section id='about' className='section'>
            <div className="container">

              <h4 className="section-title mb-7">Something <span>About Me : </span></h4>

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className='text-zinc-300 mb-4 md:mb-8 font-s-20 md:max-w-[60ch]'>
                        Hi, I’m Rudra — a creative web developer who loves bringing ideas to life through code.
                        I specialize in building modern, scalable websites that deliver both beauty and performance. Let’s turn your vision into something unforgettable.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number},key) => (
                                <div className="" key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className='font-semibold font-s-36'>{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="font-s-14 text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img src="/images/logo.svg" alt="Logo" width={30} height={30} className='ml-auto md:w-[40px] md:h-[40px]' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About