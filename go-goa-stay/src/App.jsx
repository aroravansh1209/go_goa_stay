import { Route, Routes } from "react-router-dom";  // Importing Routes and Route from react-router-dom
import Home from "./components/Home";  // Ensure correct default imports
import Stays from "./components/Stays/Stays";
import VechileRental from "./components/VechileRentals/VechileREntal";
import Packages from "./components/Packages/Packages";
import Cruise from "./components/Cruise/Cruise";
import Activity from "./components/Activities/Activity";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stays" element={<Stays />} />
      <Route path="/rentals" element={<VechileRental />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/cruise" element={<Cruise />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  );
}
