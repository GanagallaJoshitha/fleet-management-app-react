import {useState} from "react";
import AddVehicle from "./components/AddVehicle";
import VehicleList from "./components/VehicleList";

function App(){
  const [vehicles, setVehicles] = useState([]);
  const addVehicle = (vehicles) => {
    setVehicles([...vehicles, vehicle]);
  };
  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };
  return(
    <div className="container">
      <h1> Fleet Management System</h1>
    </div>
  )
}