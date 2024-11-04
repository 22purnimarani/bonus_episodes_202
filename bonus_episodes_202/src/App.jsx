import Notification from "./components/Notification";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Promo from "./components/Promo";
import ServiceSection from "./components/ServiceSection";
import FAQ from "./components/FAQ";
import ProductList from "./components/ProductList"; // Import your ProductList component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Notification />
      <Header />
      <Routes>
        {/* Define the route for the home page */}
        <Route path="/" element={
          <>
            <Hero />
            <Promo />
            <ServiceSection />
            <FAQ />
          </>
        } />
        
        {/* Define the route for the ProductList page */}
        <Route path="/products" element={<ProductList />} />
        
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
