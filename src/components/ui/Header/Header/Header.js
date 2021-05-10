import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import ElevationScroll from "../ElevationScroll";
import { menuOptions } from "../../../../data/options";
import HeaderTabs from "../HeaderTabs";
import Drawer from "../Drawer";

import logo from "../../../../assets/logo.svg";

import {
  AppBar,
  Toolbar,
  useTheme,
  Button,
  useMediaQuery,
} from "@material-ui/core";

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          props.setValue(5);
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => props.setValue(0)}
              className={classes.logoContainer}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matchesMD ? (
              <Drawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                classes={classes}
                routes={routes}
                setValue={props.setValue}
                value={props.value}
              />
            ) : (
              <HeaderTabs
                value={props.value}
                handleChange={handleChange}
                routes={routes}
                setValue={props.setValue}
                anchorEl={anchorEl}
                openMenu={openMenu}
                handleClose={handleClose}
                menuOptions={menuOptions}
                handleMenuItemClick={handleMenuItemClick}
                selectedIndex={props.selectedIndex}
                classes={classes}
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
