import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWorkout } from "../feature/workout/workoutSlice";

function WorkoutForm() {
  const [formValue, setFormValue] = useState({
    title: "",
    resps: "",
    load: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addWorkout({ formValue, setFormValue }));
  }

  return (
    <div className="bg-info p-3">
      <form action="">
        <input
          type="text"
          className="form-control my-3"
          placeholder="Title"
          value={formValue.title}
          onChange={handleChange}
          name="title"
        />
        <input
          type="number"
          className="form-control my-3"
          placeholder="resps"
          value={formValue.resps}
          onChange={handleChange}
          name="resps"
        />
        <input
          type="number"
          className="form-control my-3"
          placeholder="load"
          value={formValue.load}
          onChange={handleChange}
          name="load"
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}

export default WorkoutForm;
