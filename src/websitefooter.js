import React from "react" ;
import Logo from "./images/Logo 200.1.jpg" ;
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){


    return(
    <>
    
    <div className = "websitefooter">
      <div className="footerimg">
      <img src = {Logo} alt = "">
            
            </img>
      </div>
      <div className="cont">
        <h3>CONTACT US</h3> <br></br>
      
        <p> Address:<br></br>
Gurukrupa Infinity<br></br>
904, Balaji Business Park, 400059<br></br>
Near Lemontree, Andheri - Kurla Rd,<br></br>
Near Times Square, Marol, Andheri East,<br></br>
Mumbai, Maharashtra 400059.</p>
   <h4>E-mail : <br></br>
   info@gurukrupainfinity.com</h4>
   
      </div>
      <div className = "footql">
        <h3>QUICK LINKS</h3>
        <Link to = "/" className="hmlink">HOME</Link><br></br>
       
        <Link to = "/aboutus" className="hmlink">ABOUT US</Link><br></br> 
        <Link to = "/blogs-gurukrupainfinity" className="hmlink">BLOGS</Link><br></br> 
        <Link to = "/contactus" className="hmlink">CONTACT US</Link><br></br>
        <Link to = "/signin" className="hmlink">LOGIN</Link><br></br>
        <Link to = "" className="hmlink"><FacebookOutlinedIcon/></Link><br></br>
        <Link to =  "" className="hmlink"><TwitterIcon/></Link><br></br>
        <Link to = "" className = "hmlink"><InstagramIcon/></Link>

      </div>
      <div>
        <h3 className="footabt">ABOUT US</h3>
        <p className="footabtp">Gurukrupa Infinity is a one-stop solution<br></br> to all your Real Estate investment related <br></br>requirements. Gurukrupa Infinity believe<br></br> that one size does not fit all.<Link to = "/aboutus" className="read">...Read more</Link></p>
      </div>
    </div>
    </>
    )
}