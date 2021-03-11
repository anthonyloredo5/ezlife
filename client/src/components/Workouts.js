import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';



function Workout(props) {
   
    const workouts = props.workouts;
    const listWorkouts = workouts.map(workout => {
        return <div className="list" key={workout.key}>
            <p>
                <input type="text" style={{backgroundColor: "white", fontFamily:"Arial"}} id={workout.key} value={workout.text} onChange={(e) => {
                    props.setUpdate(e.target.value, workout.key)
                }} />
                <span>
                    <DeleteIcon style={{ color: "white" }} onClick={() => {
                        props.deleteWorkout(workout.key)
                    }} ></DeleteIcon>
                </span>
            </p>

        </div>
    })
    return <div style={{
        
    }}>
        {listWorkouts}
        
    </div>;
    
}

export default Workout;