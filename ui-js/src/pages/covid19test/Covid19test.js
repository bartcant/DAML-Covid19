import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

import axios from 'axios';

import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger, useQuery } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";


import states from "../finalform/states";
import testtypes from "./testtypes";
import testresults from "./testresults";

axios.defaults.baseURL = 'http://localhost:3002/';

export default function TestAppointment() {


  const [curcitizen, setCitizen] = React.useState('');
  const healthclinic = useParty();
  const statehealth = "NCHealth";
  const ledger = useLedger();
  const assets = useStreamQuery(Main.TestAppointment);
  const queryResult = useQuery(Main.CitizenRole, () => ({ citizen: curcitizen }), [curcitizen]);

  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [covid19testdata, setConductForm] = React.useState({
    testdate: '',
    healthclinic: healthclinic,
    citizen: '',
    statehealth: statehealth,
    testtype: '',
    testnumber: '',
    testresult: '',
    locationstate: ''
  });


  const handleConductModalOpen = (cid = '', citizen = '') => {
    setContractId(cid);
    setCitizen(citizen);
    setConductModalOpen(true);
    setConductForm({
      ...covid19testdata,
      citizen: citizen
    })
  };

  const handleConductModalClose = () => {
    setConductModalOpen(false);
  };

  const handleConductChange = (idx, event) => {
    setConductForm({
      ...covid19testdata,
      [idx]: event.target.value
    })
  }

  const exercisestarttest = function () {



    setConductModalOpen(false);
    const citizen = covid19testdata.citizen;
    console.log("healthclinic : " + healthclinic);
    console.log("citizen : " + covid19testdata.citizen);
    console.log("statehealth : " + statehealth);
    console.log("cid: " + curContractId);
    const operator = "Operator"; 
    console.log({healthclinic, covid19testdata});


    console.log ("connectionId" + JSON.stringify(queryResult.contracts[0].payload.verifiablecredentials.connectionid)); 
    const connectionId = queryResult.contracts[0].payload.verifiablecredentials.connectionid;
    if (connectionId === '' || connectionId === undefined) {
      alert('Empty ConnectionId');
      return;
    }



    console.log("start Axios here")
    axios.post('/api/issue', {cid: connectionId, covid19testdata}).then((response) => {

      console.log(response);
    });
  };

  const getStates = () => {
    return states.map((each) => {
      return <MenuItem key={each.value} value={each.value}>{each.label}</MenuItem>
    });
  }

  const getTestResults = () => {
    return testresults.map((each) => {
      return <MenuItem key={each.value} value={each.value}>{each.label}</MenuItem>
    });
  }

  const getTestTypes = () => {
    return testtypes.map((each) => {
      return <MenuItem key={each.value} value={each.value}>{each.label}</MenuItem>
    });
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
          ["Conduct Test", (c) => { handleConductModalOpen(c.contractId, c.payload.citizen); }


          ]
        ]}



      />


      <Dialog
        open={conductModalOpen}
        onClose={handleConductModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"CONDUCT TEST"}</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              label="TestDate"
              placeholder="TestDate"
              value={covid19testdata.testdate}
              onChange={(e) => handleConductChange('testdate', e)}
            />
          </div>


          <FormControl style={{width: '100%'}}>
            <InputLabel id="demo-simple-select-helper-label">Test Type</InputLabel>
            <Select
              label="Test Type"
              placeholder="Test Type"
              autoWidth ="true"
              value={covid19testdata.testtype}
              onChange={(e) => handleConductChange('testtype', e)}
            >
              {getTestTypes()}
            </Select>
          </FormControl>

          <div>
            <TextField
              label="Test Number"
              placeholder="Test Number"
              value={covid19testdata.testnumber}
              onChange={(e) => handleConductChange('testnumber', e)}
            />
          </div>

          <FormControl style={{width: '100%'}}>
            <InputLabel id="demo-simple-select-helper-label">Test Result</InputLabel>
            <Select
              autoWidth= "true"
              defaultValue = ""
              placeholder="Test Result"
              value={covid19testdata.testresult}
              onChange={(e) => handleConductChange('testresult', e)}
            >
              {getTestResults()}
            </Select>
          </FormControl>

          <FormControl style={{width: '100%'}}>
            <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
            <Select
              label="State"
              autoWidth="true"
              value={covid19testdata.locationstate}
              onChange={(e) => handleConductChange('locationstate', e)}
            >
              {getStates()}
            </Select>
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleConductModalClose} color="primary">
            Cancel
            </Button>
          <Button onClick={() => exercisestarttest()} color="primary" autoFocus>
            Test
            </Button>
        </DialogActions>
      </Dialog>

    </>

  );
}
