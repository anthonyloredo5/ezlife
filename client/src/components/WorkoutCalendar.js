import React from 'react'
const durationInput = document.querySelector("#duration");
const completeButton = document.querySelector("button.complete");
const addButton = document.querySelector("button.add-another");
const workoutTypeSelect = document.querySelector("#type");

export default class WorkoutTracker extends React.Component {

  // function handleWorkoutTypeChange(event) {
  //   workoutType = event.target.value;
  
  //   if (workoutType === "cardio") {
  //     cardioForm.classList.remove("d-none");
  //     resistanceForm.classList.add("d-none");
  //   } else if (workoutType === "resistance") {
  //     resistanceForm.classList.remove("d-none");
  //     cardioForm.classList.add("d-none");
  //   } else {
  //     cardioForm.classList.add("d-none");
  //     resistanceForm.classList.add("d-none");
  //   }
  
  //   validateInputs();
  // }
  // initExercise();
  // function handleWorkoutTypeChange(event) {
  //   workoutType = event.target.value;
  
  //   if (workoutType === "cardio") {
  //     cardioForm.classList.remove("d-none");
  //     resistanceForm.classList.add("d-none");
  //   } else if (workoutType === "resistance") {
  //     resistanceForm.classList.remove("d-none");
  //     cardioForm.classList.add("d-none");
  //   } else {
  //     cardioForm.classList.add("d-none");
  //     resistanceForm.classList.add("d-none");
  //   }
  
  //   validateInputs();
  // }
  
  // function validateInputs() {
  //   let isValid = true;
  
  //   if (workoutType === "resistance") {
  //     if (nameInput.value.trim() === "") {
  //       isValid = false;
  //     }
  

  //     }
  //     if (durationInput.value.trim() === "") {
  //       isValid = false;
  //     }
  //   }
  
  //   if (isValid) {
  //     completeButton.removeAttribute("disabled");
  //     addButton.removeAttribute("disabled");
  //   } else {
  //     completeButton.setAttribute("disabled", true);
  //     addButton.setAttribute("disabled", true);
  //   }
  // }
  
  // async function handleFormSubmit(event) {
  //   event.preventDefault();
    
  //   let workoutData = {};
  
  //   if (workoutType === "cardio") {
  //     workoutData.type = "cardio";
  //     workoutData.name = cardioNameInput.value.trim();
  //     workoutData.distance = Number(distanceInput.value.trim());
  //     workoutData.duration = Number(durationInput.value.trim());
  //   } else if (workoutType === "resistance") {
  //     workoutData.type = "resistance";
  //     workoutData.name = nameInput.value.trim();
  //     workoutData.weight = Number(weightInput.value.trim());
  //     workoutData.sets = Number(setsInput.value.trim());
  //     workoutData.reps = Number(repsInput.value.trim());
  //     workoutData.duration = Number(resistanceDurationInput.value.trim());
  //   }
  //   console.log(workoutData);
  //   addExercise(workoutData);
  //   clearInputs();
  //   toast.classList.add("success");
  // }
  
  // if (workoutTypeSelect) {
  //   workoutTypeSelect.addEventListener("change", handleWorkoutTypeChange);
  // }
  // if (completeButton) {
  //   completeButton.addEventListener("click", function (event) {
  //     shouldNavigateAway = true;
  //     handleFormSubmit(event);
  //   });
  // }
  // if (addButton) {
  //   addButton.addEventListener("click", handleFormSubmit);
  // }
  // document
  //   .querySelectorAll("input")
  //   .forEach(element => element.addEventListener("input", validateInputs));
  
  render() {
    return (
      <div class="wrapper">
        <header>
          <h1>Fitness Tracker</h1>
        </header>
        <div class="ui container exercise">
          <div class="ui raised card m-auto">
            <h2>Add Your Exercise</h2>
            <form>
              <div class="workout-type">
                <label for="type">Exercise Type:</label>
                <select name="type" id="type">
                  <option disabled selected>Select Exercise Type</option>
                  <option value="resistance">Resistance</option>
                  <option value="cardio">Cardio</option>
                  <option value="resistance">CrossFit</option>
                  <option value="cardio">Yoga</option>
                </select>
              </div>
              <div class="duration">
                <label for="duration">Duration (minutes):</label>
                <input type="number" name="duration" id="duration" placeholder="10" />
              </div>
              <div class="buttons">
                <button disabled class="huge ui blue button complete">
                  Complete
              </button>
                <button disabled class="huge ui positive button add-another">
                  Add Exercise
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}