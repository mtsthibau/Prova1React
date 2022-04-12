import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import { Inicio } from "./Inicio";
import { Destino } from "./Destino";
import { Combustivel } from "./Combustivel";

import './Prova.css';

const Routes = () => {
    return (
        <BrowserRouter>
            <Menu />
            <div className="body">
                <Route component={Inicio} exact path="/" />
                <Route component={Destino} path="/Destino" />
                <Route component={Combustivel} path="/Combustivel" />
            </div>
        </BrowserRouter>
    )
}
export default Routes;