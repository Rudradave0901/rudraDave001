import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/project-01.png',
    title: 'Animated Portfolio',
    tags: ['Portfolio', 'Responsive Design', 'HTML', 'Animation'],
    projectLink: 'https://rudradaveportfolio.netlify.app/',
    className: 'disabledProject'
  },
  {
    imgSrc: '/images/project-02.png',
    title: 'France Media Groupe',
    tags: ['Information', 'Media'],
    projectLink: 'https://glorydemo.agency/HTML/FranceMediaGroupe/'
  },
  {
    imgSrc: '/images/project-08.png',
    title: 'Online Degree Info',
    tags: ['Landing Page', 'Education'],
    projectLink: 'https://www.onlinedegreeinfo.com/'
  },
  {
    imgSrc: '/images/project-04.png',
    title: 'Antelope Canyon Shuttle',
    tags: ['Web-design', 'Photo Gallery'],
    projectLink: 'https://lowerantelopecanyonshuttle.com/'
  },
  {
    imgSrc: '/images/project-05.png',
    title: '4 Direction Media',
    tags: ['eCommerce', 'Media', 'Animation'],
    projectLink: 'https://www.4directionsmedia.com/'
  },
  {
    imgSrc: '/images/project-07.png',
    title: 'BMP',
    tags: ['Music', 'Portfolio', 'Mockup'],
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
                        works.map(({imgSrc, title, tags, projectLink, className = ''}, key) => (
                            <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
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