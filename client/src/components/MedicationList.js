import React from 'react';

const MedicationList = ({ medications = [] }) => {
  if (!medications.length) {
    return <h3>No medication Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Medication 
      </h3>
      <div className="flex-row my-4">
        {medications &&
          medications.map((medication) => (
            <div key={medication.medName} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {medication.medName} Medicine{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {medication.dosage}
                  </span>
                </h5>
                <p className="card-body">{medication.dosage}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MedicationList;
