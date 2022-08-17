import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



const initialState = {
    workouts: [],
    isLoading: false
}

export const getWorkout = createAsyncThunk('workout/fetch', async () => {
    const resp = await fetch(`http://localhost:4000/api/workout`)
    const data = await resp.json()
    return data
})

export const addWorkout = createAsyncThunk(`workout/add`, async (value, thunkApi) => {
    console.log(value)
    try {
        const resp = await fetch(`http://localhost:4000/api/workout`, {
            method: "POST",
            body: JSON.stringify(value.formValue),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const data = await resp.json()
        if (data._id) {
            thunkApi.dispatch(getWorkout())
            value.setFormValue({
                title: "",
                resps: "",
                load: ""
            })
        }
        return data
    } catch (err) {
        console.log(err)
    }

})

export const deleteWorkout = createAsyncThunk(`workout/delete`, async (id, thunkApi) => {
    try {
        const resp = fetch(`http://localhost:4000/api/workout/${id}`, {
            method: "DELETE"
        })
        const data = await resp
        console.log(data)
        if (data.status === 200) {
            thunkApi.dispatch(getWorkout())
        }

    } catch (err) {
        console.log(err)
    }
})


const workoutSlice = createSlice({
    name: "workout",
    initialState,
    extraReducers: {
        [getWorkout.pending]: (state) => {
            state.isLoading = true
        },
        [getWorkout.fulfilled]: (state, action) => {
            state.isLoading = false
            state.workouts = action.payload
        }
    }
})

export default workoutSlice.reducer