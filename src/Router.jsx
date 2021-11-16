import React from "react";
import { Routes, Route } from "react-router-dom";

import SingUp from "./components/SingUp/SingUp";
import SingIn from "./components/SingIn/SingIn";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<SingIn/>} />
            <Route path='/reg' element={<SingUp/>} />
        </Routes>
    )
}
export default Router;