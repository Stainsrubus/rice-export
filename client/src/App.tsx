import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import WhatsAppFloat from './pages/WhatsAppFloat';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                {/* <Certified /> */}
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
            }
          />
          <Route path="/product/:index" element={<AllProducts />} />
        </Routes>
        <WhatsAppFloat />
      </Router>
    </QueryClientProvider>
  );
}

export default App;