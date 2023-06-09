import React, { useContext } from "react";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Main from "./components/Main";
import News from "./components/News";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navigation";
import Detail from "./components/Detail";
import { Films } from "./components/ListOfFilms";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/ThemeContext";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<FilmDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

function FilmDetail() {
  const { id } = useParams();
  const film = Films.find((film) => film.id === parseInt(id));

  return <Detail film={film} />;
}

export default App;
