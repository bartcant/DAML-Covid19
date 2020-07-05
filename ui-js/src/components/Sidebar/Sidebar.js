import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home,
  ArrowBack,
  EditSharp,
  LocalHospital,
  Person,
  NoteAdd,
  Extension,
  ListAlt,
  Healing,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import useStyles from "./styles";
import SidebarLink from "./components/SidebarLink/SidebarLink";
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserState } from "../../context/UserContext";
// import { covid19_icon } from "./components/covid19.png";

function Sidebar({ location }) {
  const user = useUserState();
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
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
          label="Experiments"
          path="/app/default"
          icon={<Home />}
          location={location}
          isSidebarOpened={isSidebarOpened}
        />
        {user.role === "Operator" && 
          <SidebarLink
            key="Network"
            label="Network"
            path="/app/network"
            icon={<Extension />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        }
        {user.role === "AtriumHealth" && 
          <SidebarLink
            key="Clinicinvite"
            label="Clinicinvite"
            path="/app/clinicinvite"
            icon={<LocalHospital />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        }
        {user.role === "AtriumHealth" && 
          <SidebarLink
            key="Clinicupdate"
            label="Clinicupdate"
            path="/app/clinicupdate"
            icon={<NoteAdd />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        }
        {user.role === ("Alice")  && 
          <SidebarLink
            key="Citizeninvite"
            label="Citizeninvite"
            path="/app/citizeninvite"
            icon={<Person />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        }
        {user.role === ("Alice" && "Bob")  && 
          <SidebarLink
            key="Citizenupdate"
            label="Citizenupdate"
            path="/app/citizenupdate"
            icon={<NoteAdd />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        }
        {user.role === ("Alice" && "Bob")  && 
          <SidebarLink
            key="TestRequest"
            label="TestRequest"
            path="/app/testrequest"
            icon={<Healing />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        }
        {user.role === "AtriumHealth" && 
          <SidebarLink
            key="TestAppointment"
            label="TestAppointment"
            path="/app/testappointment"
            icon={<Healing />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        }
        {user.role == ("NCHealth" && "Operator")  && 
          <SidebarLink
            key="Testlist"
            label="Test List"
            path="/app/testlist"
            icon={<EditSharp />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        }
        {user.role ===  ("NCHealth" && "Operator") && 
          <SidebarLink
            key="VCList"
            label="VC List"
            path="/app/vclist"
            icon={<ListAlt />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        }
        {/* 
          <SidebarLink
          key="StreetCred"
          label="StreetCred"
          path="/app/streetcred"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
      />

        <SidebarLink
          key="StreetCredC"
          label="StreetCredC"
          path="/app/streetcred_C"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
      />

        <SidebarLink
          key="StreetCredS"
          label="StreetCredS"
          path="/app/streetcred_S"
          icon={(<EditSharp />)}
          location={location}
          isSidebarOpened={isSidebarOpened}
      /> */}
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
