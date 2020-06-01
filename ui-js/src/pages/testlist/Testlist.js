import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

import vcschemas from "../testlist/vcschemas"


export default function TestList() {


  const assets = useStreamQuery (Main.Covid19Test);
  const statehealth = "NCHealth";
  const citizen = "Alice"
  const ledger = useLedger();

  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [immunityvc, setConductForm] = React.useState({
    date: '',
    did: '',
    statehealth: statehealth,
    citizen: citizen,
    vc_schema: '',
    vc_message: ''

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
      ...immunityvc,
      [idx]: event.target.value
    })
  }

 


  const exerciseStateHealthVC = function() {
    setConductModalOpen(false);

    console.log("citizen : " + citizen);
    console.log("statehealth : " + statehealth);
    console.log("cid: " + curContractId);
    ledger.exercise(Main.Covid19Test.SupplyVC,  curContractId, { statehealth, immunityvc } ); };

    
    const getVCSchemas = () => {
      return vcschemas.map((each) => {
        return <MenuItem key={each.value} value={each.value}>{each.label}</MenuItem>
      });
    }  
    
  return (
    <>
      <Contracts
        contracts={assets.contracts}
        actions={[
          ["SupplyVC",(c) => { handleConductModalOpen (c.contractId);}]
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
          label="Verified Credential Date"
          placeholder="VC Date"
          value={immunityvc.vc_date}
          onChange={(e) => handleConductChange('date', e)}
        />
      </div>


      <div>
        <TextField
          label="DID"
          placeholder="DID"
          value={immunityvc.did}
          onChange={(e) => handleConductChange('did', e)}
        />
      </div>
      <div>
        <Select
          labelId="demo-simple-select-label"
          value={immunityvc.vc_schema}
          onChange={(e) => handleConductChange('vc_schema', e)}
        >
          { getVCSchemas() }
        </Select>
      </div>

      <div>
        <TextField
          label="VC Message"
          placeholder="VC Message"
          value={immunityvc.vc_message}
          onChange={(e) => handleConductChange('vc_message', e)}
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