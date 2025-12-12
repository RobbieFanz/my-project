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
  const [classForIcons, setClassForIcons] = useState('grid gap-[5em] grid-cols-3 md:grid-cols-3 mx-auto py-[3em] overflow-visible relative z-10 p-10')
  const [classForContainer, setClassForContainer] = useState("absolute inset-0 overflow-y-auto")
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
      to: "/about"
    },
];

  useEffect(()=>{
    if(500>window.innerWidth){
      setMobile(false)
      setClassForIcons('grid gap-[1em] grid-cols-3 md:grid-cols-3 mx-auto py-[3em] overflow-visible relative z-10 p-1')
    }
  },[])

  return (
    <>
      <HashRouter>
        <div className="absolute inset-0 overflow-y-auto">
      
          {mobile&&<div className="absolute inset-0 z-0 flex-grow overflow-y-auto">
            <Silk
              speed={3}
              scale={0.85}
              color="#4954bd"
              noiseIntensity={0.1}
              rotation={2.78}
            />
          </div>}
          <div className='absolute z-20 px-15'>
            <GlassIcons items={items} className={classForIcons}/>
          </div>
          
          
            <Routes>
              <Route path='/' element={<Contacts/>}/>
              <Route path='/about' element={<AboutMe/>}/>
            </Routes>
          
          
        </div>
      </HashRouter>
    </>
  )
}

export default App
