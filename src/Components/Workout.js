import React, {useState} from "react"
import Activity from "./Activity"
import AddActivity from "./addActivity"
import {useSelector} from "react-redux"
import activitiesReducer from "../reducer/activitiesReducer"

const Workout = () => {
  const allActivities = useSelector(state => state.activities)
  const [add, setAdd] = useState(false)

  return (
    <div className="workouts-wrapper">
      {console.log(allActivities)}
      <h2>My Workout</h2>
      <button onClick={() => setAdd(!add)}>Add Activity</button>
      {add && <AddActivity />}
      {allActivities &&
        allActivities.map(activity => {
          return (
            <Activity
              key={activity.id}
              id={activity.id}
              name={activity.name}
              duration={activity.duration}
            />
          )
        })}
    </div>
  )
}

export default Workout
