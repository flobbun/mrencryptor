import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/fixed/Header';
import Footer from './components/fixed/Footer';
import Encryptor from './components/Encryptor';
import Presentation from './components/Presentation';
import Security from './components/pages/Security';
import Contact from './components/pages/Contact';
import Signup from './components/pages/Signup';

const firstPage = () =>
<main>
  <Presentation></Presentation>
  <Encryptor></Encryptor>
</main>;

function App() {
  return (
    <div className='fadein grid bgimg bg-norepeat bg-fixed bg-cover'>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={firstPage()} />
          <Route path='/security' element={<Security/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
