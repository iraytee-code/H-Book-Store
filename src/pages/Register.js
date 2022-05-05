import React, { Fragment } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { NavBar, FormField } from "../components";
import { Formik } from "formik";
const Register = () => {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Row className="justify-content-center my-5">
          <Col md={4}>
            <Card>
              <Card.Header>
                <Card.Title>
                  <i className="fa fa-user-plus px-1" aria-hidden="true" />
                  Register
                </Card.Title>
              </Card.Header>

              <Card.Body>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    gender: "",
                    password: "",
                    contactInfo: {
                      address: "",
                      phoneNumber: "",
                    },
                  }}
                  onSubmit={(data, { setSubmitting }) => {
                    // alert(JSON.stringify(data, null, 2));
                    console.log(data);
                  }}
                >
                  {({
                    values,
                    error,
                    isSubmitting,
                    handleSubmit,
                    dirty,
                    isValid,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <FormField.BTextField
                        controlId={"firstName"}
                        type={"text"}
                        placeholder="First Name"
                        className="fa fa-user-circle icon"
                        name="firstName"
                      />
                      <FormField.BTextField
                        controlId={"lastName"}
                        type={"text"}
                        placeholder="Last Name"
                        className="fa fa-user-circle icon"
                        name="lastName"
                      />
                      <FormField.BTextField
                        type={"password"}
                        placeholder="Password"
                        className="fa fa-lock icon"
                        name="password"
                      />
                      <FormField.BTextField
                        controlId={"email"}
                        type="email"
                        placeholder="Email Address"
                        className="fa fa-envelope icon"
                        name="email"
                      />
                      <FormField.BTextField
                        controlId={"phoneNumber"}
                        type="number"
                        placeholder="Phone Number"
                        className="fa fa-plus-square icon"
                        name="phoneNumber"
                      />
                      <FormField.BTextField
                        controlId={"address"}
                        type="text"
                        placeholder="Address"
                        className="fa fa-address-card icon"
                        name="address"
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
                          Rese
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

export default Register;
