import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Card, CardContent, Typography, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        // minWidth: 275,
        // minWidth: '528px',
        height: '145px',
        backgroundColor: '#283241',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '20px',
    
      },
      content: {
        flex: '0 1 auto',
      },
      circle:{
          flex: '0 1 auto',
          display: 'flex',
          borderRadius:'50%',
          height:'50px',
          width:'50px',
          border: '2px solid green',
          alignItems: 'center',
          justifyContent: 'center',
      },
      icon:{
          flex: '0 1 auto',
      }
})

const page1 = {
    title:'page1',
    description:'description for page1',
    icon:'',
    route:'',
    component:''
}
const page2 = {
    title:'page2',
    description:'description for page2',
    icon:'',    
    route:'',
    component:''
}
const pages = [page1,page2];


function Menu(props) {
    const classes = useStyles();
    // const {pages} = props;
    const pagetest = pages;
    const menu = pagetest.map(page=>(
            <Grid item md={6} xs={12} >
                <Card className={classes.card}>
                    <div className={classes.icon}>
                        <SettingsIcon></SettingsIcon>
                    {page.icon}
                    </div>
                    <CardContent className={classes.content}>
                        <div>  
                        {/* style={{maxWidth:'500px'}}> */}
                        <Typography component="h5" variant="h5" style={{color:'#7FBBE2'}} align="left" noWrap>
                            Heading {page.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" align="left" >
                            {page.description}
                        </Typography>
                        </div>
                    </CardContent>
                    <div className={classes.circle}>
                        1
                    </div>
                </Card>
            </Grid>
    ))
    return (
        <Grid container spacing={6}>
            <Grid item md={6} xs={12} >
                <Card className={classes.card}>
                <div className={classes.icon}>
                <SettingsIcon></SettingsIcon>

                </div>
                <CardContent className={classes.content}>
                <div>  
                {/* style={{maxWidth:'500px'}}> */}
                <Typography component="h5" variant="h5" style={{color:'#7FBBE2'}} align="left" noWrap>
                    Heading
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" align="left" >
            Description
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </Typography>
          </div>
                </CardContent>
                <div className={classes.circle}>
                    1
                </div>
                </Card>
            </Grid>
            <Grid item md={6} xs={12}>
                <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography conmpnent="h5" variant="h5"style={{color:'#7FBBE2'}} align="left" >   
                    Heading
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
           Description
          </Typography>
                </CardContent>
                <div className={classes.circle}>
                <span>1</span>
                </div>
                </Card>
            </Grid>
            {menu}   
        </Grid>
    )
}

Menu.propTypes = {

}

export default Menu;