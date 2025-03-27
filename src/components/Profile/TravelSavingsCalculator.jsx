import React, { useState } from "react";
import "./TravelSavingsCalculator.css";

const TravelSavingsCalculator = () => {
  // State for inputs
  const [distance, setDistance] = useState(13240); // Total distance traveled (km)
  const [lifespanYears, setLifespanYears] = useState(6); // Default: 6 years
  const [dailyDistance, setDailyDistance] = useState(36); // Default: 36 km/day

  // Cost constants based on specs
  const electricCostPerKm = 0.32; // ₹0.32/km (1.8 kWh * ₹8 / 45 km)
  const fuelCostPerKm = 3; // ₹3/km (petrol bike)
  const initialCostElectric = 60000; 
  const initialCostFuel = 100000; // 
  const batteryReplacementCost = 25000; // ₹25,000 (Li-ion 30Ah, 60V estimate)
  const maintenanceElectricPerYear = 3000;
  const maintenanceFuelPerYear = 5000;
  const rangePerCharge = 45; // 45 km per charge

  // State for collapsible sections
  const [showDistanceDetails, setShowDistanceDetails] = useState(false);
  const [showSavingsDetails, setShowSavingsDetails] = useState(false);

  // Calculations
  const years = parseFloat(lifespanYears);
  const totalDistance = parseFloat(distance);
  const chargesNeeded = totalDistance / rangePerCharge;
  const batteryReplacements = Math.max(0, Math.floor(chargesNeeded / 750) - 1); // 750 cycles per battery

  const totalFuelCost =
    initialCostFuel + totalDistance * fuelCostPerKm + maintenanceFuelPerYear * years;
  const totalElectricCost =
    initialCostElectric +
    totalDistance * electricCostPerKm +
    batteryReplacements * batteryReplacementCost +
    maintenanceElectricPerYear * years;
  const totalSavings = totalFuelCost - totalElectricCost;

  const avgDailyDistance = (totalDistance / (years * 365)).toFixed(2);
  const longestDistance = 120; // Static example
  const monthlyDistance = dailyDistance * 30;
  const dailySavings = dailyDistance * (fuelCostPerKm - electricCostPerKm);

  // Toggle functions to close the other section
  const toggleDistanceDetails = () => {
    setShowDistanceDetails(!showDistanceDetails);
    setShowSavingsDetails(false); // Close savings details
  };

  const toggleSavingsDetails = () => {
    setShowSavingsDetails(!showSavingsDetails);
    setShowDistanceDetails(false); // Close distance details
  };

  return (
    <div className="container">
      <h2 className="title">E2W Lifetime Stats & Savings</h2>

      {/* Input Section */}
      <div className="input-section">
        <label>
          Total Distance (km):
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(Math.max(0, e.target.value))}
            min="0"
          />
        </label>
        <label>
          Daily Distance (km):
          <input
            type="number"
            value={dailyDistance}
            onChange={(e) => setDailyDistance(Math.max(0, e.target.value))}
            min="0"
          />
        </label>
        <label>
          Lifespan (years):
          <input
            type="number"
            value={lifespanYears}
            onChange={(e) => setLifespanYears(Math.max(1, Math.min(20, e.target.value)))}
            min="1"
            max="20"
          />
        </label>
      </div>

      {/* Travel Distance Box */}
      <div className="box travel-box" onClick={toggleDistanceDetails}>
        <h3 className="headingh3">You Travelled</h3>
        <p className="distance">{totalDistance.toLocaleString()} km</p>
        <div className={`details ${showDistanceDetails ? "show" : ""}`}>
          <p><strong>Avg Daily Distance:</strong> {avgDailyDistance} km</p>
          <p><strong>Longest Distance:</strong> {longestDistance} km</p>
          <p><strong>Monthly Distance:</strong> {monthlyDistance.toLocaleString()} km</p>
        </div>
      </div>

      {/* Savings Box */}
      <div className="box savings-box" onClick={toggleSavingsDetails}>
        <h3 className="headingh3">You Saved</h3>
        <p className={`savings ${totalSavings >= 0 ? "positive" : "negative"}`}>
          ₹ {totalSavings.toLocaleString()}
        </p>
        <div className={`timeline ${showSavingsDetails ? "show" : ""}`}>
          <div className="timeline-item">
            💰 Fuel Bike Cost: ₹{totalFuelCost.toLocaleString()}
          </div>
          <div className="timeline-item">
            ⚡ Electric Bike Cost: ₹{totalElectricCost.toLocaleString()}
          </div>
          <div className="timeline-item">
            🔋 Battery Replacements: {batteryReplacements} (₹{(batteryReplacements * batteryReplacementCost).toLocaleString()})
          </div>
          <div className="timeline-item">
            🎉 Total Savings: ₹{totalSavings.toLocaleString()}
          </div>
          <div className="timeline-item">
            आवाज़ उठाना: 📅 Daily Savings: ₹{dailySavings.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      {/* Specs & Info */}
      <div className="info">
        <p><strong>Your E2W Specs:</strong></p>
        <ul>
          <li>1200W BLDC Motor, 30Ah Li-ion Battery</li>
          <li>Range: 45 km/charge, Speed: 70 kmph</li>
          <li>Charging: 350W Fast Charge, Torque: 40Nm @ 500 RPM</li>
          <li>Payload: 100kg, Wheels: 14 inch</li>
        </ul>
        <p>Battery lifespan: ~33,750 km (750 cycles). Savings based on ₹0.32/km (electric) vs. ₹3/km (petrol).</p>
      </div>
    </div>
  );
};

export default TravelSavingsCalculator;