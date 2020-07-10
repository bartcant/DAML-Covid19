import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";


import states from "../finalform/states"

export default function TestAppointment() {

  const citizen = "Alice";
  const healthclinic = useParty();
  const statehealth = "NCHealth";
  const ledger = useLedger();


  const assets = useStreamQuery (Main.TestAppointment);

  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [covid19testdata, setConductForm] = React.useState({
    testdate: '',
    healthclinic: healthclinic,
    citizen: citizen,
    statehealth: statehealth,
    testtype: '',
    testnumber: '',
    testresult: '',
    locationstate: ''
    
  });

  const handleConductModalOpen = (cid = '') => {
    setContractId(cid);
    setConductModalOpen(true);
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

  const exercisestarttest = function() {
    setConductModalOpen(false);
    console.log("healthclinic : " + healthclinic);
    console.log("citizen : " + citizen);
    console.log("statehealth : " + statehealth);
    console.log("cid: " + curContractId);

    const operator = "Operator"; 
    console.log({citizen, healthclinic, covid19testdata});

    ledger.exercise(Main.TestAppointment.Covid19TestAppointment, curContractId, {covid19testdata, statehealth, citizen, healthclinic, operator});
    

  };

  const getStates = () => {
    return states.map((each) => {
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

       
          ["Conduct Test", (c) => { handleConductModalOpen(c.contractId); }

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


            <div>
              <TextField
                label="Test Type"
                placeholder="Test Type"
                value={covid19testdata.testtype}
                onChange={(e) => handleConductChange('testtype', e)}
              />
            </div>

            <div>
              <TextField
                label="Test Number"
                placeholder="Test Number"
                value={covid19testdata.testnumber}
                onChange={(e) => handleConductChange('testnumber', e)}
              />
            </div>

            <div>
              <TextField
                label="Test Result"
                placeholder="Test Result"
                value={covid19testdata.testresult}
                onChange={(e) => handleConductChange('testresult', e)}
              />
            </div>

            <div>
              <Select
                labelId="demo-simple-select-label"
                value={covid19testdata.locationstate}
                onChange={(e) => handleConductChange('locationstate', e)}
              >
                { getStates() }
              </Select>
            </div>

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
