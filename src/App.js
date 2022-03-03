import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
