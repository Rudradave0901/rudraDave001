import { ButtonOutline, ButtonPrimary } from './Button'

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36 pb-20'>
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

            <div>
                <div className="flex items-center gap-3">
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src="/images/avatar-1.png" alt="" width={40} height={40} className='img-cover rounded-lg' />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 font-s-14 tracking-wide relative">
                        Available for work
                        <span className='absolute heroImg-wrap w-2 h-2 rounded-full bg-emeraid-400'>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                        </span>
                    </div>
                </div>

                <h2 className='headline-1 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-1'> Crafting Modern, Scalable Web Experiences </h2>

                <div className="designation flex items-center gap-1.5 text-zinc-400 font-s-16">
                    <span>Front-End Developer</span>
                    <div className="seprattor"></div>
                    <span>Web Designer</span>
                </div>


                <div className="flex items-center gap-3">
                    <ButtonPrimary
                        herf={'/resume/Rudra_Dave_Resume.pdf'}
                        target={'_blank'}
                        label="Download CV"
                        iconImg="/images/downloadIcon.svg"
                        classes='flex align-center'
                        download
                    />

                    <ButtonOutline
                    herf={"#about"}
                    label={"Scroll down"}
                    iconImg="/images/bottomArrow.svg"
                    classes='flex align-center'
                    />

                </div>
            </div>

            <div className="hidden lg:block">
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[60px] overflow-hidden'>
                    <img src="/images/hero-banner.png" alt="Banner Img" height={800} width={656} className='w-full' />
                </figure>
            </div>            

        </div>
    </section>
  )
}

export default Hero 