import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../avatar.JPG'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon,
    Slider
} from '@material-ui/core'
import AppleIcon from '@material-ui/icons/Apple';
import {
    ArrowBack,
   // AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from '@material-ui/icons'

const useStyles = makeStyles(theme=>({
    menuSliderContainer :{
        width: 250,
        background:  "#511",
        height: "100%"
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Icon1",
        listPath: "/",
    },
    {
        listIcon: <AppleIcon/>,
        listText: "Icon2",
        listPath: "/resume",
    },
    {
        listIcon: <Apps/>,
        listText: "Icon3",
    },
    {
        listIcon: <ContactMail/>,
        listText: "Icon4",
    },
]

const Navbar = () => {
    const [state, setstate] = useState({right:false});
    const toggleSlider = (slider,open)=>()=>{
        setstate({...state,[slider]:open})
    };
    const classes = useStyles()
    const sideList = slider =>(
        <Box
            onClick={toggleSlider(slider, false)} 
            component="div" 
            className={classes.menuSliderContainer}
        >
            <Avatar src ={avatar} alt="Russel Crowe" className = {classes.avatar}/>
            <Divider/>
            <List>
                {menuItems.map((lsItem,key)=>(
                    <ListItem button key= {key} component={Link} to= {lsItem.listPath}>
                        <ListItemIcon style={{color: "tan"}}>
                                    {lsItem.listIcon}            
                        </ListItemIcon> 
                        <ListItemText primary={lsItem.listText} style={{color: "tan"}}/>
                    </ListItem>
                ))}
            </List>            
        </Box>
        
    )
    return (
        <>
        <Box component = "nav">
            <AppBar position="static" style={{background:"#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                        <ArrowBack style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:  "tan"}}>
                        SAGAR
                    </Typography>
                    <MobilRightMenuSlider
                    anchor="right"
                    open={state.right}
                    onClose= {toggleSlider("right",false)}>
                        {sideList("right")}
                    
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>            
        </Box>
        </>
    )
}

export default Navbar
