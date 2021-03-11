import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Workout from './Workouts';

class WorkoutTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      currentworkout: {
        text: '',
        key: ''
      }
    }

    this.addWorkout = this.addWorkout.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteWorkout = this.deleteWorkout.bind(this);
  }

    addWorkout(e){
      e.preventDefault();
      const newWorkout = this.state.currentworkout;
      if (newWorkout.text !== ""){
        const workouts = [...this.state.workouts, newWorkout];
        this.setState({
          workouts: workouts,
          currentWorkout:{
            text: '',
            key: ''
          }
        })
      }
    }
    handleInput(e){
      this.setState({
        currentWorkout:{
          text: e.target.value,
          key: Date.now()
        }
      })
    }
    deleteWorkout(key){
      const filteredWorkouts = this.state.workouts.filter(workout =>
        workout.key !== key);
      this.setState({
        workouts: filteredWorkouts
      })
    }
    render(){
      return (

        <div className="Workout Tracker">
          <header>
            <form id="workout-form" onSubmit={this.addWorkout}>
              <input className
                type="text"
                placeholder="Add your workout"
                value={this.state.text}
                name="workout"
                onChange={this.handleInput}

              />
              <AddCircleOutlineIcon style={{ color: "white" }}
                type="submit"
                onClick={this.addWorkout}
              >Add</AddCircleOutlineIcon>
            </form>
            <p>{this.state.workouts.text}</p>

            <Workout workouts={this.state.Workouts} deleteWorkout={this.deleteWorkout} />

          </header>
        </div>
      );
    }
  }

export default WorkoutTracker;
