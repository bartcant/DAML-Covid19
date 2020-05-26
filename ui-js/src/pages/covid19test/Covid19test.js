import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { spacing } from '@material-ui/system';

import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import states from "../finalform/states"

export default function TestAppointment() {

  const citizen = "ledger-party-45889ea2-16cc-4e56-9c7e-d31b13c06281";
  const healthclinic = useParty();
  const ledger = useLedger();


  const assets = useStreamQuery (Main.TestAppointment);

  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [covid19testdata, setConductForm] = React.useState({
    testdate: '',
    healtclinic: healthclinic,
    citizen: citizen,
    testtype: '',
    testnumber: '',
    testresult: '',
    locationstate: '',
    testupdatedata: ''
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
    console.log("healtclinic : " + healthclinic);
    console.log("citizen : " + citizen);
    console.log("cid: " + curContractId);

    console.log({citizen, healthclinic, covid19testdata});

    ledger.exercise(Main.TestAppointment.Covid19TestAppointment, curContractId, {covid19testdata, healthclinic});
    // ledger.exercise(Main.TestAppointment.Covid19Test, cid, {citizen, healthclinic, covid19testdata} );

    // this above function the needs input for "covid19testdata" from the Start.js page and needs it in the following format:

   // {"testdate":"testdate", issuedby:"issuedby","testtype":"testtype,"testnumber":"testnumber,"locationstate":"locationstate","testupdatedata:"testupdatedata"}


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

          // ["Conduct Test", (c) => { exercisestarttest(c.contractId ); }
          ["Conduct Test", (c) => { handleConductModalOpen(c.contractId); }

        ]
        ]}

        // This previous JSX component is based on Contracts.js
        // I like to customize "Contracts.js" to remove the "button" which is currently displayed as "Conduct Test"

        />



        <br/>
          // this is a hack to navigate to the next screen

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

            <div>
              <TextField
                label="Test Update Date"
                placeholder="Test Update Date"
                value={covid19testdata.testupdatedata}
                onChange={(e) => handleConductChange('testupdatedata', e)}
              />

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
