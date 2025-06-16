import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/bootstrapIcon.svg',
    label: 'Bootstrap',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skills = () => {
  return (
    <>
        <section className="section" id='skills'>
            <div className="container">
                <h2 className="section-title reveal-up">
                  Essential <span>Tools</span> I use :
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up font-s-16">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) => (
                            <SkillCard 
                            key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills