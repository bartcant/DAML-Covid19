  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Clinicinvite() {

  
  const citizen = useParty();
  const operator = "Operator"; 
  const ledger = useLedger();
  const assets = useStreamQuery (Main.CitizenInvitation);


  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [citizendetails, setConductForm] = React.useState({
    idtype: '',
    ssn: '',
    did: '',
    firstname: '',
    lastname: '',
    email:'',
    accept_vcoremail: '',
    Hippa_accept: '',
    insurance_id: ''
  });

  const [checked, setChecked] = React.useState(true);

  const handleConductModalOpen = (cid = '') => {
    setContractId(cid);
    setConductModalOpen(true);
  };

  const handleConductModalClose = () => {
    setConductModalOpen(false);
  };

  const handleConductChange = (idx, event) => {
    setConductForm({
      ...citizensdetails,
      [idx]: event.target.value
    })
  }

 


  const exerciseCitizenAccept = function(cid ) {
    console.log("operator :" + operator);
    console.log("citizen : " + citizen);
    console.log("cid: " + curContractId);
    

    ledger.exercise(Main.CitizenInvitation.AcceptCitizenInvitation, curContractId, { operator, citizen, citizendetails } ); };
    
  
return (
    <>
      <Contracts
        contracts={assets.contracts}
        actions={[
         ["Accept Invitation", (c) => { handleConductModalOpen(c.contractId);}], 

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
                label="ID Type"
                placeholder="ID Type"
                value={citizendetails.idtype}
                onChange={(e) => handleConductChange('idtype', e)}
              />
            </div>

            <div>
              <TextField
                label="SSN"
                placeholder="SSN"
                value={citizendetails.ssn}
                onChange={(e) => handleConductChange('ssn', e)}
              />
            </div>
      
            <div>
              <TextField
                label="DID"
                placeholder="DID"
                value={citizendetails.did}
                onChange={(e) => handleConductChange('did', e)}
              />
            </div>

            <div>
              <TextField
                label="lastname"
                placeholder="lastname"
                value={citizendetails.lastname}
                onChange={(e) => handleConductChange('lastname', e)}
              />
            </div>
            <div>
              <TextField
                label="firstname"
                placeholder="firstname"
                value={citizendetails.did}
                onChange={(e) => handleConductChange('firstname', e)}
              />
            </div>
            <div>
              <TextField
                label="email"
                placeholder="email"
                value={citizendetails.email}
                onChange={(e) => handleConductChange('email', e)}
              />
            </div>
             <div>
               <FormControl component="Accept Credentials">
                 <FormLabel component="legend">Accept Credentials</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={citizendetails.accept_vcoremail} onChange={(e) => handleConductChange('accept_vcoremail', e)}>
                      <FormControlLabel value="email" control={<Radio />} label="Email" />
                      <FormControlLabel value="VC" control={<Radio />} label="Verifiable Credential" />
                    </RadioGroup>
                </FormControl>
              <RadioButton
              />
            </div>

            <div>
            <FormControlLabel
              value="start"
                control={<Checkbox
                  checked={checked}
                  value={citizendetails.hippa_accept}
                  onChange={(e) => handleConductChange('hippa_accept', e)}
                  label="Accept HIPPA"
             />}
             />
           </div>

           <div>
              <TextField
                label="insuranceid"
                placeholder="Insurance id"
                value={citizendetails.insurance_id}
                onChange={(e) => handleConductChange('insurance_id', e)}
              />
            </div>



          </DialogContent>
          <DialogActions>
            <Button onClick={handleConductModalClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => exerciseCitizenAccept()} color="primary" autoFocus>
              Test
            </Button>
          </DialogActions>
          </Dialog>
          </>

          );
        }