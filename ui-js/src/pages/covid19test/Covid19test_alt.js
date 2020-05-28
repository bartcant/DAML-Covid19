import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
// import states from "../finalform/states"

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
  // history
  const history = useHistory();


  const assets = useStreamQuery (Main.TestAppointment);

  //const [conductModalOpen, setConductModalOpen] = React.useState(false);
  //const [curContractId, setContractId] = React.useState('');
  //const [covid19testdata, setConductForm] = React.useState({
  //  testdate: '',
  //  citizen: citizen,
  //  healthclinic: healthclinic,
  //  testtype: '',
  //  testnumber: '',
  //  testresult: '',
  //  locationstate: '',
  //  testupdatedata: ''
 // });

 // const handleConductModalOpen = (cid = '') => {
 //   setContractId(cid);
 //    setConductModalOpen(true);
 // };

  const handleConductClicked = (cid = '') => {
    dispatch(conductclick({
      citizen: citizen,
      healthclinic: healthclinic,
      contractId: cid
    }));
    history.push("/app/finalform");
  }

 // const handleConductModalClose = () => {
 //   setConductModalOpen(false);
 // };

 // const handleConductChange = (idx, event) => {
 //   setConductForm({
 //     ...covid19testdata,
 //     [idx]: event.target.value
 //   })
//  }

 // const exercisestarttest = function() {
 //   setConductModalOpen(false);
 //   console.log("healthclinic : " + healthclinic);
 //   console.log("citizen : " + citizen);
 //   console.log("cid: " + curContractId);

//    console.log({citizen, healthclinic, covid19testdata});

//    ledger.exercise(Main.TestAppointment.Covid19TestAppointment, curContractId, {covid19testdata, healthclinic});

//  };

//  const getStates = () => {
//    return states.map((each) => {
//      return <MenuItem key={each.value} value={each.value}>{each.label}</MenuItem>
//    });
//  }


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
