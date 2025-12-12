import { useState } from 'react'
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
  const [count, setCount] = useState(0)
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

  return (
    <>
      <HashRouter>
        <div className="absolute inset-0 overflow-y-auto">
      
          <div className="absolute inset-0 z-0 flex-grow overflow-y-auto">
          {/* <LightPillar
              topColor="#864fb1"
              bottomColor="#307f95"
              intensity={.5}
              rotationSpeed={0.2}
              glowAmount={0.005}
              pillarWidth={6.0}
              pillarHeight={0.2}
              noiseIntensity={0}
              pillarRotation={70}
              interactive={false}
              mixBlendMode="screen"
            />*/}
            <Silk
              speed={3}
              scale={0.85}
              color="#4954bd"
              noiseIntensity={0.1}
              rotation={2.78}
            />
          </div>
          <div className='absolute z-20 px-15'>
            <GlassIcons items={items}/>
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
