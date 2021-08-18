import React, {Component} from "react"
import Project from "./Project"
class Portfolio extends Component{
    render() {
        return (
            <div>
              <Project title="Budget Tracker" description="Track your budget!" github="https://github.com/Amazonash/budgettracker" app="https://pure-shore-69901.herokuapp.com/" >

              </Project>
              <Project title="Employee Tracker" description="Sort and filter employees" github="https://github.com/Amazonash/employeeTracker" app="https://amazonash.github.io/employeeTracker/" >
            </Project>

            <Project title="Workout Tracker" description="Track your workouts and view stats" github="https://github.com/Amazonash/workout-tracker" app="https://hidden-headland-59075.herokuapp.com/?id=6111b439e5ef0e47b432f27e/" >
            </Project>
           
            </div>
        )
    }
}
export default Portfolio