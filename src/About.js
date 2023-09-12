import React, { Fragment } from "react";

function Abm()
{
        return <div>
        <h1>This is heading</h1>
        <h2>This is react js</h2>
        <h3>Welcome to react js</h3>
        </div>;
}
export default Abm;
export function Asx(){
        return <p>This is page</p>
}

export function Contactus()
{ 
        const a=50;
        return(
        <Fragment>
                <h2>This is compiled</h2>
                <h1 style={{backgroundColor: "blue", color:"white", fontSize:`${a}px`,fontFamily:'Helvetica'}}>This is headright</h1>
                <p className="hand">This is paragraph</p>
        </Fragment>
        )
}