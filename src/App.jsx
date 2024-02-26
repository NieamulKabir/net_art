import Banner from "./components/Banner";
import Equipment from "./components/Equipment";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Banner />
        <Equipment />
      </div>

      <Footer />
    </div>
  );
}

export default App;
