import React from 'react';
import {
    Container,
    List,
  ListItem,
  ListItemText ,
  ListItemIcon,
  Fab,
  makeStyles,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';
const useStyles = makeStyles(() => ({
    fab: {
        width:`${30}px`,
        height:`${1}px`,
        boxShadow:`${0}px`,
         },
}))
 const PasswordStrength = ({password}) => {
    const classes = useStyles();
    return (
        <>
    <Container maxWidth="sm">
<List>
<ListItem>
<ListItemIcon>
<Fab style={{background:/.{8,}/.test(password) ? `green` : `red`}} className={classes.fab} >
{/.{8,}/.test(password) ? <Check style={{color:`#fff`}}/> : <Close style={{color:`#fff`}}/>}
</Fab>
</ListItemIcon>
<ListItemText primary="minimum of 8 characters"/>
</ListItem>
<ListItem>
<ListItemIcon>
<Fab style={{background:/\d/.test(password) ? `green` : `red`}} className={classes.fab} >
{/\d/.test(password) ? <Check style={{color:`#fff`}}/> : <Close style={{color:`#fff`}}/>}
</Fab>
</ListItemIcon>
<ListIte primary="must contain a digit e.g 0,1,2 etc"/>
</ListItem>
<ListItem>
<ListItemIcon>
<Fab style={{background:/[A-Z]/.test(password) ? `green` : `red`}} className={classes.fab} >
{/[A-Z]/.test(password) ? <Check style={{color:`#fff`}}/> : <Close style={{color:`#fff`}}/>}
</Fab>
</ListItemIcon>
<ListItemText primary="must contain a capitalized letter e,g A,B,C etc"/>
</ListItem>
<ListItem>
<ListItemIcon>
<Fab style={{background:/[@#$%&*?]/.test(password) ? `green` : `red`}} className={classes.fab} >
{/[@#$%&*?]/.test(password) ? <Check style={{color:`#fff`}}/> : <Close style={{color:`#fff`}}/>}
</Fab>
</ListItemIcon>
<ListItemText primary="must contain a special character e.g @,#,$ etc"/>
</ListItem>
</List>
</Container>
</>
    )
  }
  export default PasswordStrength;