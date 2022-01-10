import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validation";
import "./singup.css";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {  
        email: "",
        password: "",
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
                Say Hi Challenge On.
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted"  style={{ fontSize: "14px" }}>
                Don't you have an account ? <Link to="/register">Sign up.</Link>{" "}
              </Card.Subtitle>
            </div>
            <Form onSubmit={handleSubmit} style={{fontSize:'16px'}}>
           
                
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

              <Form.Group className="mb-2">
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
             
              <Button size="sm" variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;

