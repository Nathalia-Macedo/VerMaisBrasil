import Header from "./components/header"
import HeroSection from "./components/heroSection"
import AboutSection from "./components/AboutSection"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import BenefitsSection from "./components/BenefitsSection"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <AboutSection/>
      <BenefitsSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default App
