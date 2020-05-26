import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import { Home, List as ListIcon, ArrowBack, EditSharp } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import useStyles from "./styles";
import SidebarLink from "./components/SidebarLink/SidebarLink";
import { useLayoutState, useLayoutDispatch, toggleSidebar } from "../../context/LayoutContext";

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBack
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        <SidebarLink
          key="default"
          label="Default"
          path="/app/default"
          icon={(<Home />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
        />
        <SidebarLink
          key="Network"
          label="Network"
          path="/app/network"
          icon={(<ListIcon />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
        />
         
         <SidebarLink
          key="Clinicinvite"
          label="Clinicinvite"
          path="/app/clinicinvite"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
        />
        <SidebarLink
          key="Citizeninvite"
          label="Citizeninvite"
          path="/app/citizeninvite"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
        />
        <SidebarLink
          key="TestRequest"
          label="TestRequest"
          path="/app/testrequest"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
        />
        <SidebarLink
          key="TestAppointment"
          label="TestAppointment"
          path="/app/testappointment"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
        />
        <SidebarLink
          key="Covid19Test"
          label="Covid19Test"
          path="/app/covid19test"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
      />
        <SidebarLink
          key="Form"
          label="Form"
          path="/app/finalform"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
      />
            <SidebarLink
          key="StreetCred"
          label="StreetCred"
          path="/app/streetcred"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
      />

      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
