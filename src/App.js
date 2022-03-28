import "./style/style.css";
import { Header } from "./components/common/Header";
import { Hero } from "./components/landing/Hero";
import { CuisineOptions } from "./components/common/CuisineOptions";
import { AppDownload } from "./components/common/AppDownload";
import { Partnership } from "./components/Partnership";
import { Restaurants } from "./components/Restaurants";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <h1 className="visually-hidden-focusable">Cartzilla</h1>
      <Hero />
      <CuisineOptions />
      <AppDownload />
      <Partnership />
      <Restaurants />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
