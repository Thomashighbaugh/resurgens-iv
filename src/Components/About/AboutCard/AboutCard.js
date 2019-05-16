import React,{Component} from 'react';

//@material-ui imports 
import {withStyles} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles =(theme) => ({
    card:{
        maxWidth:350,
        padding:10,
        marginTop:10,
        
    },
    cardMedia:{
        display:'none',
        [theme.breakpoints.down('sm')]: {
            display:'inline'
        },
        
    }
})

class AboutCard extends Component{
    render(){
        const {classes, image} = this.props;

        return(
            <Card className={classes.card}>
                <CardHeader title='Thomas Leon Highbaugh' titleTypographyProps={{component:'h5', variant:'h5', align:'center'}} />
                <CardMedia 
                    className={classes.cardMedia}
                    image={image} 
                    component='img' 
                />
                <CardContent>
                    A born again developer who recently discovered his eye for designs and photography. By merging these skills into web development, the Electric Tantra Design Paradigm has come into its own and is at the heart of this site's design. Currently doing freelance development work but always looking for team to learn and grow with.
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(AboutCard);