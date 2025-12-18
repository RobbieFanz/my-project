import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Aurora from './components/aurora'
import { Contacts } from './components/contacts'
import LightPillar from './components/lightpillar'
import Silk from './components/silk'
import GlassSurface from './components/glasssurface'
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
      
          <div className="fixed inset-0 z-0 flex-grow overflow-y-auto xs:visible invisible ">
            <Silk
              speed={3}
              scale={0.85}
              color="#4954bd"
              noiseIntensity={0.1}
              rotation={2.78}
            />
          </div>
          <div className='grid grid-flow-col grid-rows-4 items-center'>
            <div className='z-20 row-span-1'>
              <GlassIcons items={items} className='grid xs:gap-[5em] grid-cols-3 py-[3em] z-10 w-65 xs:w-100'/>
            </div>
            
            <div className='sm:row-span-3 row-span-1'>
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
