  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main, Registration } from "@daml2js/Covid19-0.0.1/";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3002/';

export default function CreateAlias({dispatch}) {

  
  const citizen = useParty();
  const operator = "Operator"; 
  const ledger = useLedger();
  


  const [conductModalOpen, setConductModalOpen] = React.useState(true);
  const [alias, setConductAlias] = React.useState({
    alias: ''
  });



  const handleConductModalOpen = (cid = '') => {
    setContractId(cid);
    setConductModalOpen(true);
  };


  const handleConductModalClose = () => {
    setConductModalOpen(false);
  };


  const handleAliasChange = (idx, event) => {
    setConductForm({
      ...alias,[idx]: event.target.value

    })
  }
 
  // Create Alias
  const createAlias = function() {
    setConductModalOpen(false);
    ledger.create(Registration.AliasCitizen, citizen, alias.alias) ; 
    // const {contracts, loading} = useStreamFetchByKey(Registration.AliasCitizen, () => key, [dep1, dep2, ...])
    // I need to collect the contractId from previous action so it can be set as an AliasCid in the CitizenRegistration

  }



return (
     
      
        <div>
        <Dialog
          open={conductModalOpen}
          onClose={handleConductModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">{"Assign Alias"}</DialogTitle>
          <DialogContent>
        
           <div>
              <TextField
                label="alias"
                placeholder="alias"
                value={alias.alias}
                onChange={(e) => handleAliasChange('alias', e)}
              />
            </div>
         
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConductModalClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => createAlias()} color="primary" autoFocus>
              Set Alias
            </Button>
          </DialogActions>
          </Dialog>
        </div>
  
        )
     }