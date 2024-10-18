import { Routes, Route, useLocation } from "react-router-dom"
import { useTheme } from "./store/store"
import { CursorifyProvider } from 'react-cursorify'
import { AnimatePresence } from "framer-motion"
import {
  Homepage,
  Navbar,
  About,
  Projects,
  Contact,
  Clients,
  ShowCv
} from "./paths"



function App() {
  const location = useLocation();

  const body = document.querySelector('body');
  const { theme} = useTheme();
  body.className = theme ? "dark" : "light"


  return (
    <>
    <CursorifyProvider 
    delay={7}
    >
    <Navbar />
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact index path="/" element={<Homepage />} />
        <Route exact path="/aboutme" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/cvpage" element={<ShowCv />} />
      </Routes>
      </AnimatePresence>
      </CursorifyProvider>
   
    </>
  )
}

export default App
