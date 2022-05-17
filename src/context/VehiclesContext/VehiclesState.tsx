import VehiclesContext from './VehiclesContext'
import React, {useReducer} from "react";
import VehiclesReducer from "./VehiclesReducer";
import {AxiosConfig} from "../../config/AxiosConfig";
import {ADD_VEHICLE, GET_ALL_VEHICLES} from "../types";
import {useSnackbar} from "notistack";

const VehiclesState = (props: any) => {
    const { enqueueSnackbar } = useSnackbar();
    const initialState = {
        vehicles: []
    }

    const getVehicles = async () => {
        try {
            const vehicles = await AxiosConfig.get(`/vehicles`);
            dispatch({
                type: GET_ALL_VEHICLES,
                payload: vehicles.data
            })
        } catch (e) {
            console.log(e)
            enqueueSnackbar("An occurred a error to get vehicles", {variant:"error"})
        }
    }

    const addVehicle = async (data: any) => {
        try {
            await AxiosConfig.post(`/vehicles/`, data);
            dispatch({
                type: ADD_VEHICLE,
                payload: ''
            })
            enqueueSnackbar("Vehicle created successfully", {variant:"success"})
        } catch (e) {
            console.log(e)
            enqueueSnackbar("An occurred a error to add vehicles", {variant:"error"})
        }
    }

    const deleteVehicle = async (id: number) => {
        try {
            const as = await AxiosConfig.delete(`/vehicles/${id}`);
            dispatch({
                type: ADD_VEHICLE,
                payload: ''
            })
            enqueueSnackbar("Vehicle deleted successfully", {variant:"success"})
        } catch (e) {
            console.log(e)
            enqueueSnackbar("An occurred a error to delete vehicles", {variant:"error"})
        }
    }

    const updateVehicle = async (id: number,data: any) => {
        try {
            await AxiosConfig.put(`/vehicles/${id}`, data);
            dispatch({
                type: ADD_VEHICLE,
                payload: ''
            })
            enqueueSnackbar("Vehicle updated successfully", {variant:"success"})
        } catch (e) {
            console.log(e)
            enqueueSnackbar("An occurred a error to updated vehicles", {variant:"error"})
        }
    }

    const [state, dispatch] = useReducer(VehiclesReducer, initialState);

    return (
        <VehiclesContext.Provider
            value={{
                vehicles: state.vehicles,
                getVehicles,
                addVehicle,
                deleteVehicle,
                updateVehicle
            }}
        >
            {props.children}
        </VehiclesContext.Provider>
    )
}

export default VehiclesState;