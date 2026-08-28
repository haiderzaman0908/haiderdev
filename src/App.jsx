import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollProgress from './components/ScrollProgress/ScrollProgress.jsx'
import CursorGlow from "./components/cursormotion/CursorGlow.jsx";
function App() {
  return (
      <div className="relative min-h-screen overflow-hidden">
    <>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
    </div>
  )
}

export default App
