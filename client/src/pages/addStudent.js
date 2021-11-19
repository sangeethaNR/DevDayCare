import * as React from "react";
import Grid from "@mui/material/Grid";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import {DatePicker} from "@mui/lab";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { FormLabel } from "react-bootstrap";
import {
  FormControl, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography, Box, TextField, FormControlLabel, Checkbox, Container, Stack, Button
} from "@mui/material";
import { ADD_STUDENT } from "../utils/mutations";
import { AppContext } from "../components/AppContext";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { IMaskInput } from "react-imask";
import NumberFormat from "react-number-format";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      // thousandSeparator
      // isNumericString
      // prefix="$"
    />
  );
});

const AddStudent = () => {
  const [dobValue,setDobValue] = React.useState("")
  const [allergies, setAllergies] = React.useState([]);
  const [parentDetails, setParentDetails] = React.useState([]);
  const [emergencyContact, setEmergencyContact] = React.useState([]);
  const [medications, setMedications] = React.useState([]);
  const [physician, setPhysician] = React.useState([]);
  const [formValues, setFormValues] = React.useState({
    name: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    profilePic: "",
    joinedOn: new Date().toLocaleDateString(),
    allergies: "",
    isPottyTrained: true,
    parentName: "",
    relation: "",
    phoneNo: "",
    address: "",
    physicianName: "",
    physicianAddress: "",
    physicianPhoneNo: "",
    medicalRecordNo: "",
    contactPersonPhone: "",
    relationship: "",
    contactPerson: "",
    medName: "",
    dosage: "",
    class_id: "",
  });

  function checkValues(obj) {
    console.log(obj)
    const res = Object.values(obj).map(value => !!((""+value).length))
    const res2 = res.reduce((total,item) => total && item)
    console.log(res)
    return res2
    
  }

  const { classInfo, refetch } = React.useContext(AppContext);
  const [addStudent] = useMutation(ADD_STUDENT);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      name: formValues.name,
      middleName: formValues.middleName,
      lastName: formValues.lastName,
      dateOfBirth:formValues.dateOfBirth,
      joinedOn: formValues.joinedOn,
      isPottyTrained: formValues.isPottyTrained,
      profilePic: formValues.profilePic,
      parents: parentDetails,
      emergencyContact,
      physician,
      allergy: allergies,
      medications,
    };
    try {
      console.log("submit form data:" + body)
      const { data, error } = await addStudent({
        variables: {
          studentInput: body,
          class_id: formValues.class_id,
        },
      });


      if (!data) alert("some error occured");
      refetch();
      history.push("/teacherDashboard");
    } catch (error) {
      console.log(error);
      alert("All fields are required");
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (value == "true") value = true;
    if (value == "false") value = false;
    setFormValues({ ...formValues, [name]: value,'dateOfBirth':dobValue });
    
  };

  const handleClick = (body, setState) => {
    // alert("added");
    console.log(body);
    setState((prevProps) => [...prevProps, body]);
  };

  console.log(checkValues(formValues));
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h6" gutterBottom>
          Add Student
        </Typography>
        {classInfo.length ? (
          <Box component="form">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="middleName"
                  name="middleName"
                  label="Middle name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
    label="Date Of Birth" name="dateOfBirth"
    value={dobValue}   onChange={(newValue) => {
    
     setDobValue(newValue);
    }}
   
    renderInput={(params) => <TextField {...params} />}
  />

</LocalizationProvider>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Date of birth"
                      inputFormat="yyyy/mm/dd"
                      // value={value}
                      onChange={(val) =>
                        setFormValues({
                          ...formValues,
                          dateOfBirth: new Date(val).toLocaleDateString(),
                        })
                      }
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider> */}
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="allergies"
                  name="allergies"
                  label="Allergies"
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  onClick={() =>
                    handleClick(formValues.allergies, setAllergies)
                  }
                >
                  Add Allergy
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Is potty trained?</FormLabel>
                  <RadioGroup
                    row
                    aria-label="isPottyTrained"
                    name="isPottyTrained"
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label="Yes"
                      onChange={handleChange}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label="No"
                      onChange={handleChange}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="profilePic"
                  name="profilePic"
                  label="Profile Pic"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="parentName"
                  name="parentName"
                  label="ParentName"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNo"
                  name="phoneNo"
                  label="Phone No"
                  fullWidth
                  variant="standard"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="relation"
                  name="relation"
                  label="Relation"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  onClick={() =>
                    handleClick(
                      {
                        parentName: formValues.parentName,
                        phoneNo: parseInt(formValues.phoneNo),
                        address: formValues.address,
                        relation: formValues.relation,
                      },
                      setParentDetails
                    )
                  }
                >
                  Add Parent
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="physicianName"
                  name="physicianName"
                  label="Physician Name"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="medicalRecordNo"
                  name="medicalRecordNo"
                  label="Medical Record Number"
                  fullWidth
                  variant="standard"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="physicianAddress"
                  name="physicianAddress"
                  label="Address"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="physicianPhoneNo"
                  name="physicianPhoneNo"
                  label="Phone No"
                  fullWidth
                  variant="standard"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  onClick={() =>
                    handleClick(
                      {
                        physicianName: formValues.physicianName,
                        medicalRecordNo: parseInt(formValues.medicalRecordNo),
                        address: formValues.physicianAddress,
                        phoneNo: parseInt(formValues.physicianPhoneNo),
                      },
                      setPhysician
                    )
                  }
                >
                  Add Physician
                </Button>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="contactPerson"
                  name="contactPerson"
                  label="Contact Person"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="relationship"
                  name="relationship"
                  label="Relationship"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="contactPersonPhone"
                  name="contactPersonPhone"
                  label="Phone No"
                  fullWidth
                  variant="standard"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  onClick={() =>
                    handleClick(
                      {
                        contactPerson: formValues.contactPerson,
                        relationship: formValues.relationship,
                        phoneNo: parseInt(formValues.contactPersonPhone),
                      },
                      setEmergencyContact
                    )
                  }
                >
                  Add emergency contact
                </Button>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="medName"
                  name="medName"
                  label="Med Name"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="dosage"
                  name="dosage"
                  label="Dosage"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  onClick={() =>
                    handleClick(
                      {
                        dosage: formValues.dosage,
                        medName: formValues.medName,
                      },
                      setMedications
                    )
                  }
                >
                  Add dosage
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Class
                  </InputLabel>
                  <Select
                    labelId="class_id"
                    id="class_id"
                    name="class_id"
                    label="Age"
                    onChange={handleChange}
                  >
                    {classInfo.map((i) => (
                      <MenuItem value={i._id}>{i.className}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  fullWidth
                  variant="contained"
                  disabled = {!checkValues(formValues) }

                  onClick={handleSubmit}
                >
                  Submit form{" "}
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <h1>You have no class create to add student to</h1>
        )}
      </Container>
    </React.Fragment>
  );
}

