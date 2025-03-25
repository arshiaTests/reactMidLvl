export default function courseBox(props){
    return(
        <div>
            <h2>{props?.title}</h2>
            <p>{props?.details}</p>
            <span>time : 10</span>
        </div>
    )
}