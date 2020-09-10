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
        {/*  <SidebarLink
          key="default"
          label="Experiments"
          path="/app/default"
          icon={<Home />}
          location={location}
          isSidebarOpened={isSidebarOpened}
        /> */}
        {user.role === "Operator" && (
          <SidebarLink
            key="Network"
            label="Network"
            path="/app/network"
            icon={<Extension />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role === "HealthClinic" && (
          <SidebarLink
            key="Clinicinvite"
            label="Clinic Invite"
            path="/app/clinicinvite"
            icon={<LocalHospital />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role === "HealthClinic" && (
          <SidebarLink
            key="Clinicupdate"
            label="Clinic Update"
            path="/app/clinicupdate"
            icon={<NoteAdd />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role === "Citizen" && (
          <SidebarLink
            key="Citizeninvite"
            label="Citizen Invite"
            path="/app/citizeninvite"
            icon={<Person />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role === "Citizen" && (
          <SidebarLink
            key="Citizenupdate"
            label="Citizen Update"
            path="/app/citizenupdate"
            icon={<NoteAdd />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role === "Citizen" && (
          <SidebarLink
            key="TestRequest"
            label="Test Request"
            path="/app/testrequest"
            icon={<Healing />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role === "HealthClinic" && (
          <SidebarLink
            key="TestAppointment"
            label="Test Appointment"
            path="/app/testappointment"
            icon={<Healing />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role === "HealthClinic" && (
          <SidebarLink
            key="CovidTest"
            label="Covid Test"
            path="/app/covid19test"
            icon={<Healing />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role === "HealthClinic" && (
          <SidebarLink
            key="CovidVaccine"
            label="Covid Vaccine"
            path="/app/covid19vaccine"
            icon={<Healing />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role == "StateHealthAgency" && (
          <SidebarLink
            key="Testlist"
            label="Test List"
            path="/app/testlist"
            icon={<EditSharp />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}
        {user.role === "StateHealthAgency" && (
          <SidebarLink
            key="VCList"
            label="VC List"
            path="/app/vclist"
            icon={<ListAlt />}
            location={location}
            isSidebarOpened={isSidebarOpened}
          />
        )}

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
