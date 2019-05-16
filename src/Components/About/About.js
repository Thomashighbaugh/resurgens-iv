import React,{Component} from 'react';

import AboutCard from './AboutCard/AboutCard';
import ActionButtons from './ActionButtons/ActionButtons';

//@material-ui imports
import {withStyles} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import Slide from '@material-ui/core/Slide'


const styles = (theme) => ({
    img:{
        maxWidth:600,
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
        
    },
    cardAndImage:{
        marginTop:'3em',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#293036'
    },
    encompassingDiv:{
        
        paddingTop:'1em',
        height:'90vh',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#293036',
        justifyContent:'space-around',
        [theme.breakpoints.down('sm')]:{
            height:'auto',
            display:'inline',
            
        }
        
    }
    
});

class About extends Component{
    constructor(props){
        super(props);
        this.state={
            image:'https://resurgens-iii.netlify.com/images/drapeaunoir.png'
        }
    }

    render(){
        const {classes} = this.props;
        const {image} = this.state;
        return(
            <Slide direction='right' in={true}>
                <Paper className={classes.encompassingDiv}>

                    <div className={classes.cardAndImage}>
                        <img src={image} className={classes.img}  alt=''/>
                        <AboutCard image={image}/> 
                    </div>

                    <ActionButtons />


                </Paper>
            </Slide>
        )
    }
}

export default withStyles(styles)(About);