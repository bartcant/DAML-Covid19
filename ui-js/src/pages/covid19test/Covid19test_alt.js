import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

// redirect
import { useHistory } from "react-router-dom";
// redux connect
import { connect } from 'react-redux'
// import actions
import { conductclick } from '../../actions.js';

function TestAppointment({dispatch}) {

  const citizen = "ledger-party-db2e9969-83d1-480a-b010-06f0c959f7fc";
  const healthclinic = useParty();
  const ledger = useLedger();
  const history = useHistory();


  const assets = useStreamQuery (Main.TestAppointment);



  const handleConductClicked = (cid = '') => {
    dispatch(conductclick({
      citizen: citizen,
      healthclinic: healthclinic,
      contractId: cid
    }));
    history.push("/app/finalform");
  }

  return (

    <>

      <Contracts
        contracts={assets.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Citizen", "payload.citizen"],
          ["Healthclinic", "payload.healthclinic"],
          ["Appointment Date", "payload.appointmentdate"]
        ]}

        actions={[

          ["Conduct Test", (c) => { handleConductClicked(c.contractId ); }
        

        ]
        ]}

        />



       

        

      </>

    );
  }


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(null, mapDispatchToProps)(TestAppointment);
