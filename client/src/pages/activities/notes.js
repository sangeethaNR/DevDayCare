import * as React from "react";

function Notes() {
  return (
    <form>
      <label for="noteDesc">Description:</label>
      <input placeholder="write notes here" maxlength="28" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Notes;
