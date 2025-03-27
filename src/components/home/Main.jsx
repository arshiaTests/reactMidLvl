import CourseBox from "./courseBox"
import { useState } from "react"

export default function Main(){

   const [Message , setMessage] = useState("no data here")

    const eventhandler = () => {
        setMessage("data here")
    }


    return(
        <div>
            <button onClick={eventhandler}>click me</button>
            <p>{Message}</p>
            <h1>course list</h1>
            <CourseBox title = "course number one" details = "this is about course"/>
            <CourseBox title = "course number two" details = "javascript course course...."/>
            <CourseBox title = "course number three" details = "react course"/>


        </div>
    )
}