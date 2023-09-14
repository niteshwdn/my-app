import React, { Fragment } from "react";

function Contactus()
{ 
        const a=50;
        const Name ='Nitesh Chaudhary';
        const b=20;
        const c="";
        return(
        <Fragment>
                <p className="hand">This is paragraph</p>
                {Name}
                {b+c}
                {c ? "ok" : "no"}
        </Fragment>
        )
}
export default Contactus