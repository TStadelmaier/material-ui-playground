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


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        // display: 'flex',
        // minHeight: '100vh',
        // flexDirection: 'column'
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%,',
        overflow: 'auto'
    },
    mainContent: {
        width: "100%",
        height: "100%",
        overflowY: "auto",
        flex: "auto"
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        zIndex: theme.zIndex.drawer + 1,
        // [theme.breakpoints.up('sm')]: {
        //   width: `calc(100% - ${drawerWidth}px)`,
        // },
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
    },
    content: {
        flexGrow: 1,
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
        zIndex: theme.zIndex.drawer + 1
    }
}));




function GridBaseLayout(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState(0);

    function handleMobileDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    function handleDrawerToggle() {
        setOpen(!open);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            {/* <Divider /> */}
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Grid container direction="column" spacing={0} 
            style={{ flexWrap: 'nowrap' }}
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
                <Grid
                    container
                    justify="flex-start"
                    wrap="nowrap"
                    alignContent="strecth"
                    alignItems="stretch"
                    style={{ height: "100%", background: "silver" }}
                >
                    <nav className={classes.drawer} aria-label="mailbox folders">
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                    </nav>
                   
                        <main className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}>
                            <div className={classes.toolbar} />
                            <Paper>
                                <Typography paragraph>
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
                        </Typography>
                                <Typography paragraph>
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
                        </Typography>
                                <Typography paragraph>
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
                        </Typography>
                                <Typography paragraph>
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
                        </Typography>
                                <Typography paragraph>
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
                        </Typography>
                                <Typography paragraph>
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
                        </Typography>
                                <Typography paragraph>
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
                        </Typography>
                                {/* <Menu></Menu> */}
                            </Paper>
                        </main>
                </Grid>
                <Grid item>
                    <BottomNavigation
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


export default GridBaseLayout;