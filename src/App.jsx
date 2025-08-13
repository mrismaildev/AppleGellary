import './App.css'
import { Routes,Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Service from './components/pages/Service'

function App() {
  

  return (
    <>
      <Routes>
          <Route path='/' element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='service' element ={<Service />} />
          
        </Route>
     </Routes>
    </>
  )
}

export default App
