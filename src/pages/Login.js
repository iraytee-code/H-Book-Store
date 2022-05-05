import React, { Fragment } from "react";
import { NavBar, FormField } from "../components";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
// import axios from "axios"

const Login = () => {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Row className="justify-content-center my-5">
          <Col md={4}>
            <Card>
              <Card.Header>
                <Card.Title>
                  <i className="fa fa-sign-in px-1" aria-hidden="true" />
                  Login
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={(data, { setSubmitting }) => {
                    alert(JSON.stringify(data, null, 2));
                    
                  }}
                  // validationSchema={validation.LoginSchema}
                >
                  {({
                    values,
                    error,
                    isSubmitting,
                    handleSubmit,
                    dirty,
                    isValid,
                  }) => (
                    <Form>
                      <FormField.BTextField
                        controlId={"email"}
                        type={"email"}
                        className="fa fa-envelope icon"
                        name="email"
                        placeholder="Email Address"
                      />

                      <FormField.BTextField
                        controlId={"password"}
                        type={"password"}
                        className="fa fa-lock icon"
                        name="password"
                        placeholder="Password"
                      />

                      <Card.Footer>
                        <Button
                          type="submit"
                          size="sm"
                          variant="success"
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                        <Button
                          type="reset"
                          size="sm"
                          variant="primary"
                          className="mx-2"
                        >
                          Reset
                        </Button>
                      </Card.Footer>

                      {/* {<pre>{JSON.stringify(values, null, 2)}</pre>} */}
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
