import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import Auth from "../../utils/auth";
import { FormControl } from "@mui/material";
import { CREATE_TEACHER } from "../../utils/mutations";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    is_main: true,
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [addTeacherMutation] = useMutation(CREATE_TEACHER)

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    if(value == "true") value = true
    if(value == "false") value = false
    console.log(value)
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log(userFormData);
        const { data } = await addTeacherMutation({ variables: { ...userFormData } });
        console.log(data);
        if (!data) {
          throw new Error("something went wrong!");
        }

        Auth.login(data.createTeacher.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    // setUserFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    //   first_name: "",
    //   last_name: "",
    //   is_main: true,
    // });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="first_name">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your FirstName"
            name="first_name"
            onChange={handleInputChange}
            value={userFormData.first_name}
            required
          />
          <Form.Control.Feedback type="invalid">
            FirstName is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="last_name">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your LastName"
            name="last_name"
            onChange={handleInputChange}
            value={userFormData.last_name}
            required
          />
          <Form.Control.Feedback type="invalid">
            LastName is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
        <Form.Label>Sign up As</Form.Label>
          <Form.Check
            inline
            label="Main Teacher"
            name="is_main"
            type="radio"
            onChange={handleInputChange}
            value={true}
          />
          <Form.Check
            inline
            label="Substitute Teacher"
            name="is_main"
            type="radio"
            onChange={handleInputChange}
            value={false}
          />
        </Form.Group>

        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
