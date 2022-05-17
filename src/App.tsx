import React from 'react';
import './App.css';
import {WelcomePage} from "./views";
import VehiclesState from "./context/VehiclesContext/VehiclesState";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./theme";
import {SnackbarProvider} from "notistack";

function App() {
    return (
        <SnackbarProvider maxSnack={3} anchorOrigin={{vertical:'top', horizontal:'right'}}>
            <ThemeProvider theme={theme}>
                <VehiclesState>
                    <WelcomePage/>
                </VehiclesState>
            </ThemeProvider>
        </SnackbarProvider>
    );
}

export default App;
