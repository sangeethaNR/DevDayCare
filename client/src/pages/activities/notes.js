import * as React from "react";

function Notes() {
  return (
    <form>
      <div class="form-box">
      <label for="noteDesc">Notes:</label>
      <input placeholder="write notes here" maxlength="28" type="text" />
      <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Notes;
