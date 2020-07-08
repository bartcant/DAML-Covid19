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
import ClinicUpdate from "../../pages/updatehcdetails/Updatehcdetails";
import CitizenInvite from "../../pages/citizeninvite/Citizeninvite";
import CitizenUpdate from "../../pages/updatecitizendetails/Updatecitizendetails";
import CitizenAlias from "../../pages/citizeninvite/Citizenalias";
import CitizenConnection from "../../pages/citizeninvite/Citizenconnection";
import TestRequest from "../../pages/testrequest/Testrequest";
import TestAppointment from "../../pages/testappointment/Testappointment";
import Covid19Test from "../../pages/covid19test/Covid19test";
// import StartForm from "../../pages/finalform/Start";
import StreetCred from "../../pages/streetcred/Streetcred";
import StreetCredS from "../../pages/streetcred/Streetcred_submission";
import StreetCredC from "../../pages/streetcred/Streetcred_connection";
import Covid19TestAlt from "../../pages/covid19test/Covid19test_alt";
import StartFormAlt from "../../pages/finalform/Start_alt";
import TestList from "../../pages/testlist/Testlist";
import VCList from "../../pages/vclist/Vclist";
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
              
                <Route path="/app/clinicupdate" component={ClinicUpdate} />
               
                <Route path="/app/citizenupdate" component={CitizenUpdate} />
                <Route path="/app/citizenalias" component={CitizenAlias} />
                <Route path="/app/citizenconnection" component={CitizenConnection} />
               
                
                <Route path="/app/streetcred" component={StreetCred} />
                <Route path="/app/streetcred_C" component={StreetCredC} />
                <Route path="/app/streetcred_S" component={StreetCredS} />
                <Route path="/app/covid19testalt" component={Covid19TestAlt} />
                <Route path="/app/testlist" component={TestList} />
                <Route path="/app/finalform" component={StartFormAlt} />
                <Route path="/app/vclist" component={VCList} />

                { user.role === 'AtriumHealth' &&
                <Route path="/app/clinicinvite" component={ClinicInvite} />	                     
                 }              
                { user.role === 'Citizen' &&                 
                <Route path="/app/citizeninvite" component={CitizenInvite} />
                }
                { user.role === 'Citizen' &&
                  <Route path="/app/testrequest" component={TestRequest} />
                }
                { user.role === 'AtriumHealth' &&
                  <Route path="/app/testappointment" component={TestAppointment} />
                }
                { user.role === 'AtriumHealth' &&
                  <Route path="/app/covid19test" component={Covid19Test} />
                }

              </Switch>
            </div>
          </>
      </div>
    </DamlLedger>
  );
}

export default withRouter(Layout);
