import "./styles/style.scss";
import ScrollToTop from "react-scroll-to-top";
//import components
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Events from "./components/Events";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollToTop smooth={true} />
      <Header />
      <Carousel />
      <Summary />
      <Events />
      <Footer />
    </>
  );
}

export default App;
