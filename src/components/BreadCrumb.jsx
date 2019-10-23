import React from "react";
import { emphasize, withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Tooltip, IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavLink from './NavLink';
import Grid from '@material-ui/core/Grid';
import { elementType } from "prop-types";

const StyledBreadcrumb = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        "&:hover, &:focus": {
            backgroundColor: theme.palette.grey[300]
        },
        "&:active": {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12)
        }
    }
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
    event.preventDefault();
    alert("You clicked a breadcrumb.");
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    },
    avatar: {
        background: "none",
        marginRight: -theme.spacing(1.5)
    },
    link: {
        // margin: theme.spacing(1),
        color: 'white',
    },
    linkActive: {
        // margin: theme.spacing(1),
    }
}));

export function DropDownSeparator(props) {
    return (
        <Tooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">Tooltip with HTML</Typography>
                    <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
                    {"It's very engaging. Right?"}
                </React.Fragment>
            }
            interactive
            placement="bottom-start"
        >
            <IconButton size="small">
                <NavigateNextIcon fontSize="small" />
            </IconButton>
        </Tooltip>
    );
}

export default function CustomizedBreadcrumbs(props) {
    const classes = useStyles();
    const {location} = props;

    let elements = location.pathname.length === 1 ?
     <NavLink className={classes.Link} to='/'>Home</NavLink>
     : location.pathname.split('/').map(element=> (
        element === '' ?
         <NavLink className={classes.Link} to='/'>Home</NavLink>
         : <NavLink className={classes.Link} to={location.pathname.split(element)[0] + element}>{element}</NavLink>
    ));

    return (
        <Grid container spacing={6}>
            <Grid item md={6} xs={12} >
                {/* <Paper elevation={0} className={classes.root}> */}
                <Breadcrumbs separator={<DropDownSeparator />} aria-label="breadcrumb">



                {elements}

                    {/* <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          onClick={handleClick}
        /> */}
                    {/* <Link className={classes.link}>Home</Link> */}
                    {/* <StyledBreadcrumb
          component="a"
          href="#"
          label="Catalog"
          onClick={handleClick}
        /> */}
                    {/* <Link className={classes.link} href={'/'}>Monitor</Link> */}
                    {/* <NavLink className={classes.link} to={'/'}>Monitor</NavLink> */}
                    {/* <StyledBreadcrumb
          label="Accessories"
          deleteIcon={<ExpandMoreIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        /> */}
                    {/* <Link className={classes.linkActive} href='/'>Jobs</Link> */}
                    <br/>
                    <NavLink className={classes.linkActive} to={'jobs'}>Jobs</NavLink>
                    <NavLink className={classes.linkActive} to={'jobs/bla'}>bla</NavLink>
                </Breadcrumbs>
                {/* </Paper> */}
            </Grid>
        </Grid>
    );
}
