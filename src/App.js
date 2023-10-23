import Footer from "./Footer.js";
import Home from "./Home.js";
import Navbar from './Navbar.jsx';

export default function App(){

  return (
   <>
    <div className="container">
    <Navbar />
    <Home />
    <Footer />
    </div>
   </>
  );

}