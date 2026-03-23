import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Story from "./components/Story";
import Book from "./components/Book";
import Artikel from "./components/Artikel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ListArtikel from "./ListArtikel";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <About />
              <Story />
              <Book />
              <Artikel />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/ListArtikel"
          element={
            <>
              <Navbar />
              <ListArtikel />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
