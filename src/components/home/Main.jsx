import CourseBox from "./courseBox"
import { useState } from "react"

export default function Main(){

   const [Message , setMessage] = useState("no data here");
   const [clickCount , setClickCount] = useState(0);

    const eventhandler = () => {
        setMessage("data here");
        setClickCount(clickCount + 1);
    }


    return(
        <div>
            <button onClick={eventhandler}>click me</button>
            <p>clicked {clickCount} times</p>
            <p>{Message}</p>
            <h1>course list</h1>
            <CourseBox title = "course number one" details = "this is about course"/>
            <CourseBox title = "course number two" details = "javascript course course...."/>
            <CourseBox title = "course number three" details = "react course"/>


        </div>
    )
}