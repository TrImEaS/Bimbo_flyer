import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from "react"
import { Admin, Home } from './Pages/Pages.jsx'

export default function App() {
  return (
    <main className='relative flex flex-col items-center justify-between text-black min-h-screen min-w-[390px] h-full p-0 m-0 font-body'>
      <ScrollToTopOnLocationChange />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin_page" element={<Admin/>}/>
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