import './App.css';

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';
import Home from './pages/home';
import About from './pages/about';
import Melkorvisum from './pages/melkorvisum';
import Reference from './pages/references';
import Contact from './pages/contact';



function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/onas' element={<About />} />
                <Route path='/kontakt' element={<Contact />} />
                <Route path='/melkorvisum' element={<Melkorvisum />} />
                <Route path='/reference' element={<Reference />} />
            </Routes>
        </Router>
    );
}

export default App;
