import React from 'react'
import { Grid, AppBar, Toolbar, IconButton, Hidden, Typography, List, ListItem, Divider, ListItemIcon, ListItemText, Drawer, Paper, BottomNavigation, BottomNavigationAction, TextareaAutosize } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { classes } from 'istanbul-lib-coverage';
import Menu from '../Menu/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomizedBreadcrumbs from '../BreadCrumb';
import { Switch, Route } from 'react-router-dom';
import Jobs from '../Jobs';

const drawerWidth = 280;
const navWidth = 280;

const useStyles = makeStyles(theme => ({

    root: {
        // display: 'flex',
        height: '100vh',
        backgroundColor: '#2F3847',
        flexWrap: 'nowrap'
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%,',
        overflow: 'auto'
    },
    mainContent: {
        // width: "100%",
        display: 'flex',
        height: "100%",
        overflowY: "auto",
        flex: "auto"
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: navWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: navWidth,
        zIndex: theme.zIndex.drawer + 1,
        // [theme.breakpoints.up('sm')]: {
        //   width: `calc(100% - ${drawerWidth}px)`,
        // },
        backgroundColor: 'rgb(47, 56, 71)'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        // [theme.breakpoints.up('sm')]: {
        //   display: 'none',
        // },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        // overflowY: '',
    },
    content: {
        flexGrow: 1,
        // height: '100%',
        // flex:1,
        // flexDirection: "column",
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    footer: {
        padding: '0px',
        margin: '0px',
        flex: 1,
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgb(47, 56, 71)'
    },
    listItemRoot: {
        '&:hover': {
            background: '#rgba(127, 187, 226, 0.37)'
        },
        '&$selected': {
            background: '#006FB7',
            // backgroundColor: '#006FB7',
            '&:hover': {
                background: '#006FB7',
            },
            '&::after': {
                content: '""',
                left: '100%',
                width: '',
                height: '0',
                borderTop: '25px solid transparent',
                borderBottom: '25px solid transparent',
                borderLeft: '15px solid #016fb7',
                position: 'absolute',
            }
        },
        // $disabled is a reference to the local disabled
        // rule within the same style sheet.
        // By using &, we increase the specificity.
        '&$disabled': {
            background: 'rgba(0, 0, 0, 0.12)',
            color: 'white',
            boxShadow: 'none',
        }
    },
    paper: {
        padding: theme.spacing(6)
    },
    disabled: {},

    selected: {},
    hover: {},
    after: {},
}));




function GridTest(props) {
    const { container, mainArea } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState(0);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    function handleMobileDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    function handleDrawerToggle() {
        setOpen(!open);
    }

    function handleListItemClick(event, index) {
        setSelectedIndex(index);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            {/* <Divider /> */}
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts', 'All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text}
                        // className={classes.listItem}
                        classes={{
                            root: classes.listItemRoot,
                            selected: classes.selected,
                        }}
                        selected={selectedIndex === index}
                        onClick={event => handleListItemClick(event, index)}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text}
                        />
                    </ListItem>
                ))}
            </List>
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}
                    classes={{
                            root: classes.listItemRoot,
                            selected: classes.selected,
                        }}
                    selected={selectedIndex === index}
                    onClick={event => handleListItemClick(event, index)}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    return (
        <div>
            <Grid container direction="column" spacing={0}
                // style={{ flexWrap: 'nowrap', height: '100vh' }}
                className={classes.root}
            >
                <Grid item>
                    <header>
                        <AppBar position="fixed" className={classes.appBar}>
                            <Toolbar>
                                <Hidden smUp implementation="js">
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleMobileDrawerToggle}
                                        className={classes.menuButton}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Hidden>
                                <Hidden smDown implementation="js">
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        className={classes.menuButton}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Hidden>
                                <Typography variant="h6" noWrap>
                                    Responsive drawer
                            </Typography>
                            </Toolbar>
                        </AppBar>
                    </header>
                </Grid>
                <Grid item className={classes.mainContent}>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <div>
                            {/* style={{width:'300px'}}> */}
                            <Hidden smUp implementation="js">
                                <Drawer
                                    container={container}
                                    variant="temporary"
                                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                    open={mobileOpen}
                                    onClose={handleMobileDrawerToggle}
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    ModalProps={{
                                        keepMounted: true, // Better open performance on mobile.
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            </Hidden>
                            <Hidden xsDown implementation="js">
                                <Drawer
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    variant="persistent"
                                    open={open}
                                    onClose={handleDrawerToggle}
                                >
                                    {drawer}
                                </Drawer>
                            </Hidden>
                        </div>
                    </nav>

                    <main className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}>
                        <div className={classes.toolbar} />

                        {/* <Paper className={classes.paper.root}> */}
                        {/* <Typography paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                donec massa sapien faucibus et molestie ac.
                        </Typography>
                            <Typography paragraph>
                                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                        </Typography> */}
                        
                        <CustomizedBreadcrumbs />
                        {/* {props.children} */}
                        {mainArea}
                        {/* <Menu></Menu> */}
                        {/* <Switch> */}
                            {/* <Route path={match.url} exact component={Menu} /> */}
                            {/* <Route path="/" exact component={Menu} /> */}
                            {/* <Route path={`${match.path}test`}  component={CustomizedBreadcrumbs} /> */}
                            {/* <Route path="/test" exact component={CustomizedBreadcrumbs} /> */}
                            {/* <Route path="/jobs" exact component={Jobs} /> */}
                            {/* <Route path={`${match.url}jobs`}  component={Jobs} /> */}
                        {/* </Switch> */}
                        {/* </Paper> */}
                    </main>
                </Grid>
                <Grid item className={classes.footer}>
                    <BottomNavigation
                        className={classes.footer}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </Grid>
            </Grid>
        </div>
    );
}


export default GridTest;