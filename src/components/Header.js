import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typed from 'react-typed'
import avatar from '../avatar.JPG'
import { Typography,Avatar,Box,Grid } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
   avatar: {
       width:theme.spacing(13),
       height:theme.spacing(13),
       margin: theme.spacing(1),
   },
   title: {
       color: "tomato",

   },
   subtitle: {
       color: "tan",
       marginBottom: "3rem",
   },
   typedContainer: {
       position: "absolute",
       top: "50%",
       left: "50%",
       transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",zIndex:1,
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt = "Russel Crowe"></Avatar>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed typeSpeed={40} strings={["SAGAR SHAH" ]}></Typed>
            </Typography>
            <Typography 
            className={classes.subtitle}
            variant="h4">
                <Typed 
                typeSpeed={40} 
                backSpeed={65}
                loop
                strings={["Always Learning","Hustling","Doings things Differently","IG: __SAGAR_SHAH__" ]}>                   
                </Typed>
            </Typography>
        </Box>
    )
}

export default Header