/*
 <form style={{ border: "dotted pink 2vw" }}>
        <div className="form-box">
          <label for="name">Student Info:</label>
          <input placeholder="First Name" maxlength="28" type="text" />
          <input placeholder="Middle Name" maxlength="28" type="text" />
          <input placeholder="Last Name" maxlength="28" type="text" />
          <input placeholder="DOB" maxlength="8" type="date" />
          <input placeholder="Allergy" maxlength="28" type="text" />
          <button>Add allergies</button>
          <label for="parents">Parent's Info:</label>
          <fieldset>
            <label for="isPottyTrained">Is potty Trained?</label>
            <input type="radio" name="isPottyTrained" value={true} />
            <input type="radio" name="isPottyTrained" value={false} />
          </fieldset>
          <fieldset>
            <input placeholder="Parent Name" maxlength="28" type="text" />
            <input placeholder="Phone Number" maxlength="28" type="number" />
            <textarea placeholder="Address" maxlength="50" type="text" />
            <button>Add parent</button>
          </fieldset>
          <input placeholder="relationship" maxlength="20" type="text" />
          <label for="emergencyContact">Emergecy Contact Info:</label>
          <input placeholder="contact person" maxlength="20" type="text" />
          <input placeholder="relationship" maxlength="20" type="text" />
          <input placeholder="phone number" maxlength="20" type="number" />
          <button type="submit">Submit</button>
        </div>
      </form>
*/

export default AddStudent;
