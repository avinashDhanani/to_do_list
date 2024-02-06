import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddToDo from "./pages/AddToDo";
import NoPage from "./pages/NoPage";
import CustomNavBar from "./components/Navigation/Navbar";

function App() {
  return (
    <BrowserRouter>
      <CustomNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddToDo />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
