import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './elements/header';
import Home from './elements/home';
import AboutMe from './elements/about-me';
import Skills from './elements/skill';
import Projects from './elements/projects';
import Certificates from './elements/certificates';
import Contacts from './elements/contacts';
import Footer from './elements/footer';
import CertificateModal from './elements/certificate-modal';

import { useGlobalContext } from "./elements/context";



function App() {

  const {showCertModal} = useGlobalContext();

  return (
    <div className='overflow-hidden'>
      <header className='fixed-top'>
        <Header/> 
      </header>
      <main className='container-fluid p-0'>         
        <Home/> 
        <AboutMe/> 
        <Skills/>
        <Projects/>
        <Certificates />
        {showCertModal && <CertificateModal/>}
        <Contacts/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
