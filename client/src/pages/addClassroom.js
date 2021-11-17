import { useMutation } from "@apollo/client";
import * as React from "react";
import { useHistory } from "react-router";
import { AppContext } from "../components/AppContext";
import { CREATE_CLASS } from "../utils/mutations";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AddStudent() {
  const history = useHistory();
  const { user_details, refetch } = React.useContext(AppContext);
  const [value, setValue] = React.useState("");
  const [addClass] = useMutation(CREATE_CLASS);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, errors } = await addClass({
        variables: {
          teacher_id: user_details._id,
          className: value,
        },
      });
      console.log(data);
      console.log(errors);

      if (!data) return alert("Something went wrong");
      refetch()
      history.push("/teacherDashboard");
    } catch (error) {
      alert("something went wrong")
    }
  };
  return (
    <React.Fragment>
      {/* <form style={{ border: "dotted pink 2vw" }} onSubmit={handleSubmit}>
        <div className="form-box">
          <label for="name">Classroom Info:</label>
          <input
            placeholder="Name"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input placeholder="Max Students" max="28" type="number" />
          <button type="submit">Submit</button>
        </div>
      </form> */}

      <Container style={{height:"100vh"}}>
      <Typography variant="h6" gutterBottom style={{marginTop:"5rem"}}>
          Add Classroom
        </Typography>
        <Box component="form">
        <Grid container spacing={3}></Grid>
        <Grid item xs={12} sm={4}>
              <TextField
                required
                placeholder="Name"
                fullWidth
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="standard"
                style={{margin:"2rem"}}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button fullWidth variant="contained" onClick={handleSubmit}>
                Submit form{" "}
              </Button>
            </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default AddStudent;
