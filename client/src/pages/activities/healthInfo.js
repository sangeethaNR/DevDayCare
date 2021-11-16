import * as React from "react";

function HealthInfo() {
  return (
    <form>
      <div class="form-box">
        <input placeholder="Medication" maxlength="28" type="text" />
        <input placeholder="Dosage" maxlength="28" type="text" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default HealthInfo;
