import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Contracts from "../../components/Contracts/Contracts";
import { cognitoSignUp } from "../../context/CognitoContext";
import { useStreamQuery, useLedger, useParty } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";


import roles from "./roles"





export default function Network() {

  const operator = useParty();
  const ledger = useLedger();
  const assets = useStreamQuery(Main.Network);



  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [partyidentity, setConductForm] = React.useState({
    name: '',
    role: ''
  });
  const [formMsg, setValidate] = React.useState({
    status: 0,
    message: ''
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
      ...partyidentity,
      [idx]: event.target.value
    })
  };

  const getRoles = () => {
    return roles.map((each) => {
      return <MenuItem key={each.value} value={each.value}>{each.label}</MenuItem>
    });
  }


  const removeSuccessMsg = () => {
    console.log('333333333');
    setValidate({
      status: 0,
      message: ''
    });
    // clearTimeout(timer);
  }

  const exerciseInviteParty = function () {
    console.log("operator :" + operator);
    console.log("cid: " + curContractId);
    let roletype = partyidentity.role;
    let party = partyidentity.name;
    console.log("party: " + party + " role " + roletype);

    
    // coginto register
    cognitoSignUp(party, function(user) {

      if (user) {
        // success
        console.log("[exerciseInviteParty] cognito regiter success", user);

        ledger.exercise(Main.Network.InviteParty, curContractId, { operator, party, roletype })
              .then(() => {
                // const timer = setTimeout(() => removeSuccessMsg(), 3000);
                setValidate({
                  status: 0,
                  message: 'Party is successfully stored!'
                });
              })
              .catch((error) => {
                console.log("error: " + error);
                setValidate({
                  status: 1,
                  message: 'Error: Invalid Party'
                });
              });

      }
      else {
        // fail
        console.log("[exerciseInviteParty] cognito regiter failed");
      }

    });
    
    console.log("Party Registered: " + party + "with the following  roletype :" + roletype);
  };


  return (
    <div>
      <Contracts
        contracts={assets.contracts}

        columns={[
          ["ContractId", "contractId"],
          ["Operator", "payload.operator"]
        ]}

        actions={[
          ["Setup Parties", (c) => { handleConductModalOpen(c.contractId); }
          ]]}
      />


      <div>

        <Dialog fullWidth
          open={conductModalOpen}
          onClose={handleConductModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Setup Parties"}</DialogTitle>
          <DialogContent>
            {formMsg.status === 0 && formMsg.message !== '' &&
              <h2 style={{ color: '#2196f3', marginTop: 0 }}>{formMsg.message}</h2>
            }
            <div>

              <TextField
                label="Party"
                placeholder="Party"
                value={partyidentity.name}
                onChange={(e) => handleConductChange('name', e)}
                error={formMsg.status === 1 && formMsg.message !== ''}
              />
              {(formMsg.status === 1 && formMsg.message !== '') &&
                <p style={{ color: '#f44336', marginTop: '5px' }}>{formMsg.message}</p>
              }
            </div>

            <FormControl style={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-helper-label">Party Role</InputLabel>
              <Select
                autoWidth={true}
                defaultValue=""
                label="Role Type"
                placeholder="Role Type"
                value={partyidentity.role}
                onChange={(e) => handleConductChange('role', e)}>
                {getRoles()}
              </Select>
            </FormControl>
          </DialogContent>

          <DialogActions>

            <Button onClick={() => exerciseInviteParty()} color="primary" autoFocus>
              Setup Party
                   </Button>
          </DialogActions>
        </Dialog>

      </div>
    </div>
  );
};
