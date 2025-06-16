import React from 'react'

const ExpEducation = () => {
  return (
    <>
        <section className="section expEdu-section" id='resume'>
            <div className="container">
                <div className="grid md:grid-cols-2">

                    <div className="px-2">
                        <h2 className="section-title mb-7 reveal-up">
                            My <span>Learning</span> Journey :
                        </h2>

                        <div className="rd-timeline art-gallery relative">
                            {/* Item 01 */}
                            <div className="rd-timeline-item relative">
                                <div className="rd-timeline-mark-light"></div>
                                <div className="rd-timeline-mark"></div>

                                <div className="rd-timeline-content">
                                    <div className="rd-card-header flex-col lg:flex-row">
                                        <div className="rd-left-side">
                                        <h5 className='cardtitle'>PKM Collage , Bhakta Kavi Narsingh Mehta university</h5>
                                        <div className="art-el-suptitle text-zinc-500 mb-4">Junagadh, Gujarat, India</div>
                                        </div>
                                        <div className="art-right-side mb-4">
                                        <span className="rd-date">jan 2020 - may 2023</span>
                                        </div>
                                    </div>

                                    {/* <p className='inner-text'>I'm graduated From Bhakta kavi narsingh Mehta University with 8.5 CGPA.</p> */}

                                    <ul>
                                        <li className='inner-text'>Graduated with 8.5 CGPA in Bachelor's of computer application.</li>
                                        <li className='inner-text'>Studied core concepts like Web Development, DBMS, Networking, and Programming</li>
                                        <li className='inner-text'>Worked on academic projects related to E-commerce</li>
                                    </ul>

                                </div>
                            </div>

                            {/* Item 02 */}
                            <div className="rd-timeline-item relative">
                                <div className="rd-timeline-mark-light"></div>
                                <div className="rd-timeline-mark"></div>

                                <div className="rd-timeline-content">
                                    <div className="rd-card-header flex-col lg:flex-row">
                                        <div className="rd-left-side">
                                        <h5 className='cardtitle'>HSC ( 12th ) - Deepak High School</h5>
                                        <div className="art-el-suptitle text-zinc-500 mb-4">Amreli, Gujarat, India</div>
                                        </div>
                                        <div className="art-right-side mb-4">
                                        <span className="rd-date">July 2019 - March 2020</span>
                                        </div>
                                    </div>

                                    {/* <p className='inner-text'>Completed Higher Secondary Education in Commerce stream (or Science/Arts – whichever is correct), with 57%. Built a strong foundation in analytical and logical skills during this time.</p> */}

                                    <ul>
                                        <li className='inner-text'>Completed Higher Secondary Education in Arts stream with 57%.</li>
                                        <li className='inner-text'>Developed a keen interest in design and logical reasoning, which led me to explore frontend development</li>
                                    </ul>

                                </div>
                            </div>
                            
                            {/* Item 03 */}
                            <div className="rd-timeline-item relative">
                                <div className="rd-timeline-mark-light"></div>
                                <div className="rd-timeline-mark"></div>

                                <div className="rd-timeline-content">
                                    <div className="rd-card-header flex-col lg:flex-row">
                                        <div className="rd-left-side">
                                            <h5 className='cardtitle'>SSC ( 10th ) - Deepak High School</h5>
                                            <div className="art-el-suptitle text-zinc-500 mb-4">Amreli, Gujarat, India</div>
                                        </div>
                                        <div className="art-right-side mb-4">
                                            <span className="rd-date">July 2017 - March 2018</span>
                                        </div>
                                    </div>
                                    <p className='inner-text'>Cleared Secondary School Certificate (SSC) with 63%. This is where I first discovered my interest in computers and design</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                    <div className="px-2">
                        <h2 className="section-title mb-7 reveal-up">
                            <span>Professional</span> Background :
                        </h2>

                        <div className="rd-timeline art-gallery relative">
                        {/* Item 01 */}
                        <div className="rd-timeline-item relative">
                            <div className="rd-timeline-mark-light"></div>
                            <div className="rd-timeline-mark"></div>

                            <div className="rd-timeline-content">
                            <div className="rd-card-header flex-col lg:flex-row">
                                <div className="rd-left-side">
                                    <h5 className='cardtitle'>Frontend-Developer @ TXlabs</h5>
                                    <div className="art-el-suptitle text-zinc-500 mb-4">Ahmedabad, Gujarat, India</div>
                                </div>
                                <div className="art-right-side mb-4">
                                    <span className="rd-date">jun 2024 - Present</span>
                                </div>
                            </div>

                            <ul>
                                <li className='inner-text'>Developing responsive, high-performance user interfaces using HTML, CSS, JavaScript, and React.</li>
                                <li className='inner-text'>Collaborating with backend developers to integrate secure APIs.</li>
                                <li className='inner-text'>Implementing frontend security measures like input validation, XSS, and CSRF protection.</li>
                                <li className='inner-text'>Optimizing components for speed and performance across modern browsers.</li>
                                <li className='inner-text'>Actively participating in sprint planning, code reviews, and UI/UX discussions.</li>
                            </ul>

                            </div>
                        </div>

                        {/* Item 02 */}
                        <div className="rd-timeline-item relative">
                            <div className="rd-timeline-mark-light"></div>
                            <div className="rd-timeline-mark"></div>

                            <div className="rd-timeline-content">
                            <div className="rd-card-header flex-col lg:flex-row">
                                <div className="rd-left-side">
                                <h5 className='cardtitle'>Fronted Developer @ Glorywebs- Creatives PVT. LTD</h5>
                                <div className="art-el-suptitle text-zinc-500 mb-4">Ahmedabad, Gujarat, India</div>
                                </div>
                                <div className="art-right-side mb-4">
                                <span className="rd-date">April 2023 - May 2024</span>
                                </div>
                            </div>

                            <ul>
                                <li className='inner-text'>Designed and developed dynamic web pages and reusable components using HTML5, CSS3, JavaScript, and jQuery.</li>
                                <li className='inner-text'>Worked closely with backend teams to build secure authentication systems (JWT, OAuth2).</li>
                                <li className='inner-text'>Developed modules with security best practices and implemented logging for error tracking.</li>
                                <li className='inner-text'>Contributed to multiple client projects with responsive and cross-browser compatibility.</li>
                                <li className='inner-text'>Mentored junior developers and guided them on code quality and frontend best practices.</li>
                            </ul>

                            </div>
                        </div>
                        
                        {/* Item 03 */}
                        <div className="rd-timeline-item relative">
                            <div className="rd-timeline-mark-light"></div>
                            <div className="rd-timeline-mark"></div>

                            <div className="rd-timeline-content">
                                <div className="rd-card-header flex-col lg:flex-row">
                                    <div className="rd-left-side">
                                        <h5 className='cardtitle'>Web development Trainer @ IANT - institute of Advance Network Technology</h5>
                                        <div className="art-el-suptitle text-zinc-500 mb-4">Junagadh, Gujarat, India</div>
                                    </div>
                                    <div className="art-right-side mb-4">
                                        <span className="rd-date">Oct 2022 - March 2023</span>
                                    </div>
                                </div>

                                <ul>
                                    <li className='inner-text'>Conducted frontend development training sessions focused on HTML, CSS, JavaScript, and frameworks like React.</li>
                                    <li className='inner-text'>Created and maintained structured course content for student batches.</li>
                                    <li className='inner-text'>Guided students through real-world mini projects and live coding.</li>
                                    <li className='inner-text'>Helped students debug code and understand core web development principles.</li>
                                </ul>

                            </div>
                        </div>
                      
                    </div>

                    </div>
                  
                </div>
            </div>
        </section>
    </>
  )
}

export default ExpEducation