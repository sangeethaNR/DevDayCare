import * as React from "react";

function addStudent() {
  return (
    <React.Fragment>
      <form style={{border:"dotted pink 2vw"}}>
      <div className = "form-box">
          <label for="name">Classroom Info:</label>
          <input placeholder="Name" maxlength="28" type="text" />
          <input placeholder="Max Students" maxlength="28" type="number" />
        <button type="submit">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default addStudent;
