import React from "react"; 
import WorkoutTracker from '../components/WorkoutTracker.js';
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