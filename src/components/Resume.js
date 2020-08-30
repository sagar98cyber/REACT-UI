import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box,Typography} from "@material-ui/core"
import Navbar from './Navbar'
import { Opacity } from '@material-ui/icons';

const useStyles = makeStyles(theme=>(
    {
    mainContainer:{
        background:  "#1f232e"
        },
    timeLine:{
        position: "relative",
        padding:"1rem",margin:"0 auto",
        "&:before":{
            content:"''",
            position:"absolute",height:"100%",border:"1px solid tan",
            right:"40px",
            top:0,
        },
        "&after":{
            content:"''",
            display:"table",clear:"both",
        },
      [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:"auto",
            }
        }, },
        timeLineItem: {
            padding:"1rem",
            borderBottom:"2px solid tan",
            position:"relative",
            margin:"1rem 3rem 1rem 1rem",
            clear:"both",
            "&:before":{
                content:"''",
                position:"absolute",
                right:"-0.625rem",
                borderStyle:"solid",
                borderColor:"tomato tomato transparent transparent",
                top:"calc(50% - 5px)",
                borderWidth:"0.625rem",
                transform:"rotate(45deg)",
            },
            [theme.breakpoints.up("md")]:{
                //padding:"2rem",
                width:"44%",
                margin:"1rem", 
                "&:nth-of-type(2n)":{
                    float:"right",
                    margin:"1rem",
                    borderColor:"tan",

                },
                "&:nth-of-type(2n):before":{
                   // display:"none",                    
                   right:"auto",
                   left:"-0.625rem",
                   borderColor:"transparent transparent tomato tomato"
                }

            },
        },
        timeLineYear:{
            textAlign:"center",
            maxWidth:"9.375rem",
            margin:"0 3rem 0 auto",
            fontSize:"1.8rem",
            background:"tomato",
            color:"white",
            lineHeight:1,
            padding:"0.5 rem 0 1rem",
            "&:before":{
                display:"none",
            },
            [theme.breakpoints.up("md")]:{
                textAlign:"center",
                margin:"0 auto",
                "&:nth-of-type(2n)":{
                    float:"none",
                    margin:"0 auto",

                },
                "&:nth-of-type(2n)-before":{
                    display:"none",                    
                }
            }
       
    },
    heading: {
        color:"white",
        padding:"3rem 0",
        textTransform:"uppercase"
    },
    subHeading: {
        color:"white",
        padding:"0",
        textTransform:"uppercase",
    },

    }
)
);

const Resume = () => {
    const classes = useStyles();
    return (
        <>
          <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    WORKING EXPERIENCE
                </Typography>
            
            <Box component="div" 
            className={classes.timeLine}
            >
                <Typography variant="h3" //align="center" 
                //style={{color: "white"}}
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2019
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" 
                    //align="center" 
                    className={classes.subHeading}>
                        WEB DESIGN
                    </Typography>
                    <Typography variant="body1" 
                    style={{color:"tomato"}}
                    //align="center" 
                    >
                        COMPANY NAME WHERE I WORKED
                    </Typography>
                    <Typography variant="subtitle" align="center"
                    style={{color: "tan"}}>
                        Lorem20 dolor sit amet, consectetur adipiscing elit
                    </Typography>
                </Box>

                <Typography variant="h3" //align="center" 
                //style={{color: "white"}}
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" 
                    //align="center" 
                    className={classes.subHeading}>
                        flutter
                    </Typography>
                    <Typography variant="body1" 
                    style={{color:"tomato"}}
                    //align="center" 
                    >
                        COMPANY NAME WHERE I WORKED
                    </Typography>
                    <Typography variant="subtitle" align="center"
                    style={{color: "tan"}}>
                        Lorem20 dolor sit amet, consectetur adipiscing elit
                    </Typography>
                </Box>

                <Typography variant="h3" //align="center" 
                //style={{color: "white"}}
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" 
                    //align="center" 
                    className={classes.subHeading}>
                        NODE JS
                    </Typography>
                    <Typography variant="body1" 
                    style={{color:"tomato"}}
                    //align="center" 
                    >
                        COMPANY NAME WHERE I WORKED
                    </Typography>
                    <Typography variant="subtitle" align="center"
                    style={{color: "tan"}}>
                        Lorem20 dolor sit amet, consectetur adipiscing elit
                    </Typography>
                </Box>
                
                
            </Box>
        </Box>
        </>
    )
}

export default Resume
