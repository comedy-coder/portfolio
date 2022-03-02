import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Productlist from "./components/ProductList/ProductList";
import Toogle from "./components/Toogle/toogle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext)

  const darkMode = theme.state.darkMode;
  return(
  <div style={{backgroundColor : darkMode ? "white" : "#222" , color : darkMode ? "black" : "white" , overflowX :"hidden"}}>
  
              < Toogle />
              <Intro />
              <About />
              <Productlist />
              <Contact />
        



    
  </div>)
};

export default App;