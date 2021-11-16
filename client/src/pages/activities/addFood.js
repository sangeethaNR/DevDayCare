import * as React from 'react';


function addFood() {

    return (
      <form>
      <div class="form-box">
      <label for="desc">Food:</label>
      <input placeholder="meal session" maxlength="28" type="text" />
      <textarea placeholder="description" maxlength="50" type="text" />
      <input placeholder="time/day" maxlength="28" type="text" />
      <button type="submit">Submit</button>
      </div>
    </form>

    );
  }

export default addFood;