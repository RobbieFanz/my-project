import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Contacts } from './components/contacts'
import Silk from './components/silk'
import { FaHome, FaUser, FaCog, FaInfo, FaFolderOpen } from "react-icons/fa";
import GlassIcons from './components/glassicons'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AboutMe } from './components/aboutMe'
import { Projects } from './components/projects'
//b1544f

function App() {
  const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/' }
];
const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];


  const [mobile, setMobile] = useState(true)
  const [classForIcons, setClassForIcons] = useState('grid xs:gap-[5em] grid-cols-3 py-[3em] overflow-visible relative z-10 justify-self-start')
  const [classForContainer, setClassForContainer] = useState("relative min-h-screen w-full overflow-y-auto z-10")
  const [classForGlassCont, setClassForGlassCont] = useState("absolute z-20")
  const items = [
    {
      label: "Home",
      icon: <FaHome />,
      color: "clear",
      to: "/"
    },
    {
      label: "About Me",
      icon: <FaInfo />,
      color: "clear",
      to: "/about"
    },
    {
      label: "Projects",
      icon: <FaFolderOpen />,
      color: "clear",
      to: "/projects"
    },
];

  return (
    <>
      <HashRouter>
      
          {mobile&&<div className="fixed inset-0 z-0 flex-grow overflow-y-auto xs:visible invisible ">
            <Silk
              speed={3}
              scale={0.85}
              color="#4954bd"
              noiseIntensity={0.1}
              rotation={2.78}
            />
          </div>}
          <div className='relative z-20 flex flex-col items-center'>
            <div className='absolute z-20'>
              <GlassIcons items={items} className='grid xs:gap-[5em] grid-cols-3 py-[3em] overflow-visible relative z-10 justify-self-start'/>
            </div>
            
            <div className=''>
              <Routes>
                <Route path='/' element={<Contacts/>}/>
                <Route path='/about' element={<AboutMe/>}/>
                <Route path='projects' element={<Projects/>}/>
              </Routes>
            </div>
          </div>
      </HashRouter>
    </>
  )
}

export default App
