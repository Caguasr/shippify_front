import {useContext, useEffect, useState} from "react";
import VehiclesContext from "../../context/VehiclesContext/VehiclesContext";
import {AddVehicle, AppBarWelcome, TableVehicles} from "./components";
import {Dialog, Grid} from "@mui/material";


const WelcomePage = () => {
    const {vehicles, getVehicles} = useContext(VehiclesContext)
    const [open, setOpen] = useState(false);
    useEffect(() => {
        getVehicles()
    }, [])
    return (
        <>
            <AppBarWelcome setOpen={setOpen}/>
            <div className={"flex justify-center p-10 mt-20"}>
                <div className="w-1/2 h-1/3 scroll-auto">
                    <TableVehicles/>
                </div>
            </div>
            <Dialog open={open}>
                <AddVehicle setOpen={setOpen} />
            </Dialog>
        </>

    )
}

export default WelcomePage;