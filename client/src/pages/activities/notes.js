import * as React from "react";

function Notes() {
  return (
    <div>
      <input
        class="note-title"
        placeholder="Note Title"
        maxlength="28"
        type="text"
      />
      <textarea class="note-textarea" placeholder="Note Text"></textarea>
    </div>
  );
}

export default Notes;
