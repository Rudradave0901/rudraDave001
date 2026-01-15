import React from 'react'
import ProjectCard from './ProjectCard';

export const works = [
  {
    imgSrc: '/images/project-01.png',
    title: 'E-Commerce React App',
    stack: {
      frontend: ['React', 'TypeScript', 'Redux Toolkit', 'TailwindCSS'],
      backend: ['Firebase Auth', 'Firestore'],
      tools: ['Vite', 'Vercel', 'React Hot Toast'],
      tags: ['Auth + protected checkout', 'Cart persistence', 'Order history', 'Responsive UI']
    },
    projectLink: 'https://your-production-domain.vercel.app/'
    // className: 'disabledProject'
  },
  {
    imgSrc: '/images/project-08.png',
    title: 'Online Degree Info',
    stack: { 
      frontend: ['HTML', 'CSS', 'JavaScript', 'Jquery'], 
      backend: ['Laravel', 'MySQL'],
      tags: ['Landing Page', 'Education Website', 'Online Degree Reviews']
    },
    projectLink: 'https://www.onlinedegreeinfo.com/'
  },
  {
    imgSrc: '/images/project-04.png',
    title: 'Antelope Canyon Shuttle',
    stack: { 
      frontend: ['HTML', 'CSS', 'JavaScript','jQuery'], 
      tags: ['Web-design', 'Photo Gallery', 'Landing page', 'Shuttle Service', 'Tour Booking']
    },
    projectLink: 'https://lowerantelopecanyonshuttle.com/'
  },
  {
    imgSrc: '/images/project-05.png',
    title: '4 Direction Media',
    stack: { 
      frontend: ['HTML', 'CSS', 'JavaScript','jQuery'], 
      Backend: ['PHP', 'MySQL', 'Wordpress'],
      tags: ['eCommerce', 'Media', 'Animation', 'Online Markting', 'Development Agency']
    },
    projectLink: 'https://www.4directionsmedia.com/'
  },
  {
    imgSrc: '/images/project-07.png',
    title: 'BMP',
    stack: { 
      frontend: ['HTML', 'CSS', 'JavaScript','jQuery'], 
      tags: ['Music', 'Personal Portfolio', 'Mockup', 'Landing Page','Poadcast']
    },
    projectLink: 'https://glorydemo.agency/HTML/bmp/'
  },
];

const Work = () => {
  return (
    <>
        <section className="section min-h-screen scroll-mt-28 " id='work'>
            <div className="container">
                <h2 className="section-title mb-7 reveal-up">
                    My <span>Portfolio</span> Highlights :
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
                    {
                        works.map(({imgSrc, title, stack, tags, projectLink, className = ''}, key) => (
                            <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            stack={stack} 
                            projectLink={projectLink}
                            classes={`reveal-up ${className}`}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Work