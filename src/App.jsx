import Nav from './Components/Nav/Nav.jsx' 
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from "react"
import { Home } from './Pages/Pages.jsx'

export default function App() {
  return (
    <main className='relative flex flex-col items-center justify-between text-black min-h-screen min-w-[390px] h-full p-0 m-0 font-body'>
      <ScrollToTopOnLocationChange />
      <Nav/>
      <Routes>
        <Route path="/others/test-apps/" element={<Home/>}/>
      </Routes>
    </main>
  )
}

function ScrollToTopOnLocationChange() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}