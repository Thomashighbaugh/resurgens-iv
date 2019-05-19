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
                            cardImage='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd5%2FCSS3_logo_and_wordmark.svg%2F726px-CSS3_logo_and_wordmark.svg.png&f=1'
                        />

                        <Skill
                            title='Javascript'
                            cardImage='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
                        />
                        <Skill
                            title='Node.JS'
                            cardImage='http://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png'
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
                            title='JSX'
                            cardImage='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.rickybruner.com%2Fimg%2Fresumelogos%2Fjsx.png&f=1'
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