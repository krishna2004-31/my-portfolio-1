import styles from './App.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './comp/Header';
import Profile from './Pages/Home';
import Project from './Pages/Projects';
import Footer from './comp/Footer';
import Contact from './Pages/Contects';

const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <main>
          <Routes> 
            <Route path='/' element={<Profile />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App ;