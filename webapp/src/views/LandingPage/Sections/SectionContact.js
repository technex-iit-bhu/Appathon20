import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Swal from "sweetalert2";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import CustomInput from "../../../components/CustomInput/CustomBorderedInput";

import signuploginPageStyle from "../../../assets/jss/material-kit-pro-react/views/loginPage.jsx";
import Reveal from 'react-reveal/Reveal';
import {validateEmail, validateName, validatePhone} from "../../../utils/Validations";

class SectionContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      message: "",
      phone: "",
      touched_fullName: false,
      touched_email: false,
      touched_message: false,
      touched_phone: false
    };
  }

  clear = () => {
    this.setState({ email: "", phone: "", message: "", fullName: "" });
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("message").value = "";
  };

  handleOnChange(type, event) {
    this.setState({
      [type]: event.target.value
    });
  }

  render() {
    let { classes } = this.props;

    let {
      touched_fullName,
      touched_email,
      touched_phone,
      touched_message
    } = this.state;
    let __self = this;
    return (
      <section
        id="contactus"
        className=" bg-azure-light"
        style={{ paddingTop: 30 }}
      >
        <div className="container visible-xs">
          <Reveal effect="fade" duration={300}>
          <h4
            className="h6 text-center"
            style={{
              margin: "50px 0 0",
              fontSize: 12,
              fontFamily: "'Source Serif Pro', serif",
              fontWeight: "500"
            }}
          >
            GOT A QUESTION?
          </h4>
          <h2
            className="h3 text-center"
            style={{
              margin: "10px 0px",
              fontSize: 12,
              fontFamily: "'Source Serif Pro', serif",
              fontWeight: "500",
              color: "#183185"
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              margin: "0px",
              textAlign: "center",
              fontSize: "22px",
              fontFamily: "'Source Serif Pro', serif",
              fontWeight: "500"
            }}
          >
            We’re here to help and answer any question you might have. We look
            forward to hearing from you 🙂
          </p>
          </Reveal>
        </div>

        <div
          className="et_pb_section_1 et_pb_section diagonal top"
          // style={{backgroundColor:"rgb(242, 242, 242)"}}
          style={{ paddingBottom: 30, background: "white" }}
        >
          
          <div className={"container"}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={8} md={5}>
              <Reveal effect="fadeInUp" duration={300}>
                <Card raised style={{ marginTop: "-83px",boxShadow: "0px 7px 38px -19px rgba(67,66,210,0.75)" }}>
                
                  <form className={classes.form}>
                    <CardBody style={{ paddingLeft: 50, paddingRight: 50 }}>
                      <CustomInput
                        labelText="Full Name"
                        id="fullName"
                        // success={validateName(__self.state.fullName)}
                        error={
                          touched_fullName
                            ? !validateName(__self.state.fullName)
                            : false
                        }
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: event => {
                            __self.handleOnChange("fullName", event);
                          }
                        }}
                      />
                      <CustomInput
                        labelText="Email"
                        id="email"
                        // success={validateEmail(__self.state.email)}
                        error={
                          touched_email
                            ? !validateEmail(__self.state.email)
                            : false
                        }
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          onChange: event => {
                            __self.handleOnChange("email", event);
                          }
                        }}
                      />
                      <CustomInput
                        labelText="Mobile Number"
                        id="mobile"
                        // success={validatePhone(__self.state.phone)}
                        error={
                          touched_phone
                            ? !validatePhone(__self.state.phone)
                            : false
                        }
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "tel",
                          onChange: event => {
                            __self.handleOnChange("phone", event);
                          }
                        }}
                      />
                      <CustomInput
                        labelText="Message"
                        id="message"
                        // success={validatePassword(__self.state.message)}
                        error={
                          touched_message
                            ? !validateName(__self.state.message)
                            : false
                        }
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rowsMax: "6",
                          onChange: event => {
                            __self.handleOnChange("message", event);
                          }
                        }}
                      />
                    </CardBody>
                    <CardFooter
                      className={classes.cardFooter}
                      style={{ paddingLeft: 50, paddingRight: 50 }}
                    >
                      <Button
                        // color="primary"
                        size="md"
                        // fullWidth
                        style={{ backgroundColor: "#3331ce" }}
                        disabled={
                          !validateName(__self.state.fullName) ||
                          !validateEmail(__self.state.email) ||
                          !validateName(__self.state.message) ||
                          !validatePhone(__self.state.phone)
                        }
                      >
                        Submit
                      </Button>
                    </CardFooter>
                  </form>
                  
                </Card>
                </Reveal>
              </GridItem>

              <GridItem xs={0} sm={4} md={7} className="hidden-xs">
                <Reveal effect="fade" duration={300}>
                <h4
                  className="h6 text-center"
                  style={{ margin: "30px 0 0", fontSize: 12 }}
                >
                  GOT A QUESTION?
                </h4>
                <h2
                  className="h3 text-center"
                  style={{ margin: "10px 0px", color: "#183185" }}
                >
                  Contact Us
                </h2>
                <p
                  style={{
                    margin: "0px",
                    textAlign: "center",
                    fontSize: 16,
                    fontFamily: "'Source Serif Pro', serif",
                    fontWeight: "500"
                  }}
                >
                  We’re here to help and answer any question you might have. We
                  look forward to hearing from you 🙂
                </p>
                </Reveal>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(signuploginPageStyle)(SectionContact);
