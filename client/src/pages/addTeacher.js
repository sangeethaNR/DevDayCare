import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography, Box, TextField, Container } from "@mui/material";
import { CREATE_TEACHER } from "../utils/mutations";
import { AppContext } from "../components/AppContext";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import NumberFormat from "react-number-format";

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

function AddTeacher() {
  const [formValues, setFormValues] = React.useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    is_main: true,
    is_active: true,
    className: "",
  });

  function checkValues(obj) {
    console.log(obj);
    const res = Object.values(obj).map((value) => !!("" + value).length);
    const res2 = res.reduce((total, item) => total && item);
    console.log(res);
    return res2;
  }
  const [showPassword, setShow] = useState(false);
  const { classInfo, refetch } = React.useContext(AppContext);
  const [AddTeacher] = useMutation(CREATE_TEACHER);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      username: formValues.username,
      password: formValues.password,
      email: formValues.email,
      is_main: formValues.is_main,
      is_active: formValues.is_active,
      className: formValues.className,
    };
    try {
      const { data, error } = await AddTeacher({
        variables: {
          teacherInput: body,
          className: formValues.className,
        },
      });

      if (!data) alert("some error occured");
      refetch();
      history.push("/adminDashboard");
    } catch (error) {
      console.log(error);
      alert("All fields are required");
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (value == "true") value = true;
    if (value == "false") value = false;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <React.Fragment>
      <Container>
        <Typography variant="h6" gutterBottom>
          Add Teacher
        </Typography>
        {classInfo.length ? (
          <Box component="form">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="first_name"
                  name="first_name"
                  label="First name"
                  fullWidth
                  autoComplete="given_name"
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="last_name"
                  name="last_name"
                  label="last_name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="username"
                  fullWidth
                  autoComplete="username"
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="password"
                  name="password"
                  label="password"
                  variant="outlined"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  name="email"
                  label="email"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="is_main"
                  name="is_main"
                  label="is_main"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="is_active"
                  name="is_active"
                  label="is_active"
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
                  id="className"
                  name="className"
                  label="className"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Button
                  fullWidth
                  variant="contained"
                  disabled={!checkValues(formValues)}
                  onClick={handleSubmit}
                >
                  Submit form{" "}
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <h1>You have no credentials to add</h1>
        )}
      </Container>
    </React.Fragment>
  );
}
export default AddTeacher;
