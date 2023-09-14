import React from "react";

class Myclasscop extends React.Component
{
    render(){
        return(
                <section>
                    <textarea id="comment" name="comment" rows="10" cols="190" placeholder="This is comment"/>
                    <input type="button" name="button" value='sumit' style={{width:'90px',height:'50px',backgroundColor:"red",color:"white",fontSize:"25px"}}></input>
                        <h1>This is component</h1>
                </section>
        )
    }    
}
export default Myclasscop