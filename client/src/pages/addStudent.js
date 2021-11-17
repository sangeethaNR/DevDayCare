import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FormLabel } from "react-bootstrap";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import Box from "@mui/material/Box";

function addStudent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
  };
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h6" gutterBottom>
          Add Student
        </Typography>
        <Box component="form">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
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
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Date of birth"
                    inputFormat="yyyy/mm/dd"
                    // value={value}
                    // onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="allergies"
                name="allergies"
                label="Allergies"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth variant="contained" color="success">
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
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="profilePic"
                name="profilePuc"
                label="Profile Pic"
                fullWidth
                variant="standard"
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
              />
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth variant="contained" color="success">
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
              />
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth variant="contained" color="success">
                Add Physican
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
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="phoneNo"
                name="phoneNo"
                label="Phone No"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained" color="success">
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
              />
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained" color="success">
                Add dosage
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button fullWidth variant="contained" onClick={handleSubmit}>
                Submit form{" "}
              </Button>
            </Grid>
          </Grid>
        </Box>
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

export default addStudent;
