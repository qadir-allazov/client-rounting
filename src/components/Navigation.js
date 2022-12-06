import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from "../App";
import About from "./About";
export default function Navgigation(){
    return (
        <>
        <BrowserRouter>
                <div>
                <Route path="/" element={App}> App</Route>
                </div>
        </BrowserRouter>
        </>
    )
}