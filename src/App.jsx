import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Info from "./components/Info";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Info />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
