import Header from "./components/Header"; // Header sudah berisi Navbar di dalamnya
import Navbar from "./components/Navbar";
import About from "./components/About";
import Story from "./components/Story";
import Book from "./components/Book";
import Artikel from "./components/Artikel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <main>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Story></Story>
      <Book></Book>
      <Artikel></Artikel>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

export default App
