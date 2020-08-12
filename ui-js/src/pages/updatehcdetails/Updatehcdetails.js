  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function ClinicUpdate() {

  const healthclinic = useParty();
  const operator = "Operator"; 
  const ledger = useLedger();
  const assets = useStreamQuery (Main.HealthClinicInvitation);

  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [healthclinicdetails, setConductForm] = React.useState({
    id: '',
    did: '',
    hcname: '',
    hcaddress: '',
    hctel:'',
    hccontactname: '',
    hccontactemail: '',
    hccontacttel: ''
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
      ...healthclinicdetails,
      [idx]: event.target.value
    })
  }



  const exerciseHealthClinicAccept = function() {

    setConductModalOpen(false);
    
    console.log("operator :" + operator);
    console.log("healthclinic : " + healthclinic);
    console.log("cid: "+ curContractId);
    console.log("healthclinicdetails: "+ healthclinicdetails );
    
    ledger.exercise(Main.HealthClinicInvitation.AcceptInvitation, curContractId, { operator, healthclinic, healthclinicdetails } ); };
    
  return (
    <>
      <Contracts
        contracts={assets.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Operator", "payload.operator"],
          ["HealthClinic", "payload.healthclinic"]
        ]}
         
       actions={[
         ["Accept Invitation", (c) => { handleConductModalOpen(c.contractId); }]  
       ]}
      />

<Dialog
          open={conductModalOpen}
          onClose={handleConductModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">{"Health Clinic Registration"}</DialogTitle>
          <DialogContent>
            <div>
              <TextField
                label="ID"
                placeholder="ID"
                value={healthclinicdetails.id}
                onChange={(e) => handleConductChange('id', e)}
              />
            </div>
      
            <div>
              <TextField
                label="DID"
                placeholder="DID"
                value={healthclinicdetails.did}
                onChange={(e) => handleConductChange('did', e)}
              />
            </div>

            <div>
              <TextField
                label="Health Clinic Name"
                placeholder="hcname"
                value={healthclinicdetails.hcname}
                onChange={(e) => handleConductChange('hcname', e)}
              />
            </div>
            <div>
              <TextField
                label="Health Clinic Address "
                placeholder="hcaddress"
                value={healthclinicdetails.hcaddress}
                onChange={(e) => handleConductChange('hcaddress', e)}
              />
            </div>
            <div>
              <TextField
                label="Health Clinic Telephone"
                placeholder="hctel"
                value={healthclinicdetails.hctel}
                onChange={(e) => handleConductChange('hctel', e)}
              />
            </div>
           <div>
              <TextField
                label="Contact Name"
                placeholder="hccontactname"
                value={healthclinicdetails.hccontactname}
                onChange={(e) => handleConductChange('hccontactname', e)}
              />
            </div>
            <div>
              <TextField
                label="Contact Email"
                placeholder="hccontactemail"
                value={healthclinicdetails.hccontactemail}
                onChange={(e) => handleConductChange('hccontactemail', e)}
              />
            </div>
            <div>
              <TextField
                label="Contact Telephone"
                placeholder="hccontacttel"
                value={healthclinicdetails.hccontacttel}
                onChange={(e) => handleConductChange('hccontacttel', e)}
              />
            </div>



          </DialogContent>
          <DialogActions>
            <Button onClick={handleConductModalClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => exerciseHealthClinicAccept()} color="primary" autoFocus>
              Register
            </Button>
          </DialogActions>
          </Dialog>
          </>

          );
        }