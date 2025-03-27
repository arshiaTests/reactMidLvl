import CourseBox from "./courseBox"
import { useState } from "react"

export default function Main(){
    let heading = [
        "hello rocket",
      "the wheater is good"
    ]
    const headings = heading.map((item) => <span>{item}</span>)
    return(
        <div>
            {headings}
        </div>
    )
}

