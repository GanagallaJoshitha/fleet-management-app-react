import { useState } from "react";
function AddVehicle({addVehicle}){
    const [vehicleNo, setVehicleNo] = useState("");
    const [type, setType] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addVehicle({
            id: Date.now(), 
            vehicleNo,
            type, 
            status: "Available", 
        });
        setVehicleNo("");
        setType("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="Vehicle Number" value = {vehicleNo} onChange={(e) => setVehicleNo(e.target.value)} required/>
            <input type = "text" placeholder="Vehicle Type" value = {type} onChange={(e) => setType(e.target.value)} required/>
            <button> Add Vehicle</button>
        </form>
    );
}
export default AddVehicle;