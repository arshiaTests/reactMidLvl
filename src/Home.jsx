import Header from "./components/layouts/Header.jsx"
import Main from "./components/home/Main.jsx"
import Footer from "./components/layouts/Footer.jsx"

export default function Home(){
    let name = "arshia";
    return (
        <div>
            <div id="name">Your name : {name} </div>
            {/* comment */}
            <Header/>
            <Main/>
            <Footer/>
          
        </div>
    )
} 