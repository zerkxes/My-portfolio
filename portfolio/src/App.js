import Home from './Home/Home';
import Works from './Works/Works';
import About from './About/About';
import Work01 from './Works/Work01';
import Contact from './Contact/Contact';
import Work02 from './Works/Work02'
import Work03 from './Works/Work03';
import { Route, Routes, Navigate } from 'react-router-dom';
function App() {
  return (
    <div className='container-fluid-md' >
      <Routes>
        <Route path='*' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/works' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work01' element={<Work01 />} />
        <Route path='/work02' element={<Work02 />} />
        <Route path='/work03' element={<Work03 />} />
      </Routes>
    </div>
  );
}

export default App;
