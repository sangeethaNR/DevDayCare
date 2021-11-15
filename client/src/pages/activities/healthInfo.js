import * as React from 'react';


function HealthInfo() {

    return (
      <form>
      <label for="medName">Medication:</label>
      <input placeholder="Medication" maxlength="28" type="text" />
      <label for="dosage">Dosage:</label>
      <input placeholder="Dosage" maxlength="28" type="text" />
      <button type="submit">Submit</button>
    </form>
    );
  }

export default HealthInfo;