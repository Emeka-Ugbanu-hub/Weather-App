import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button,Typography,TextField,Switch,Checkbox,Paper} from '@material-ui/core';
import * as serviceWorker from './serviceWorker';

function  App(){ 
 return(
   <>
   <h1>HELLO WORLD</h1>
   <Typography variant="h1">Learning material ui</Typography>
  
   <TextField color="secondary" id="time" variant="outlined" type="text"  />
    <TextField color="primary" id="time" variant="outlined" type="email" placeholder="test@gmail.com"  />
    <Checkbox color="primary"></Checkbox>
    <Switch></Switch>
    <Paper color="primary" variant="outlined" elevation={0} />
<Paper />
   <Button  variant="contained" color="primary">Submit</Button>
   </>
 )
 
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
