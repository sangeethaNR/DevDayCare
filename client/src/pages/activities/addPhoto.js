import * as React from 'react';

// TO DO:add logic to upload photo

function addPhoto() {

    return (
      <form>
      <div class="form-box">
      <label for="desc">Photo:</label>
      <input placeholder="upload photo here" maxlength="28" type="text" />
      <button type="submit">Submit</button>
      </div>
    </form>

    );
  }

export default addPhoto;