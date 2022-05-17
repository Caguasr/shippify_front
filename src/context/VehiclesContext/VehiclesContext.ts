import {createContext} from "react";
import {Vehicle} from "../../interfaces/Vehicle";

export interface VehicleContextState {
    vehicles: Vehicle[],
    getVehicles: () => void
    addVehicle: (data: any) => void
    deleteVehicle: (id: number) => void
    updateVehicle: (id: number, data: any) => void
}

const VehiclesContext = createContext<VehicleContextState>({
    vehicles: [],
    getVehicles: () => {},
    addVehicle: (data: any) => {},
    deleteVehicle: () => { },
    updateVehicle: () => {}
});

export default VehiclesContext