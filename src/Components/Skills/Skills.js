import React,{Component} from 'react';
import Skill from './Skill/Skill';

//@material-ui/core
import Grid from '@material-ui/core/Grid/index';
import Divider from '@material-ui/core/Divider';
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
                            cardImage='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png'
                        />
                        <Skill
                            title='Language'
                            cardImage='https://fthmb.tqn.com/zrcb1zA4Vi47uULJhJKJdcshBgk=/1024x1024/filters:fill(auto,1)/css3-57b597e85f9b58b5c2b338de.png'
                        />

                        <Skill
                            title='Language'
                            cardImage='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
                        />
                        <Skill
                            title='Language'
                            cardImage='https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
                        />
                        <Skill
                            title='Language'
                            cardImage='https://uploads.toptal.io/blog/category/logo/60/sql.png'
                        />
                        <Skill
                            title='Language'
                            cardImage='https://duckduckgo.com/i/270e21a9.png'
                        />
                        <Skill
                            title='Language'
                            cardImage='https://duckduckgo.com/i/b34d8a01.png'
                        />
                    </Grid>
                </List>
            </Slide>
        )
    }
}

export default Skills;