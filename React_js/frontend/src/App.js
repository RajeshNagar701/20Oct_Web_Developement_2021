import Header from "./component/Header";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<h2>About Page</h2>} />
      </Routes>
    </>
  );
}

export default App;