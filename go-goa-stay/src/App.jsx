import {Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import Stays from "./components/Stays/Stays";
import VechileRental from "./components/VechileRentals/VechileREntal";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/stays" element={<Stays />} ></Route>
      <Route path="/rentals" element={<VechileRental />} ></Route>
    </Routes>
  );
}