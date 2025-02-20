import { Route, Routes } from "react-router-dom";  // Importing Routes and Route from react-router-dom
import Home from "./components/Home";  // Ensure correct default imports
import Stays from "./components/Stays/Stay";
import VechileRental from "./components/VechileRentals/VechileREntal";
import Packages from "./components/Packages/Packages";
import Cruise from "./components/Cruise/Cruise";
import Activity from "./components/Activities/Activity";
import ActivityPage from "./components/Activities/ActivityPage";
import CruiseDetailsPage from "./components/Cruise/CruiseDetails";
import PackagePage from "./components/Packages/PackagesPage";
import AccommodationDetailPage from "./components/Stays/Stay";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stays" element={<Stays />} />
      <Route path="/stays/:staysId" element={<AccommodationDetailPage />} />
      <Route path="/rentals" element={<VechileRental />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:packagesId" element={<PackagePage />} />
      <Route path="/cruise" element={<Cruise />} />
      <Route path="/cruise/:cruiseId" element={<CruiseDetailsPage />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/activity/:activityId" element={<ActivityPage />} />
    </Routes>
  );
}
