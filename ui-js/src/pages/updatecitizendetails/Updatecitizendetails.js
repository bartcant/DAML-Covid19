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
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function CitizenUpdate() {

  // This function displays the details of the Citizen in a list and an "Update" button that brings up the Form with the detais of "Citizendetails"
  // Upon submission the updated details are submitted to the ledger again via the ledger.exercise function

  
  const citizen = useParty();
  const operator = "Operator"; 
  const ledger = useLedger();

  const assets = useStreamQuery(Main.CitizenRole, () => ({ citizen: citizen }),);



  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');

  const [citizendetails, setConductForm] = React.useState({
    idtype: '',
    id: '',
    firstname: '',
    lastname: '',
    email:'',
    accept_vcoremail: '',
    hippa_accept: '',
    insurance_id: ''
  });

  

  const [state,setState] = React.useState({
    checkedA: true
  });
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked  });
    handleConductChange('hippa_accept')
  };


  /* const handleOptionChange = function (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }; */

  const handleConductModalOpen = (cid = '', c) => {
    setContractId(cid);
    setConductModalOpen(true);
    console.log(c.payload.citizendetails);
    setConductForm(c.payload.citizendetails);
  };

  const handleConductModalClose = () => {
    setConductModalOpen(false);
  };

  const handleConductChange = (idx, event) => {
    setConductForm({
      ...citizendetails,
      [idx]: event.target.value
    })
  }

 


  const exerciseCitizenAccept = function() {
    setConductModalOpen(false);

    console.log("operator :" + operator);
    console.log("citizen : " + citizen);
    console.log("cid: " + curContractId);
    console.log("citizendetails: " + JSON.stringify(citizendetails));

    const newcitizendetails = citizendetails;

    ledger.exercise(Main.CitizenRole.UpdateCitizenRegistration, curContractId, {citizen, newcitizendetails });
  }
  
return (
    <>
      <Contracts
        contracts={assets.contracts}
        
        columns={[
            ["ContractId", "contractId"],
            ["Citizen", "payload.citizen"],
            ["ID Type", "payload.citizendetails.idtype"],
            ["ID", "payload.citizendetails.id"]
          ]}

        actions={[
            ["Update Details", (c) => { handleConductModalOpen(c.contractId, c);}]
        ]}
      
        />
      
       <Dialog
          open={conductModalOpen}
          onClose={handleConductModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">{"Update Citizen Registration"}</DialogTitle>
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
                label="ID"
                placeholder="id"
                value={citizendetails.id}
                onChange={(e) => handleConductChange('id', e)}
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
                value={citizendetails.firstname}
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
               <FormControl>
                 <FormLabel component="legend"> Credential Type</FormLabel>
                    <RadioGroup aria-label="Accept Type" name="accepttype" value={citizendetails.accept_vcoremail} onChange={(e) => handleConductChange('accept_vcoremail', e)}>
                     <FormControlLabel  control={<Radio />} label="Email" value="email"  />
                     <FormControlLabel control={<Radio />} label="Verifiable Credential" value="vc"  />
                    </RadioGroup>
                </FormControl>
      
            </div>

            <div>
            <FormControlLabel
               control={
                  <Checkbox
                  checked={state.checkedA} onChange={handleChange} name="accepthippa"
                  value={citizendetails.hippa_accept}
                  />
                  }
                  label="AcceptHippa"
      
              
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
              Register
            </Button>
          </DialogActions>
          </Dialog>
          </>

          );
        }
    