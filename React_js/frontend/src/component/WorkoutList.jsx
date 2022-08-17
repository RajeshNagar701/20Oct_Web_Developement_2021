import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteWorkout } from "../feature/workout/workoutSlice";

function WorkoutList() {
  const workouts = useSelector((state) => state.workout.workouts);
  const loading = useSelector((state) => state.workout.isLoading);
  const dispatch = useDispatch();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (workouts && workouts.length <= 0) {
    return <h2>No Workout Found</h2>;
  }

  return (
    <>
      {workouts &&
        workouts.map((item) => {
          const { _id, title, resps, load, createdAt } = item;
          return (
            <div className="card my-4" key={_id}>
              <div className="card-body">
                <h4> {title} </h4>
                <h5> reps : {resps} </h5>
                <h5> load : {load} </h5>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteWorkout(_id))}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default WorkoutList;
