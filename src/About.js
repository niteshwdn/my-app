import React, { Fragment } from "react";

function Contactus()
{ 
        const Name ='Nitesh Chaudhary';
        const b=20;
        const c="";
        return(
        <Fragment>
                {Name}
                {b+c}
                {c ? "ok" : "no"}
        </Fragment>
        )
}
export default Contactus