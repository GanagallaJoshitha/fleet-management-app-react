function VehicleList({ vehicles, deleteVehicle}){
    return(
        <div>
            <h2>Vehicle List</h2>
            {vehicles.length === 0 && <p>No Vehicles added</p>}
            <ul>
                {vehicles.map((v)=> {
                    <li key = {v.id}>
                        <strong>{v.vehicleNo}</strong> - {v.type} | {v.status}
                        <button onClick={()=> deleteVehicle(v.id)}>X</button>
                    </li>
                })}
            </ul>
        </div>
    );
}
export default VehicleList;