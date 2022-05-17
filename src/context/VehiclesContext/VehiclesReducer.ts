import {DELETE_VEHICLE, GET_ALL_VEHICLES} from "../types";
import {VehicleElement} from "../../interfaces/Vehicle";

interface Action {
    type: string,
    payload: any
}
export default (state: any, action: Action) => {
    switch (action.type) {
        case GET_ALL_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            }
        default:
            return state;
    }
}