import React,{Component} from 'react';
import Skill from './Skill/Skill';

//@material-ui/core
import Grid from '@material-ui/core/Grid/index';

import List from '@material-ui/core/List/index';
import Slide from '@material-ui/core/Slide/index';

class Skills extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Slide direction='left' in={true}>
                <List>
                    <Grid container justify='center'>
                        <Skill
                            title='Language'
                            cardImage='https://i.ytimg.com/vi/DGJSq7Mp92A/maxresdefault.jpg'
                        />
                        <Skill
                            title='Language'
                            cardImage='https://i.ytimg.com/vi/DGJSq7Mp92A/maxresdefault.jpg'
                        />

                        <Skill
                            title='Language'
                            cardImage='https://i.ytimg.com/vi/DGJSq7Mp92A/maxresdefault.jpg'
                        />
                        <Skill
                            title='Language'
                            cardImage='https://i.ytimg.com/vi/DGJSq7Mp92A/maxresdefault.jpg'
                        />
                        <Skill
                            title='Language'
                            cardImage='https://i.ytimg.com/vi/DGJSq7Mp92A/maxresdefault.jpg'
                        />
                        <Skill
                            title='Language'
                            cardImage='https://i.ytimg.com/vi/DGJSq7Mp92A/maxresdefault.jpg'
                        />
                    </Grid>
                </List>
            </Slide>
        )
    }
}

export default Skills;