import React from "react"; 
import WorkoutTracker from "../components/WorkoutCalendar";
import Drawer from '../components/Drawer';

function Fitness () { 
    return ( 
        <>
        <Drawer />
        <WorkoutTracker/>
        </>
    )
}

export default Fitness; 