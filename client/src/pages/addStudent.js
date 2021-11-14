import * as React from "react";

function addStudent() {
  return (
    <React.Fragment>
      <div>
        <input
          class="note-title"
          placeholder="First Name"
          maxlength="28"
          type="text"
        />
        <textarea placeholder="First Name"></textarea>
      </div>
      <div>
        <input
          class="note-title"
          placeholder="Last Name"
          maxlength="28"
          type="text"
        />
        <textarea placeholder="Last Name"></textarea>
      </div>
    </React.Fragment>
  );
}

export default addStudent;
