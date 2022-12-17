
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import Board from "./pages/board";
import Home from "./pages/home";

function App() {
  return (
    <div className="bg-[#16213E] text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
