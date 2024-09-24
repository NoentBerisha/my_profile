// Main.js
import React, { useState, useContext } from 'react';
import Modal from './Components/Modal';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import LanguageSwitcher from './Components/LanguageSwitcher';
import { LanguageContext } from './Context/LanguageContext';

const Main = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ src: '', type: '', size: '' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { translations } = useContext(LanguageContext);

  const scrollToSection = (sectionId) => {
    setSelectedSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const openModal = (src, type, size) => {
    setModalContent({ src, type, size });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({ src: '', type: '', size: '' });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="my-profile">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          {['personalDetails', 'education', 'certifications', 'skills', 'languages', 'experience', 'cv', 'projects'].map((section) => (
            <li
              key={section}
              className={selectedSection === section ? 'selected' : ''}
              onClick={() => {
                scrollToSection(section);
                setIsSidebarOpen(false); // Close sidebar on section click
              }}
            >
              {translations[section]}
            </li>
          ))}
          <div>
            <LanguageSwitcher />
          </div>
        </ul>
        <button className="toggle-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
        </button>
      </div>
      <div className="content">
        <section id="personalDetails">
          <h2>{translations.personalDetails}</h2>
          <img className='photo' id="my_photo" src={`${process.env.PUBLIC_URL}/my_photo.jpg`} alt="profile" onClick={() => openModal(`${process.env.PUBLIC_URL}/my_photo.jpg`, 'image', 'medium')} />
          <p>{translations.name}: <strong>Noent</strong></p>
          <p>{translations.surname}: <strong>Berisha</strong></p>
          <p>{translations.email}: <strong>noentberisha6@gmail.com</strong></p>
          <p>{translations.phone}: <strong>+383 45 990 275</strong></p>
          <p>{translations.githubLink}: <strong> <a target="_blank" href='https://github.com/NoentBerisha' rel="noreferrer" blank>https://github.com/NoentBerisha</a></strong></p>
        </section>
        <div>
          <section id="education">
            <h2>{translations.education}</h2>
            <h4>Unversity of York, Europe Campus (Bachelor) 2021 - 2024</h4>
            <h4>University of Debrecen (Masters) 2024 - ongoing</h4>
          </section>
          <section id="languages">
            <h2>{translations.languages}</h2>
            <p> <strong>English (Fluent)</strong></p>
            <p> <strong>Albanian (Native)</strong></p>
          </section>
        </div>
        <div>
          <section id="skills">
            <h2>{translations.skills}</h2>
            <ul>
              <li><strong>Java (Spring boot)</strong></li>
              <li><strong>Javascript (React)</strong></li>
              <li><strong>MySQL</strong></li>
              <li><strong>MongoDB</strong></li>
              <li><strong>HTML, CSS</strong></li>
              <li><strong>Express</strong></li>
              <li><strong>Python</strong></li>
              <li><strong>Git</strong></li>
              <li><strong>Docker</strong></li>
              <li><strong>Kubernetes</strong></li>
              <li><strong>Microservices Architecture</strong></li>
              <li><strong>RESTful API</strong></li>
              <li><strong>Agile Methodologies</strong></li>
              <li><strong>Node.js</strong></li>
            </ul>
          </section>
          <section id="certifications">
            <h2>{translations.certifications}</h2>
            <div className="projects">
              <div className="project">
              {['Google Certificate', 'Spring symposium-certificate of attendance', 'Spring symposium-certificate of presentation', 'Spring symposium-certificate of best presentation', 'Study certificate', 'Letter of Award', 'Head List Certificate 1', 'Head List Certificate 2'].map((project, index) => (
  <a href={`${process.env.PUBLIC_URL}/certificates/${project}.pdf`} target="_blank" rel="noopener noreferrer" key={index}>
    <img src={`${process.env.PUBLIC_URL}/certificates/${project}.png`} alt={`project ${index + 1}`} />
  </a>
))}
              </div>
            </div>
          </section>
        </div>
        <div>
          <section id="experience">
            <h2>{translations.experience}</h2>
            <ul>
            <li>{translations.experienceItem1}</li>
              <li>{translations.experienceItem2}</li>
              <li>{translations.experienceItem3}</li>
              <li>{translations.experienceItem4}</li>
              <br></br>
            </ul>
          </section>
          <section id="cv">
            <h2>{translations.cv}</h2>
            <div>
              <img className='photo' src="CV.png" alt="cv" />
              <a href={`${process.env.PUBLIC_URL}/CV Resume.pdf`} rel="noreferrer" target='blank'>{translations.seeCV}</a>
            </div>
          </section>
        </div>
        <section id="projects">
          <h2>{translations.projects}</h2>
          
          <div className="projects">
          <h1>Travelling Assistant</h1>
            <div className="project">
              
              {['login page screenshot.png', 'landing page screenshot.png', 'img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png', 'img7.png', 'img8.png', 'img10.png', 'img11.png', 'img12.png', 'diagram.png'].map((project, index) => (
                <img src={`${process.env.PUBLIC_URL}/thesis/${project}`} alt={`project ${index + 1}`} onClick={() => openModal(`${process.env.PUBLIC_URL}/thesis/${project}`, 'image', 'medium')} />
              ))}
            </div>
            <p className='line'>{translations.thesis}</p>
            
            
            <h1>XDental</h1>
            <div className="project">
              {['img1.png', 'img2.png', 'img3.png', 'img4.png'].map((project, index) => (
                <img src={`${process.env.PUBLIC_URL}/xDental/${project}`} alt={`project ${index + 1}`} onClick={() => openModal(`${process.env.PUBLIC_URL}/xDental/${project}`, 'image', 'medium')} />
              ))}
              <div className="video-thumbnail" onClick={() => openModal(`${process.env.PUBLIC_URL}/xDental/video.mp4`, 'video', 'large')}>
                <img src={`${process.env.PUBLIC_URL}/xDental/img1.png`} alt="Video Thumbnail" />
                <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
              </div>
            </div>
            <p className='line'>{translations.xDental}</p>

            <h1>Potizo</h1>
            <div className="project">
              {['img1 (1).png', 'img1 (2).png', 'img1 (3).png', 'img1 (4).png', 'img1 (5).png', 'img1 (6).png'].map((project, index) => (
                <img src={`${process.env.PUBLIC_URL}/industrial/${project}`} alt={`project ${index + 1}`} onClick={() => openModal(`${process.env.PUBLIC_URL}/industrial/${project}`, 'image', 'medium')} />
              ))}
            </div>
            <p className='line'>{translations.industrial}</p>
            <h1>Chat app</h1>
            <div className="project">
              
              <div className="video-thumbnail" onClick={() => openModal(`${process.env.PUBLIC_URL}/chat app/Slide 2.mp4`, 'video', 'large')}>
                <img src={`${process.env.PUBLIC_URL}/chat app/Screenshot (148).png`} alt="Video Thumbnail" />
                <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
              </div>
            </div>
            <p className='line'>{translations.chatApp}</p>
          </div>
          
              <h1>RAM simulator</h1>
            <div className="project">
             
              <div className="video-thumbnail" onClick={() => openModal(`${process.env.PUBLIC_URL}/Os/Slide1.mp4`, 'video', 'large')}>
                <img src={`${process.env.PUBLIC_URL}/Os/img1.png`} alt="Video Thumbnail" />
                <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
              </div>
            </div>
            <p className='line'>{translations.Os}</p>
            
            <h1> Social Media app</h1>
            <div className="project">
              {['img1.png', 'img2.png', 'img3.png'].map((project, index) => (
                <img src={`${process.env.PUBLIC_URL}/socialMedia/${project}`} alt={`project ${index + 1}`} onClick={() => openModal(`${process.env.PUBLIC_URL}/socialMedia/${project}`, 'image', 'medium')} />
              ))}
              
            </div>
            <p className='line'>{translations.socialMedia}</p>

            <h1>Informative website</h1>
            <div className="project">
              {['img1.png', 'img2.png', 'img3.png'].map((project, index) => (
                <img src={`${process.env.PUBLIC_URL}/webYear1/${project}`} alt={`project ${index + 1}`} onClick={() => openModal(`${process.env.PUBLIC_URL}/webYear1/${project}`, 'image', 'medium')} />
              ))}
              <div className="video-thumbnail" onClick={() => openModal(`${process.env.PUBLIC_URL}/webYear1/video.mp4`, 'video', 'large')}>
                <img src={`${process.env.PUBLIC_URL}/webYear1/img1.png`} alt="Video Thumbnail" />
                <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
              </div>
            </div>
            <p className='line'>{translations.webYear1}</p>

            {/* <h1>Deploy and Destroy</h1>
            <div className="project">
              {['img1.png', 'img2.png', 'img3.png'].map((project, index) => (
                <img src={`${process.env.PUBLIC_URL}/webYear1/${project}`} alt={`project ${index + 1}`} onClick={() => openModal(`${process.env.PUBLIC_URL}/webYear1/${project}`, 'image', 'medium')} />
              ))}
              <div className="video-thumbnail" onClick={() => openModal(`${process.env.PUBLIC_URL}/webYear1/video.mp4`, 'video', 'large')}>
                <img src={`${process.env.PUBLIC_URL}/webYear1/img1.png`} alt="Video Thumbnail" />
                <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
              </div>
            </div>
            <p className='line'>{translations.deployDestroy}</p>
            <br></br> */}
        </section>
      </div>
      <Modal show={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};

export default Main;