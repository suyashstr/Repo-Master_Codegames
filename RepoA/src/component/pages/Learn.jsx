import React from "react";
import Header from "../Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Learn = ()=>{

        const navigate = useNavigate();
    
    return (
        <div>
            <Header />

            <div style={{ marginTop: "10rem", marginLeft: "3rem", height: "75vh",display:"flex",flexWrap:"wrap",columnGap:"100px" }}>
                <Button className="button-courses fontlav" onClick={()=>{navigate("/cbasics")}}>C Basics</Button>


                <Button className="button-courses fontlav" onClick={()=>{navigate("/cpp")}}>C ++</Button>

                <Button className="button-courses fontlav" onClick={()=>{navigate("/python")}}>Python</Button>

                <Button className="button-courses fontlav" onClick={()=>{navigate("/oops")}}>OOPS</Button>



            </div>
        </div>
    )
}

export default Learn;