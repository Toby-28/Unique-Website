import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="container mx-auto">
      <Header/>
      <Services/>
      <Projects/>
      <Footer/>
    </div>
  );
}
export default App;
