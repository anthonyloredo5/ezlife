import React from 'react'
const workoutTypeSelect = document.querySelector("#type");
const cardioForm = document.querySelector(".cardio-form");
const resistanceForm = document.querySelector(".resistance-form");
const cardioNameInput = document.querySelector("#cardio-name");
const nameInput = document.querySelector("#name");
const weightInput = document.querySelector("#weight");
const setsInput = document.querySelector("#sets");
const repsInput = document.querySelector("#reps");
const durationInput = document.querySelector("#duration");
const resistanceDurationInput = document.querySelector("#resistance-duration");
const distanceInput = document.querySelector("#distance");
const completeButton = document.querySelector("button.complete");
const addButton = document.querySelector("button.add-another");
const toast = document.querySelector("#toast");
const newWorkout = document.querySelector(".new-workout")

let workoutType = null;
let shouldNavigateAway = false;

function WorkoutTracker() {

  handleWorkoutTypeChange(event); {
    workoutType = event.target.value;

    if (workoutType === "cardio") {
      cardioForm.classList.remove("d-none");
      resistanceForm.classList.add("d-none");
    } else if (workoutType === "resistance") {
      resistanceForm.classList.remove("d-none");
      cardioForm.classList.add("d-none");
    } else {
      cardioForm.classList.add("d-none");
      resistanceForm.classList.add("d-none");
    }

    validateInputs();
  }

  initExercise();

  function handleWorkoutTypeChange(event) {
    workoutType = event.target.value;

    if (workoutType === "cardio") {
      cardioForm.classList.remove("d-none");
      resistanceForm.classList.add("d-none");
    } else if (workoutType === "resistance") {
      resistanceForm.classList.remove("d-none");
      cardioForm.classList.add("d-none");
    } else {
      cardioForm.classList.add("d-none");
      resistanceForm.classList.add("d-none");
    }

    validateInputs();
  }

  function validateInputs() {
    let isValid = true;

    if (workoutType === "resistance") {
      if (nameInput.value.trim() === "") {
        isValid = false;
      }

      if (weightInput.value.trim() === "") {
        isValid = false;
      }

      if (setsInput.value.trim() === "") {
        isValid = false;
      }

      if (repsInput.value.trim() === "") {
        isValid = false;
      }

      if (resistanceDurationInput.value.trim() === "") {
        isValid = false;
      }
    } else if (workoutType === "cardio") {
      if (cardioNameInput.value.trim() === "") {
        isValid = false;
      }

      if (durationInput.value.trim() === "") {
        isValid = false;
      }

      if (distanceInput.value.trim() === "") {
        isValid = false;
      }
    }

    if (isValid) {
      completeButton.removeAttribute("disabled");
      addButton.removeAttribute("disabled");
    } else {
      completeButton.setAttribute("disabled", true);
      addButton.setAttribute("disabled", true);
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    let workoutData = {};

    if (workoutType === "cardio") {
      workoutData.type = "cardio";
      workoutData.name = cardioNameInput.value.trim();
      workoutData.distance = Number(distanceInput.value.trim());
      workoutData.duration = Number(durationInput.value.trim());
    } else if (workoutType === "resistance") {
      workoutData.type = "resistance";
      workoutData.name = nameInput.value.trim();
      workoutData.weight = Number(weightInput.value.trim());
      workoutData.sets = Number(setsInput.value.trim());
      workoutData.reps = Number(repsInput.value.trim());
      workoutData.duration = Number(resistanceDurationInput.value.trim());
    }
    console.log(workoutData);
    await API.addExercise(workoutData);
    clearInputs();
    toast.classList.add("success");
  }

  function handleToastAnimationEnd() {
    toast.removeAttribute("class");
    if (shouldNavigateAway) {
      location.href = "/";
    }
  }

  function clearInputs() {
    cardioNameInput.value = "";
    nameInput.value = "";
    setsInput.value = "";
    distanceInput.value = "";
    durationInput.value = "";
    repsInput.value = "";
    resistanceDurationInput.value = "";
    weightInput.value = "";
  }

  if (workoutTypeSelect) {
    workoutTypeSelect.addEventListener("change", handleWorkoutTypeChange);
  }
  if (completeButton) {
    completeButton.addEventListener("click", function (event) {
      shouldNavigateAway = true;
      handleFormSubmit(event);
    });
  }
  if (addButton) {
    addButton.addEventListener("click", handleFormSubmit);
  }
  toast.addEventListener("animationend", handleToastAnimationEnd);

  document
    .querySelectorAll("input")
    .forEach(element => element.addEventListener("input", validateInputs));

  return (

    <body>
      <nav>
        <a href="/">Fitness Tracker</a>
        <a href="/stats">Dashboard</a>
      </nav>
      <div class="wrapper">
        <header>
          <h1>Fitness Tracker</h1>
        </header>
        <div class="ui container exercise">
          <div class="ui raised card m-auto">
            <h2>Add Your Exercise</h2>
            <form action="POST">
              <div class="workout-type">
                <label for="type">Exercise Type:</label>
                <select name="type" id="type">
                  <option disabled selected>Select Exercise Type</option>
                  <option value="resistance">Resistance</option>
                  <option value="cardio">Cardio</option>
                </select>
              </div>
              <div class="cardio-form d-none">
                <div class="cardio-name">
                  <label for="cardio-name">Name:</label>
                  <input type="text" name="cardio-name" id="cardio-name" placeholder="Running" />
                </div>
                <div class="distance">
                  <label for="distance">Distance (miles):</label>
                  <input type="number" name="distance" id="distance" placeholder="5" />
                </div>
                <div class="duration">
                  <label for="duration">Duration (minutes):</label>
                  <input type="number" name="duration" id="duration" placeholder="10" />
                </div>
              </div>
              <div class="resistance-form d-none">
                <div class="exercise">
                  <label for="name">Exercise Name:</label>
                  <input type="text" name="name" id="name" placeholder="Bench Press" />
                </div>
                <div class="weight">
                  <label for="weight">Weight (lbs):</label>
                  <input type="number" name="weight" id="weight" placeholder="200" />
                </div>
                <div class="sets">
                  <label for="sets">Sets:</label>
                  <input type="number" name="sets" id="sets" placeholder="4" />
                </div>
                <div class="reps">
                  <label for="reps">Reps:</label>
                  <input type="number" name="reps" id="reps" placeholder="10" />
                </div>
                <div class="resistance-duration">
                  <label for="resistance-duration">Duration (minutes):</label>
                  <input type="number" name="resistance-duration" id="resistance-duration" placeholder="10" />
                </div>
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
      <div id="toast">
        Workout Added Successfully!
      </div>
    </body>
  )
}
export default WorkoutTracker;