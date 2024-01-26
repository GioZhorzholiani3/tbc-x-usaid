import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Info from "./components/Info";
import Courses from "./components/Courses/Courses";
import Carousel from "./components/Carousel";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Info />
      <Courses />
      <Carousel />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
