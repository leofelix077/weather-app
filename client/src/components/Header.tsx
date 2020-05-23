import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 64,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuIcon: {
    color: theme.palette.primary.main,
  },
  button: {
    marginLeft: 8,
  },
  appBar: {
    backgroundColor: "transparent",
    display: "flex",
  },
  listItem: {
    color: "#8D8D8D",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    objectFit: "contain",
    width: "100%",
    height: 36,
  },
  loginContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const MenuAppBar: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const list = (): any => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setDrawerOpen(!drawerOpen)}
      onKeyDown={() => setDrawerOpen(!drawerOpen)}
    >
      <List>
        {["Random Graphs", "Fancy Gallery", "Some Animations"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} className={classes.listItem} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item xs={2} sm={4}>
              <Button onClick={() => setDrawerOpen(true)}>
                <MenuIcon className={classes.menuIcon} />
              </Button>
              <div>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                >
                  {list()}
                </Drawer>
              </div>
            </Grid>
            <Grid item sm={4} xs={3} className={classes.logoContainer}>
              <img
                className={classes.logo}
                src="https://static.bunchofnothing.com/logo.png"
                alt="Logo"
              />
            </Grid>
            <Grid
              item
              container
              sm={4}
              xs={7}
              className={classes.loginContainer}
            >
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;
