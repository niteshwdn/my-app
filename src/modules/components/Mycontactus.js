import React from "react";

function Mycontactus() {
  return (
          <div className="container">
                <div className="row">
                  <div className="box">
            <label>First name:</label><br/>
            <input type="text" placeholder="First Name"/><br/><br/>
            <label>Middlename:</label><br/>
            <input type="text" id="one1" placeholder="Middlename"/><br/><br/>
            <label>Last name:</label><br/>
            <input type="text" id="one2" placeholder="Last Name"/><br/><br/>
            <label for="HTML">Course:</label><br/>
        <select id="one3">
          <option value="CSS">CSS</option>
          <option value="JAVASCRIPT">JAVASCRIPT</option>
          <option value="PYTHON">PYTHON</option>
          <option value="PHP">PHP</option>
        </select><br/><br/>
            <label>Gendar:</label>
            <input type="radio" id="one4" name="A"/>Male
            <input type="radio" id="one4" name="A"/>Female
            <input type="radio" id="one4" name="A"/>Other<br/><br/>
            <label>Phone No:</label><br/>
            <input type="text" id="one5" placeholder="+91"/><br/><br/>
            <input type="text" placeholder="Phone no"/><br/><br/>
            <label>current Address:</label><br/>
            <textarea>current Address</textarea><br/>
            <label>E-mail:</label><br/>
            <input type="text" placeholder="E-Mail"/><br/><br/>
            <label>Password:</label><br/>
            <input type="text" placeholder="Enter Password"/><br/><br/>
            <label>Re-type Password:</label><br/>
            <input type="text" placeholder="Retype Password"/><br/><br/>
            <input type="submit" value="Submit" onclick="abc()"/>
        
                  </div>
                </div>
          </div>
  )
}
export default Mycontactus;