import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Component/Header"
import CoinDetails from "./Component/CoinDetails"
import Coins from "./Component/Coins"
import Exchange from "./Component/Exchange"
import Home from "./Component/Home"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
  )
}

export default App
