import React from "react";
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useQuery, useLedger, useParty } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

import vcschemas from "../testlist/vcschemas"
import authorizedby from "../testlist/authorizedby"

axios.defaults.baseURL = 'http://ec2-18-191-142-47.us-east-2.compute.amazonaws.com/';


export default function TestList() {

  const [curcitizen, setCitizen] = React.useState('');
  const assets = useStreamQuery(Main.Covid19Test);
  const queryResult = useQuery(Main.CitizenRole, () => ({ citizen: curcitizen }), [curcitizen]);
  const operator = useParty();
  const ledger = useLedger();





  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [curTestDate, setTestDate] = React.useState('');
  const [curTestResult, setTestResult] = React.useState('');
  const [curStateHealth, setStateHealth] = React.useState('');
  const [immunityvc, setConductForm] = React.useState({
    vcdate: '',
    vc_schema: '',
    authorizedby: '',
    vc_message: ''

  });





  const handleConductModalOpen = (cid = '', citizen = '', statehealth = '', testdate = '', testresult = '') => {
    setContractId(cid);
    setCitizen(citizen);
    setStateHealth(statehealth);
    setTestDate(testdate);
    setTestResult(testresult);
    setConductModalOpen(true);
  };

  const handleConductModalClose = () => {
    setConductModalOpen(false);
  };

  const handleConductChange = (idx, event) => {
    setConductForm({
      ...immunityvc,
      [idx]: event.target.value
    })
  }




  const exerciseStateHealthVC = async function () {
    setConductModalOpen(false);

    console.log("citizen : " + curcitizen);
    let citizen = curcitizen;
    console.log("statehealth : " + curStateHealth);
    let statehealth = curStateHealth;
    console.log("cid: " + curContractId);
    let testdate = curTestDate
    let testresult = curTestResult
    ledger.exercise(Main.Covid19Test.SupplyVC, curContractId, { statehealth, immunityvc, operator, citizen });


    // Retrieve Connectionid for the User from CitizenRole - VerifiableCredentials

    console.log("connectionId" + JSON.stringify(queryResult.contracts[0].payload.verifiablecredentials.connectionid));
    const connectionId = queryResult.contracts[0].payload.verifiablecredentials.connectionid;
    if (connectionId === '' || connectionId === undefined) {
      alert('Empty ConnectionId');
      return;
    }
    // Send  VC information and ConnectionId to Trinsic Server.js


    console.log("start Axios here");
    axios.post('/api/immunityvc', { cid: connectionId, immunityvc, citizen: curcitizen, testdate: testdate, testresult: testresult }).then((response) => {

      console.log(response);
    });
  }

  const getVCSchemas = () => {
    return vcschemas.map((each) => {
      return <MenuItem key={each.value} value={each.value}>{each.label}</MenuItem>
    });
  }

  const getAuthorizedBy = () => {
    return authorizedby.map((each) => {
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
          ["HealthClinic", "payload.healthclinic"],
          ["Test Date", "payload.covid19testdata.testdate"],
          ["Test Result ", "payload.covid19testdata.testresult"]

        ]}
        actions={[
          ["SupplyVC", (c) => { handleConductModalOpen(c.contractId, c.payload.citizen, c.payload.statehealth, c.payload.covid19testdata.testdate, c.payload.covid19testdata.testresult); }]
        ]}

      />

      <Dialog
        open={conductModalOpen}
        onClose={handleConductModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Immunity VC Details"}</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              label="VC Date"
              placeholder="VC  Date"
              value={immunityvc.vcdate}
              onChange={(e) => handleConductChange('vcdate', e)}
            />
          </div>

          <div>
            <Select
              labelId="demo-simple-select-label"
              value={immunityvc.vc_schema}
              onChange={(e) => handleConductChange('vc_schema', e)}
            >
              {getVCSchemas()}
            </Select>
          </div>

          <div>
            <Select
              labelId="demo-simple-select-label"
              value={immunityvc.authorizedby}
              onChange={(e) => handleConductChange('authorizedby', e)}
            >
              {getAuthorizedBy()}
            </Select>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConductModalClose} color="primary">
            Cancel
      </Button>
          <Button onClick={() => exerciseStateHealthVC()} color="primary" autoFocus>
            Send Credentials
      </Button>
        </DialogActions>
      </Dialog>
    </>

  );

}
