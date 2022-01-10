import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validation";
import "./singup.css";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingUp = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name:"",
        age:"",
        email: "",
        password: "",
        passwordCheck: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });
  return (
    <div className="background">
     
      <div id="backgroundGrad"> 
       
        <Card
          style={{
            width: "24rem",
            background: "none",
            color: "white",
            border: "none",
          }}
        >
          <Card.Body style={{ paddingTop: "120px", marginLeft: "100px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Card.Text className="mb-3 text-muted" style={{ margin: "0" }}>
                START FOR FREE
              </Card.Text>
              <Card.Title className="mb-4 " style={{ fontSize: "34px" }}>
                Create new account.
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted"  style={{ fontSize: "14px" }}>
                Already a member ? <Link to="/login">Login.</Link>{" "}
              </Card.Subtitle>
            </div>
            <Form onSubmit={handleSubmit} style={{fontSize:'16px'}}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Form.Group className="mb-1 ">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    size="sm"
                    className="me-1"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="name"
                    placeholder="Username"
                  />
                  {errors.name && touched.name && (
                    <Form.Text className="text-muted">{errors.name}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-1 ">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    size="sm"
                    className="ms-1"
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    placeholder="Age"
                  />
                  {errors.age && touched.age && (
                    <Form.Text className="text-muted">{errors.age}</Form.Text>
                  )}
                </Form.Group>
              </div>
              <Form.Group className="mb-1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  size="sm"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="Enter email"
                />
                {errors.email && touched.email && (
                  <Form.Text className="text-muted">{errors.email}</Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  size="sm"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <Form.Text className="text-muted">
                    {errors.password}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control
                  size="sm"
                  name="passwordCheck"
                  value={values.passwordCheck}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  placeholder="Password"
                />
                {errors.passwordCheck && touched.passwordCheck && (
                  <Form.Text className="text-muted">
                    {errors.passwordCheck}
                  </Form.Text>
                )}
              </Form.Group>
              <Button size="sm"  variant="primary" type="submit">
                Create Account
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SingUp;
