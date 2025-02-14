import {Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import Stays from "./components/Stays/Stays";
import VechileRental from "./components/VechileRentals/VechileREntal";
import Packages from "./components/Packages/Packages";
import Cruise from "./components/Cruise/Cruise";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/stays" element={<Stays />} ></Route>
      <Route path="/rentals" element={<VechileRental />} ></Route>
      <Route path="/packages" element={<Packages />} ></Route>
      <Route path="/cruise" element={<Cruise />} ></Route>
    </Routes>
  );
}