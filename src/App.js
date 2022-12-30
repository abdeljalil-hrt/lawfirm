import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Attorneys from './Attorneys';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog';


const App = () => {
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/service" exact element={<Services/>}/>
            <Route path="/attorneys" exact element={<Attorneys/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
            <Route path="/blog" exact element={<Blog/>}/>
          </Routes>
         
          <Footer />
      </Router>
    </div>
  );
}

export default App;
