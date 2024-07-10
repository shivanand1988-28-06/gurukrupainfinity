import React from "react";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BsMailboxFlag } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { Typography } from "@mui/material";
import {Button}from "@mui/material";
import {useSelector} from "react-redux" ;
import { selectUser } from './slices/userSlice';

function Header (props){
const newuser = useSelector(selectUser) ;
    const Menu01Icon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36} color={"#ffffff"} fill={"none"} {...props}>
          <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#ffffff"} fill={"none"} {...props}>
          <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
  
    const Facebook01Icon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#ffffff"} fill={"none"} {...props}>
          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#FFFFFF"} fill={"none"} {...props}>
          <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );

      if(newuser == false){
    return(
        <div className = "header">
             
              <div className = "mobnumber">
              <MdOutlineWifiCalling3></MdOutlineWifiCalling3> 9594939202
              </div>
              <div className = "info">
                 <BsMailboxFlag></BsMailboxFlag> info@gurukrupainfinity.com
              </div>
              <div className="fb">
                <Facebook01Icon/>
              </div>
              <div className="twit">
                <TwitterIcon/>
              </div>
              <div className="twit">
                <YoutubeIcon/>
              </div>
              <div className="twit">
                <Menu01Icon/>
              </div>

             
              <div>
              <Button onClick ={ event =>window.location.href = "/signin"} >Signin</Button>
                            </div>
                          <div>
                            <span>OR</span>
                            </div>  
              
              <div>
              <Button onClick ={ event =>window.location.href = "/signup"} >Signup</Button>
                            </div>

             


        </div>
    )}
    else {
    return(
      <div className = "header">
             
              <div className = "mobnumber">
              <MdOutlineWifiCalling3></MdOutlineWifiCalling3> 9594939202
              </div>
              <div className = "info">
                 <BsMailboxFlag></BsMailboxFlag> info@gurukrupainfinity.com
              </div>
              <div className="fb">
                <Facebook01Icon/>
              </div>
              <div className="twit">
                <TwitterIcon/>
              </div>
              <div className="twit">
                <YoutubeIcon/>
              </div>
              <div className="twit">
                <Menu01Icon/>
              </div>
              <div>
                <h3>HI {newuser}</h3>
              </div>
              </div>
    )}
}

export default Header ;