import './App.css';
import AppointmentPage from './pages/AppointmentPage';
import FAQ from './pages/FAQ';
import Footer from './pages/Footer';
import HomePage1 from './pages/HomePage1';
import HomePage2 from './pages/HomePage2';
import HomePage3 from './pages/HomePage3';
import Insurance from './pages/Insurance';
import ScrollTexts from './pages/ScrollTexts';
import Testimonial from './pages/Testimonial';

function App() {
  return (
    <>
      <HomePage1/>
      <HomePage2/>
      <HomePage3/>
      <AppointmentPage/>
      <ScrollTexts/>
      <Testimonial/>
      <Insurance/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
