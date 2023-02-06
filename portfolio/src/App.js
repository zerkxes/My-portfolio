import Home from './Home/Home';
import Works from './Works/Works';
import About from './About/About';
import Contact from './Contact/Contact'
import { Route, Routes, Navigate } from 'react-router-dom';
function App() {
  return (
    <div className='container-fluid-md' >
      <Routes>
        <Route path='*' element= {<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/works' element={<Works />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
