import NavBar from "./components/NavBar"
import About from "./pages/About"
import About2 from "./pages/About2"
import Certified from "./pages/Certified"
import FAQ from "./pages/FAQ"
import Home from "./pages/Home"
import Infra from "./pages/Infra"
import ProductGallery from "./pages/ProductGallery"
import Form from "./pages/Form"
import Footer from "./pages/Footer"

function App() {
  return (
<>

<NavBar/>
<section id="home">
<Home />
</section>

<Certified />
<section id="about">
<About  />
</section>
<About2 />
<Infra />
<section id="product">
<ProductGallery />
</section>
<FAQ />
<section id="contact">
<Form />
</section>
<Footer />
</>
  )
}

export default App
