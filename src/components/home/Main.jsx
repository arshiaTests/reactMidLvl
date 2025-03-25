import CourseBox from "./courseBox"
export default function Main(){
    return(
        <div>
            <h1>course list</h1>
            <CourseBox title = "course number one" details = "this is about course"/>
            <CourseBox title = "course number two" details = "javascript course course...."/>
            <CourseBox title = "course number three" details = "react course"/>


        </div>
    )
}