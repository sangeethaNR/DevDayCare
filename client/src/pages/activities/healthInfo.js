import * as React from "react";

function HealthInfo() {
  return (
    <form>
      <div class="form-box">
        <label for="medications">Medication Info</label>
        <input placeholder="Medication" maxlength="28" type="text" />
        <input placeholder="Dosage" maxlength="28" type="text" />
        <button type="submit">Submit</button>
        <label for="physician">Physician Info:</label>
          <input placeholder="name" maxlength="20" type="text" />
          <input placeholder="medical record number" maxlength="20" type="text" />
          <textarea placeholder="address" maxlength="20" type="text" />
          <input placeholder="phone number" maxlength="20" type="number" />
      </div>
    </form>
  );
}

export default HealthInfo;
