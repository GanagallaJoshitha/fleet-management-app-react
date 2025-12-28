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
            <input</input>
        </form>
    )
}