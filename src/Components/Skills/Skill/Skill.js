import React,{Component} from 'react';

//@material-ui imports
import {withStyles} from '@material-ui/core/styles/index';
import ListItem from '@material-ui/core/ListItem/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import Divider from '@material-ui/core/Divider/index';
import Typography from '@material-ui/core/Typography/index';
import Grid from '@material-ui/core/Grid/index';
import Card from '@material-ui/core/Card/index';
import CardHeader from '@material-ui/core/CardHeader/index';
import CardMedia from '@material-ui/core/CardMedia/index';
import Grow from '@material-ui/core/Grow/index';

const styles = (theme) => ({
    listItem:{
        display:'none',
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            width:'100vw'
        }
    },
    cardImage:{
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:'1em'
    },
    dialogTitle:{
        display:'flex',
        alignItems:'center',
    },
    dialogContent:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around'
    },
    closeIcon:{
        width:32,
        height:32
    },
     card:{
        maxWidth:200,
        padding:10,
        margin:20,
        height:'90%'
    },
    gridItem:{
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },
    hr:{
        marginBottom: '40%'
    }
});

class Skill extends Component{

    constructor(props){
        super(props);
        this.state={
            isDialogOpen:false
        }
    }

    toggleDialog(){
        const {isDialogOpen} = this.state;
        this.setState({isDialogOpen:!isDialogOpen})
    }

    render(){
        const {title, cardImage, classes} = this.props;
        const {isDialogOpen} = this.state;
        return(
            <div>
                <ListItem className={classes.listItem} button divider onClick={()=>this.toggleDialog()}>
                   <ListItemText
                        primaryTypographyProps={{component:'h4', variant:'h4'}}
                    >
                        {title}
                    </ListItemText>

                    <Dialog open={isDialogOpen} TransitionComponent={Grow}  fullScreen>

                       <Divider />

                        <DialogContent className={classes.dialogContent}>
                            <div>
                                <img className={classes.cardImage} src={cardImage}   alt=''/>
                                <Typography component='h5' variant='h5'>{title}</Typography>
                            </div>
                        </DialogContent>
                    </Dialog>

                </ListItem>


                <Grid className={classes.gridItem} item xs={12} style={{height:'95%'}}>

                    <Card className={classes.card}>



                        <CardMedia
                            className={classes.cardImage}
                            image={cardImage}
                            component='img'
                        />
                        <Divider />
                        <CardHeader
                            title={title}
                            titleTypographyProps={{component:'h5', variant:'h5', align:'center'}}
                        />

                    </Card>

                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(Skill);