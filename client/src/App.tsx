import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import About2 from './pages/About2';
import Certified from './pages/Certified';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Infra from './pages/Infra';
import Form from './pages/Form';
import Footer from './pages/Footer';
import AllProducts from './pages/AllProducts';
import Products from './pages/Products';

function App() {
  const createNavClickHandler = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Scroll to the section with the corresponding ID
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <section id="home">
              <Home />
            </section>
            <Certified />
            <section id="about">
              <About />
            </section>
            <About2 />
            <Infra />
            <section id="product">
              <Products />
            </section>
            <FAQ />
            <section id="contact">
              <Form />
            </section>
            <Footer />
          </>
        } />

        <Route path="/product/:index" element={<AllProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
