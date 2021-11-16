import * as React from "react";

function addStudent() {
  return (
    <React.Fragment>
      <form style={{border:"dotted pink 2vw"}}>
      <div className = "form-box">
          <label for="name">Student Info:</label>
          <input placeholder="First Name" maxlength="28" type="text" />
          <input placeholder="Middle Name" maxlength="28" type="text" />
          <input placeholder="Last Name" maxlength="28" type="text" />
          <input placeholder="DOB" maxlength="8" type="date" />
          <input placeholder="Allergy" maxlength="28" type="text" />
          <label for="parents">Parent's Info:</label>
          <input placeholder="Parent Name" maxlength="28" type="text" />
          <input placeholder="Phone Number" maxlength="28" type="number" />
          <textarea placeholder="Address" maxlength="50" type="text" />
          <input placeholder="relationship" maxlength="20" type="text" />
          <label for="emergencyContact">Emergecy Contact Info:</label>
          <input placeholder="contact person" maxlength="20" type="text" />
          <input placeholder="relationship" maxlength="20" type="text" />
          <input placeholder="phone number" maxlength="20" type="number" />
        <button type="submit">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default addStudent;
