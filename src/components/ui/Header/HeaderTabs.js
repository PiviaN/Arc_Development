import React from "react";
import { Link } from "react-router-dom";

import { Tabs, Tab, Button, Menu, MenuItem } from "@material-ui/core";

const HeaderTabs = (props) => {
  return (
    <React.Fragment>
      <Tabs
        value={props.value} // p p
        onChange={props.handleChange}
        className={props.classes.tabContainer}
        indicatorColor="primary"
      >
        {props.routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={props.classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={props.classes.button}
        onClick={() => props.setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        open={props.openMenu}
        onClose={props.handleClose}
        classes={{ paper: props.classes.menu }}
        MenuListProps={{
          onMouseLeave: props.handleClose,
        }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {props.menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: props.classes.menuItem }}
            onClick={(event) => {
              props.handleMenuItemClick(event, i);
              props.setValue(1);
              props.handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default HeaderTabs;
