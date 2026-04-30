import './App.css';
import Banner from './components/banner/Banner';
import Doctors from './components/doctors/Doctors';
import Facilities from './components/facilities/Facilities';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Partners from './components/partners/Partners';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Doctors />
      <Partners />
      <Facilities />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
