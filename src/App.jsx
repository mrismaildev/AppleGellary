import './App.css'
import { Routes,Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'
import Journal from './components/pages/Journal'
import Error from './components/pages/Error'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="journal" element={<Journal />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
