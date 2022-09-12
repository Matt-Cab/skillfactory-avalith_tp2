import { Routes, Route } from "react-router-dom";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Home from "./components/Home";
import TableContainer from "./components/TableContainer";
import SingleCharacterCard from "./components/SingleCharacterCard";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/form"
            element={<Form />}
          />
          <Route
            path="/users"
            element={<TableContainer />}
          />
          <Route
            path="/cards"
            element={<CardsContainer />}
          />
          <Route
            path="/cards/:id"
            element={<SingleCharacterCard />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
