import React from "react";
import Header from "./Header";
import Greetings from "./Greetings";
import Proyects from "./Proyects";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe"
import MySkills from "./MySkills";
import MyKnows from "./MyKnows";
import Footer from "./Footer";


function App (){
    return ( <div> 
           <Header />
           <Greetings />
           <div className="cardConteiner"> <Proyects /></div>   
           <MySkills />    
           <MyKnows />  
           <AboutMe />
           <ContactMe />
           <Footer/>
            </div>)
}

export default App;

