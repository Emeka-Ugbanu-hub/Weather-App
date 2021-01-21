import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import index from "./index.css";
import logo from "./logo1.png";
import firebase from "firebase";
import PasswordStrength from "./PasswordStrength.js";
import {
  TextField,
  Button,
  Container,
  Avatar,
  IconButton,
  makeStyles,
  InputAdornment,
  SvgIcon,
  Divider,
  Typography,
  Box,
} from "@material-ui/core";
import { Visibility, VisibilityOff, Person,Facebook,Twitter } from "@material-ui/icons";
import{ ReactComponent as Google } from "./search.svg";


const useStyles = makeStyles(() => ({
  default: {
    marginTop: `${1}em`,
    height: `${70}%`,
    width: `${50}%`,
    background: `#fff`,
    padding: `${1}em`,
  },
  field: {
    marginTop: `${1}em`,
  },
  small: {
    width: `${70}px`,
    height: `${70}px`,
    marginLeft: `${40}%`,
  },
}));

const SignupSchema = Yup.object().shape({
  first: Yup.string().min(2,"Required field"),
  last: Yup.string().min(7,"Required field"),
  email: Yup.string().email(`please input a valid email`).min(4,"Required field"),
  password: Yup.string().required("This field must be filled"),
});
function App() {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const handleRequest = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
   alert(error) 
  });

  }
  return (
    <>
      <Container maxWidth="sm">
        <Avatar alt="CrystalWebPro" src={logo} className={classes.small} />
      </Container>
      <Formik
        enableReininitialize
        initialValues={{
          email: "",
          password: " ",
          first: " ",
          last: " ",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
         alert(`Sucess`)
        }}
      >
        {({ handleSubmit, handleBlur, values, handleChange, errors ,touched}) => (
          <form onSubmit={handleSubmit}>
  <Container className={classes.default} maxWidth="sm">
              <Person style={{ fontSize: "50px" }}></Person>
              <Button variant="contained"  fullWidth={true} disabled >
      <SvgIcon>
      <Google/>
      </SvgIcon>
      <Facebook onclick={handleRequest} style={{ fontSize: "35px",color:"#365899",marginLeft:`${2}em` }}/>
      <Twitter style={{ fontSize: "35px",color:"#1DA1F2",marginLeft:`${2}em`  }}/>
      </Button>
      <Box m={1} p={1} display="flex">
        <Box width="50%" p={1}>
              <Divider light={true} style={{ background: "#000" }}/>
              </Box>
              <Box p={1}>
              <Typography align="center" variant="body1">OR </Typography>
              </Box>
              <Box width="50%" p={1}>
              <Divider light={true} style={{ background: "#000" }}/>
              </Box>
              </Box>
              <TextField
                error={errors.first }
                type="text"
                helperText={errors.first}
                className={classes.field}
                onChange={handleChange}
                onBlur={handleBlur}
                name="first"
                variant="outlined"
                label="First Name"
                fullWidth={true}
              />

              <TextField
                error={errors.last }
                type="text"
                onChange={handleChange}
                helperText={errors.last}
                className={classes.field}
                name="last"
                variant="outlined"
                onBlur={handleBlur}
                label="Last Name"
                fullWidth={true}
              />
              <TextField
                error={errors.email}
                type="email"
                helperText={errors.email }
                className={classes.field}
                onChange={handleChange}
                name="email"
                variant="outlined"
                label="Email"
                onBlur={handleBlur}
                fullWidth={true}
              />
              <TextField
                error={errors.password && errors.touched}
                helperText={errors.password && errors.touched}
                onBlur={handleBlur}
                type={visible ? "text" : "password"}
                className={classes.field}
                onChange={(e) => {
                       handleChange(e);
                     {e.target.value.length ?  setDisplay(true) : setDisplay(false)};
                }
                }
                name="password"
                variant="outlined"
                label="Password"
                fullWidth={true}
                InputProps={{
                  endAdornment: (
                    <InputAdornment onClick={handleClick} position="end">
                      <IconButton>
                        {visible ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {display ? <PasswordStrength password={values.password} /> : ""}

              <Button
                type="submit"
                className={classes.field}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={true}
              >
                Sign Up
              </Button>
            </Container>
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
