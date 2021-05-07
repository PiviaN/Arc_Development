import React from "react";
import { Link } from "react-router-dom";

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Drawer = (props) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={props.openDrawer}
        onClose={() => props.setOpenDrawer(false)}
        onOpen={() => props.setOpenDrawer(true)}
        classes={{ paper: props.classes.drawer }}
      >
        <div className={props.classes.toolbarMargin} />
        <List disablePadding>
          {props.routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                props.setOpenDrawer(false);
                props.setValue(route.activeIndex); //props of props
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex} // props of props
              classes={{ selected: props.classes.drawerItemSelected }}
            >
              <ListItemText
                disableTypography
                className={props.classes.drawerItem}
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              props.setOpenDrawer(false);
              props.setValue(5); //props of props
            }}
            divider
            button
            classes={{
              root: props.classes.drawerItemEstimate,
              selected: props.classes.drawerItemSelected,
            }}
            component={Link}
            to="/estimate"
            selected={props.value === 5} //props of props
          >
            <ListItemText
              className={props.classes.drawerItem}
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={props.classes.drawerIconContainer}
        onClick={() => props.setOpenDrawer(!props.openDrawer)}
        disableRipple
      >
        <MenuIcon className={props.classes.drawerIcon} />
      </IconButton>
    </>
  );
};

export default Drawer;
