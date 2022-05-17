import MaterialTable from "material-table";
import {Vehicle} from "../../../interfaces/Vehicle";
import {
    Avatar,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from "@mui/material";
import {Delete, DirectionsCar, Edit, ViewAgenda, Visibility} from '@mui/icons-material'
import {useContext} from "react";
import VehiclesContext from "../../../context/VehiclesContext/VehiclesContext";
const vehicles: Vehicle[] = [
    {
        driver_id: 1, vehicles: [
            {
                driver_id: 1,
                id: 1,
                capacity: 'large',
                creation_date: new Date(),
                model: "toyota",
                plate: "ABS12",
                type: "SPORT"
            },
            {
                driver_id: 1,
                id: 2,
                capacity: 'large',
                creation_date: new Date(),
                model: "toyota",
                plate: "ABS12",
                type: "SPORT"
            }
        ]
    }
]
const TableVehicles = (data: any) => {
    const {deleteVehicle} = useContext(VehiclesContext)
    return (
        <MaterialTable
            title="Vehículos por Conductor"
            columns={[
                {title: `# Conductor`, field: 'driver_id'},
                {title: `Información`, render:(rowData) => (
                        <Button variant={"outlined"}>
                            Ver conductor
                        </Button>
                    )},
            ]}
            data={vehicles}

            detailPanel={rowData => {
                return (
                    <List>
                        {rowData.vehicles.map(vehicle => (
                            <ListItem key={vehicle.id}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <DirectionsCar/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={`Modelo: ${vehicle.model}`}
                                              className="capitalize"
                                              secondary={`Placa: ${vehicle.plate} - Capacidad: ${vehicle.capacity} - Tipo: ${vehicle.type}`}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <Edit className="text-cyan-500" />
                                    </IconButton>
                                    <IconButton>
                                        <Delete className="text-red-500" onClick={()=>deleteVehicle(vehicle.id)} />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                )
            }}
        />
    )
}

export default TableVehicles;