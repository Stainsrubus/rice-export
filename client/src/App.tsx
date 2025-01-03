import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import About from "./pages/About";
import About2 from "./pages/About2";
import Certified from "./pages/Certified";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Infra from "./pages/Infra";
import Form from "./pages/Form";
import Footer from "./pages/Footer";
import AllProducts from './pages/AllProducts';
import Products from './pages/Products';

function App() {
  return (
    <Router>
     
      <Routes>
        {/* Single Route for the Root Path that includes all the sections */}
        <Route path="/" element={
          <>
           <NavBar />
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
