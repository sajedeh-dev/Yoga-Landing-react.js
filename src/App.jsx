import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ComponyLogo from "./components/ComponyLogo";
import PerpuseSection from "./components/PurposeSection"
import FeatureSection from "./components/FeatureSection";
import ScheduleSection from "./components/ScheduleSection";
import MonitorSection from "./components/MonitorSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import NewaLetterService from "./components/NewaLetterService";
import Footer from "./components/Footer";
import Category from "./components/Category";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className=" absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/20 to-orange-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <ComponyLogo/>
        <PerpuseSection/>
        <FeatureSection/>
        <Category/>
        <ScheduleSection/>
        <MonitorSection/>
        <PricingSection/>
        <ServicesSection/>
        <TestimonialSection/>
        <NewaLetterService/>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
