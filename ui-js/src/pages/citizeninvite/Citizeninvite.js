
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

// redirect
import { useHistory } from "react-router-dom";
// redux connect
import { connect } from 'react-redux'
// import actions
import { conductclick } from '../../actions.js';



function CitizenInvite({ dispatch }) {


  const citizen = useParty();
  const operator = "Operator";
  const ledger = useLedger();
  const assets = useStreamQuery(Main.CitizenInvitation);
  // const assets2 = useStreamQuery (Registration.CitizenAlias);
  const history = useHistory();


  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [citizendetails, setConductForm] = React.useState({
    idtype: '',
    ssn: '',
    did: '',
    firstname: '',
    lastname: '',
    email: '',
    accept_vcoremail: '',
    hippa_accept: true,
    insurance_id: ''
  });
  const [alias, setConductAlias] = React.useState({
    alias: ''
  });

  const [state, setState] = React.useState({
    checkedA: true
  });


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    handleConductChange('hippa_accept')
  };


  const handleOptionChange = function (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  const handleConductModalOpen = (cid = '') => {
    setContractId(cid);
    setConductModalOpen(true);
  };

  const handleConductModalClose = () => {
    setConductModalOpen(false);
  };


  const handleConductChange = (idx, event) => {
    setConductForm({
      ...citizendetails, [idx]: event.target.value
    })
  }

  const exerciseCitizenAccept = function () {
    setConductModalOpen(false);


    console.log("operator :" + operator);
    console.log("citizen : " + citizen);
    console.log("cid: " + curContractId);
    console.log("citizendetails: " + JSON.stringify(citizendetails));
    console.log("alias" + JSON.stringify(alias));
    let aliasCid = "test";

    ledger.exercise(Main.CitizenInvitation.AcceptCitizenInvitation, curContractId, { operator, citizen, citizendetails, aliasCid });

    dispatch(conductclick({
      citizen: citizen,
      // healthclinic: healthclinic,
      // contractId: cid
    }));
    history.push("/app/citizenalias");
  }



  return (
    <div>
      <Contracts
        contracts={assets.contracts}

        columns={[
          ["ContractId", "contractId"],
          ["HealthClinic", "payload.citizen"]
        ]}

        actions={[
          ["Accept Invitation", (c) => { handleConductModalOpen(c.contractId); }],

        ]}

      />

      <div>
        <Dialog
          open={conductModalOpen}
          onClose={handleConductModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Citizen Registration"}</DialogTitle>
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
              <FormControl component="acceptcredentials">
                <FormLabel component="legend"> Credential Type</FormLabel>
                <RadioGroup aria-label="Accept Type" name="accepttype" value={citizendetails.accept_vcoremail} onChange={(e) => handleConductChange('accept_vcoremail', e)}>
                  <FormControlLabel control={<Radio />} label="Email" value="email" />
                  <FormControlLabel control={<Radio />} label="Verifiable Credential" value="vc" />
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
      </div>


    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}



export default connect(null, mapDispatchToProps)(CitizenInvite);