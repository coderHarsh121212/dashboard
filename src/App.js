import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<HomePage />} path="/:id"></Route>
          <Route element={<UserPage />} path="/:id"></Route>
        </Routes>
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
