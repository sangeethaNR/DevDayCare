import * as React from "react";

function HealthInfo() {
  return (
    <form>
      <div class="form-box"style={{border: "dotted pink 2vw"}}>
        <label for="medications">Medication Info</label>
        <input placeholder="Medication" maxlength="28" type="text" />
        <input placeholder="Dosage" maxlength="28" type="text" />
        <label for="physician">Physician Info:</label>
          <input placeholder="name" maxlength="20" type="text" />
          <input placeholder="medical record number" maxlength="20" type="text" />
          <textarea placeholder="address" maxlength="20" type="text" />
          <input placeholder="phone number" maxlength="20" type="number" />
          <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default HealthInfo;
