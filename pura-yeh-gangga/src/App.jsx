import Header from "./components/Header"; // Header sudah berisi Navbar di dalamnya
import Navbar from "./components/Navbar";
import About from "./components/About";
import Story from "./components/Story";
function App() {
  return (
    <main>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Story></Story>
    </main>
  )
}

export default App
