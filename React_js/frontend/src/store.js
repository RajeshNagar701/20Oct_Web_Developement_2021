import { configureStore } from "@reduxjs/toolkit";
import workoutSlice from "./feature/workout/workoutSlice";

const store = configureStore({
    reducer: {
        workout: workoutSlice
    }
})

export default store