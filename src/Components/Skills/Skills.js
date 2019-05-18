import React, { Component } from "react";
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
            <Slide direction='right' in={true}>
                <List>
                    <Grid container justify='center'>
                        <Skill
                            title='HTML5'
                            cardImage='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png'
                        />
                        <Skill
                            title='CSS3'
                            cardImage='https://fthmb.tqn.com/zrcb1zA4Vi47uULJhJKJdcshBgk=/1024x1024/filters:fill(auto,1)/css3-57b597e85f9b58b5c2b338de.png'
                        />

                        <Skill
                            title='Javascript'
                            cardImage='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
                        />
                        <Skill
                            title='Node.JS'
                            cardImage='https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
                        />
                        <Skill
                            title='React'
                            cardImage='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                        />
                        <Skill
                            title='Redux'
                            cardImage='https://cdn-images-1.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png'
                        />
                        <Skill
                            title='Python 2&3'
                            cardImage='https://www.python.org/static/opengraph-icon-200x200.png'
                        />
                        <Skill
                            title='PHP 7'
                            cardImage='https://owncloud.org/wp-content/uploads/2015/07/php7-transparent.png'
                        />
                        <Skill
                            title='MYSQL'
                            cardImage='https://uploads.toptal.io/blog/category/logo/60/sql.png'
                        />
                        <Skill
                            title='Postgresql'
                            cardImage='https://duckduckgo.com/i/270e21a9.png'
                        />
                        <Skill
                            title='Redis'
                            cardImage='https://redislabs.com/wp-content/themes/redislabs/assets/images/redis-logo-stack.png'
                        />
                        <Skill
                            title='BASH Shell Scripting'
                            cardImage='https://raw.githubusercontent.com/odb/official-bash-logo/master/assets/Logos/Icons/PNG/512x512.png'
                        />
                        <Skill
                            title='Linux'
                            cardImage='https://cdn.pixabay.com/photo/2013/07/13/11/43/tux-158547_960_720.png'
                        />
                    </Grid>
                </List>
            </Slide>
        )
    }
}

export default Skills;