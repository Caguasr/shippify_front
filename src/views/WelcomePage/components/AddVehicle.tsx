import {useFormik} from "formik"
import {Button, Card, CardContent, CardHeader, Grid, IconButton, TextField} from "@mui/material";
import {Close} from "@mui/icons-material";
import {VehicleElement} from "../../../interfaces/Vehicle";
import {useContext} from "react";
import VehiclesContext from "../../../context/VehiclesContext/VehiclesContext";

const AddVehicle = ({setOpen}:any) => {
    const {addVehicle} = useContext(VehiclesContext)
    const formik = useFormik({
        initialValues: {
            driver_id: null,
            plate: "",
            model: "",
            type: "",
            capacity: "",
        },
        onSubmit: (values) => {
            addVehicle(values)
            setOpen(false)
        }
    })
    return (
        <Card>
            <CardHeader title={"Add new Car"}
                action={
                    <IconButton onClick={()=>setOpen(false)}>
                        <Close/>
                    </IconButton>
                }
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Model"
                            size={"small"}
                            onChange={formik.handleChange}
                            value={formik.values.model}
                            id="model"
                            name="model"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Plate"
                            size={"small"}
                            onChange={formik.handleChange}
                            value={formik.values.plate}
                            name="plate"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Type"
                            size={"small"}
                            onChange={formik.handleChange}
                            value={formik.values.type}
                            name="type"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Capacity"
                            size={"small"}
                            onChange={formik.handleChange}
                            value={formik.values.capacity}
                            name="capacity"
                        />
                    </Grid>
                    <Grid item xs={12} container justifyContent={"center"}>
                        <Button variant={"outlined"} onClick={formik.submitForm}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default AddVehicle