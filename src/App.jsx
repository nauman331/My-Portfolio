import { Routes, Route, useLocation } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import { useTheme } from "./store/store"
import { CursorifyProvider } from 'react-cursorify'
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Clients from './pages/Clients';
import ShowCv from "./pages/ShowCv";
import { AnimatePresence } from "framer-motion"



function App() {
  const location = useLocation();

  const body = document.querySelector('body');
  const { theme} = useTheme();
  body.className = theme ? "dark" : "light"


  return (
    <>
    <CursorifyProvider 
    delay={10}
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
