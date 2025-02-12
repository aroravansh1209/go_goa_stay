import "../../Styles/VechileLocationSelector.css"

const locations = [
    "Panaji",
    "Margao",
    "Vasco da Gama",
    "Ponda",
    "Mapusa",
    "Calangute",
    "Anjuna",
    "Baga",
    "Candolim",
    "Colva",
  ];
  
  export function VechileLocationSelector({ value, onChange }) {
    return (
      <div className="location-selector2">
        <label>Location</label>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Select location...</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    );
  }
  