import * as React from 'react';


function Incidents() {

    return (
      <form>
      <div class="form-box">
      <label for="desc">Incident:</label>
      <input placeholder="write report here" maxlength="28" type="text" />
      <button type="submit">Submit</button>
      </div>
    </form>

    );
  }

export default Incidents;