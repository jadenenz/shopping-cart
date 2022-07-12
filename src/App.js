import Navbar from "./components/Navbar"
import Homepage from "./Homepage"
import Shop from "./Shop"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="app--container">
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
