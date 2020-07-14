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
import { useStreamQuery, useLedger, useParty } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

import vcschemas from "../testlist/vcschemas"

axios.defaults.baseURL = 'http://localhost:3002/';


export default function TestList() {


  const assets = useStreamQuery(Main.Covid19Test);
  const operator = useParty();
  const ledger = useLedger();

  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [curCitizen, setCitizen] = React.useState('');
  const [curStateHealth, setStateHealth] = React.useState('');
  const [immunityvc, setConductForm] = React.useState({
    vcdate: '',
    vc_schema: '',
    authorizedby: '',
    vc_message: ''

  });

  const handleConductModalOpen = (cid = '', citizen = '', statehealth = '') => {
    setContractId(cid);
    setCitizen(citizen);
    setStateHealth(statehealth);
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




  const exerciseStateHealthVC = function () {
    setConductModalOpen(false);

    console.log("citizen : " + curCitizen);
    let citizen = curCitizen;
    console.log("statehealth : " + curStateHealth);
    let statehealth = curStateHealth;
    console.log("cid: " + curContractId);
    ledger.exercise(Main.Covid19Test.SupplyVC, curContractId, { statehealth, immunityvc, operator, citizen });
    const trinsiccall = trinsic();
    console.log ("COnnectionID " + trinsiccall); 
  }

    // Retrieve Connectionid for the User from CitizenRole

    async function trinsic() {
    console.log("start TRinsic VC")
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJDb3ZpZDE5IiwiYXBwbGljYXRpb25JZCI6ImZvb2JhciIsImFjdEFzIjpbIk9wZXJhdG9yIl0sInJlYWRBcyI6WyJPcGVyYXRvciJdfX0.JklciDh0-GzkvrPkSJ_H3sYX39LFU4C3uVWd7qsMPNo"

    const headers = {
      "Authorization": `Bearer ${token.toString()}`,
      'Content-Type': 'application/json'
    }

    const siteSubDomain = (path = '/data/') => {
      if (window.location.hostname === 'localhost') {
        return window.location.hostname + (window.location.port ? ':' + window.location.port : '');
      }

      let host = window.location.host.split('.')
      const ledgerId = host[0];
      let apiUrl = host.slice(1)
      apiUrl.unshift('api')

      return apiUrl.join('.') + (window.location.port ? ':' + window.location.port : '') + path + ledgerId;
    }

    const post = (url, options = {}) => {
      Object.assign(options, { method: 'POST', headers });

      return fetch('//' + siteSubDomain() + url, options);
    }



    let connectionId = '';
    const fetchUpdate = async () => {
  
        console.log("Inside fetchUpdate"); 
        const contractResponse = await post('/v1/query', {
          body: JSON.stringify({
            "templateIds": ["Main:CitizenRole"],
            "query": { "citizen": curCitizen }
          })
        });

        const connectionResponse = await contractResponse.json();
        if (connectionResponse.status === 200) {
          connectionId = connectionResponse.result[0].payload.verifiablecredentials.connectionId
          console.log(connectionId);
        }

      await fetchUpdate();
      return connectionId

    }

  }
  
    // Send  VC information and ConnectionId to Trinsic Server.js
    let connectionId = ''; 
    axios.post('/api/immunityvc', immunityvc, connectionId).then((response) => {
      console.log(response);
    });
  

  const getVCSchemas = () => {
    return vcschemas.map((each) => {
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
          ["SupplyVC", (c) => { handleConductModalOpen(c.contractId, c.payload.citizen, c.payload.statehealth); }]
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
            <TextField
              label="Authorized By"
              placeholder="Authorized by"
              value={immunityvc.authorizedby}
              onChange={(e) => handleConductChange('authorizedby', e)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConductModalClose} color="primary">
            Cancel
      </Button>
          <Button onClick={() => exerciseStateHealthVC()} color="primary" autoFocus>
            Test
      </Button>
        </DialogActions>
      </Dialog>
    </>

  );

}