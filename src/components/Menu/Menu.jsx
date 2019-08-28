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
        minWidth: '528px',
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


function Menu(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={6}>
            <Grid item md={6} xs={12} >
                <Card className={classes.card}>
                <div className={classes.icon}>
                <SettingsIcon></SettingsIcon>

                </div>
                <CardContent className={classes.content}>
                <div style={{maxWidth:'500px'}}>
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
            <Grid item md={6} xs={12} >
                <Card className={classes.card}>
                <div>
                <SettingsIcon></SettingsIcon>

                </div>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5" style={{color:'#7FBBE2'}}>
                    Heading
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
            Description
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </Typography>
                </CardContent>
                <div className={classes.circle}>
                    1
                </div>
                </Card>
            </Grid>       
        </Grid>
    )
}

Menu.propTypes = {

}

export default Menu;