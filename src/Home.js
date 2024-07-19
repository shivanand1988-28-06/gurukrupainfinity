import React from "react";
import Header from "./header";
import Middle from "./middle";
import AllpropertiesData from "./allpropertydata";
import Footer from "./websitefooter" ;
import HeaderTwo from "./headertwo";
 function Home (){
    return (
    <>

    <Header/>
    <HeaderTwo/>
    <Middle />
    <AllpropertiesData/>
    <Footer/>
    </>
    )
}

export default Home ;