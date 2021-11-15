import * as React from "react";

function addStudent() {
  return (
    <React.Fragment>
      <form>
        <div>
          <label for="name">First name:</label>
          <input placeholder="First Name" maxlength="28" type="text" />
        </div>
        <div>
          <label for="middleName">Middle name:</label>
          <input placeholder="Middle Name" maxlength="28" type="text" />
        </div>
        <div>
          <label for="lastName">Last name:</label>
          <input placeholder="Last Name" maxlength="28" type="text" />
        </div>
        <div>
          <label for="dateOfBirth">Date of Birth:</label>
          <input placeholder="DOB" maxlength="8" type="date" />
        </div>
        <div>
          <label for="allergy">Allergy:</label>
          <input placeholder="Allergy" maxlength="28" type="text" />
        </div>
        <div>
          <label for="parentName">Parent's name:</label>
          <input placeholder="Parent Name" maxlength="28" type="text" />
        </div>
        <div>
          <label for="phoneNo">Phone Number:</label>
          <input placeholder="Phone Number" maxlength="28" type="number" />
        </div>
        <div>
          <label for="address">Address:</label>
          <input placeholder="Address" maxlength="50" type="text" />
        </div>
        <div>
          <label for="relation">Relationship:</label>
          <input placeholder="relationship" maxlength="20" type="text" />
        </div>
        <div>
          <label for="contactPerson">Emergecy Contact:</label>
          <input placeholder="contact person" maxlength="20" type="text" />
        </div>
        <div>
          <label for="relationship">Relationship:</label>
          <input placeholder="relationship" maxlength="20" type="text" />
        </div>
        <div>
          <label for="phoneNo">Phone Number:</label>
          <input placeholder="phone number" maxlength="20" type="number" />
        </div>
        <div>
          
        <button type="submit">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default addStudent;
