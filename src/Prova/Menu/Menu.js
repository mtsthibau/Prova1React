import React from 'react';
import { Link } from "react-router-dom";

import './Menu.css';
import et from '../et.png';

export class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className="menu">
                    <div>
                        <img src={et} className="imgEt" alt="Thibas Travel"/>
                    </div>
                    <h2>Thibas Travel</h2> 
                    <div className="menuItens">
                        <div>
                            <Link to="/">Início</Link>
                        </div>
                        <div>
                            <Link to="/Destino">Destino</Link>
                        </div>
                        <div>
                            <Link to="/Combustivel">Combustível</Link>
                        </div>             
                    </div>
                </div>
            </div>
        );
    }
}
