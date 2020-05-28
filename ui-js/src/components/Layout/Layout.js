import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";
import useStyles from "./styles";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useLayoutState } from "../../context/LayoutContext";
import Network from "../../pages/network/Network";
import DamlLedger from "@daml/react";
import { useUserState } from "../../context/UserContext";
import Default from "../../pages/default/Default";
import ClinicInvite from "../../pages/clinicinvite/Clinicinvite";
import CitizenInvite from "../../pages/citizeninvite/Citizeninvite";
import TestRequest from "../../pages/testrequest/Testrequest";
import TestAppointment from "../../pages/testappointment/Testappointment";
import Covid19Test from "../../pages/covid19test/Covid19test";
import StartForm from "../../pages/finalform/Start";
import StreetCred from "../../pages/streetcred/Streetcred";
import Covid19TestAlt from "../../pages/covid19test/Covid19test_alt";
import StartFormAlt from "../../pages/finalform/Start_alt";
import { wsBaseUrl, httpBaseUrl } from "../../config";


function Layout() {
  const classes = useStyles();
  const user = useUserState();
  const layoutState = useLayoutState();

  return (
    <DamlLedger party={user.party} token={user.token} httpBaseUrl={httpBaseUrl} wsBaseUrl={wsBaseUrl}>
      <div className={classes.root}>
          <>
            <Header />
            <Sidebar />
            <div
              className={classnames(classes.content, {
                [classes.contentShift]: layoutState.isSidebarOpened,
              })}
            >
              <div className={classes.fakeToolbar} />
              <Switch>
                <Route path="/app/default" component={Default} />
                <Route path="/app/network" component={Network} />
                <Route path="/app/clinicinvite" component={ClinicInvite} />
                <Route path="/app/citizeninvite" component={CitizenInvite} />
                <Route path="/app/testrequest" component={TestRequest} />
                <Route path="/app/testappointment" component={TestAppointment} />
                <Route path="/app/covid19test" component={Covid19Test} />  
                <Route path="/app/streetcred" component={StreetCred} />
                <Route path="/app/covid19testalt" component={Covid19TestAlt} />
                <Route path="/app/finalform" component={StartFormAlt} />

              </Switch>
            </div>
          </>
      </div>
    </DamlLedger>
  );
}

export default withRouter(Layout);
