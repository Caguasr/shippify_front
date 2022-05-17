export interface Vehicle {
    driver_id: number;
    vehicles:  VehicleElement[];

}

export interface VehicleElement {
    id:            number;
    driver_id:     number;
    plate:         string;
    model:         string;
    type:          string;
    capacity:      string;
    creation_date: Date;
}

