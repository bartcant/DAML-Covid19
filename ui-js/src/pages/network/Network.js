import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useLedger, useParty } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";




export default function Network() {

  const operator = useParty();
  const ledger = useLedger();
  const assets = useStreamQuery (Main.Network);

 

  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [partyname, setConductForm] = React.useState({
    namecitizen: '',
    namehealthclinic: ''
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
      ...partyname,
      [idx]: event.target.value
    })
  }
  



  const exerciseInviteHealthClinic = function() {
    console.log("operator :" + operator);
    console.log("cid: "+ curContractId);
    let roletype = "HealthClinic"
    let healthclinic = partyname.namehealthclinic
    console.log("healthclinic : " + healthclinic);
    ledger.exercise(Main.Network.InviteHealthClinic, curContractId, { operator, healthclinic , roletype } );
    console.log("HealthClinic Registerd: " + healthclinic) };
    
  const exerciseInviteCitizen = function() {

    console.log("operator :" + operator);
    console.log("cid: "+ curContractId);
    let roletype = "Citizen"
    let citizen = partyname.namecitizen
    console.log("citizen : " + citizen);
    ledger.exercise(Main.Network.InviteCitizen, curContractId, { operator, citizen , roletype } );
    console.log("Citizen Registerd: " + citizen) };

  const exerciseInviteStateHealth = function(cid, statehealth) {
    console.log("operator :" + operator);
    console.log("citizen : " + statehealth);
    console.log("cid: "+ cid);
    let roletype = "StateHealth"
    ledger.exercise(Main.Network.InviteStateHealth, cid, { operator, statehealth, roletype  } ); };
  
  const exerciseInviteInsuranceCompany = function(cid, insurancecompany ) {
    console.log("operator :" + operator);
    console.log("citizen : " + insurancecompany);
    console.log("cid: "+ cid);
    let roletype = "InsuranceCompany"
    ledger.exercise(Main.Network.InviteInsuranceCompany, cid, { operator, insurancecompany, roletype  } ); };
    


  return (
    <>
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
      


      
 

      <Dialog
      open={conductModalOpen}
      onClose={handleConductModalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">{"Setup Parties"}</DialogTitle>
      <DialogContent>
        <div>
          <TextField
            label="Citizen"
            placeholder="Citizen"
            value={partyname.namecitizen}
            onChange={(e) => handleConductChange('namecitizen', e)}
          />
          <Button onClick={() => exerciseInviteCitizen()} color="primary" autoFocus>
          Setup Citizen
        </Button>
        </div>
        <div>
          <TextField
            label="HealthClinic"
            placeholder="HealthClinic"
            value={partyname.namehealthclinic}
            onChange={(e) => handleConductChange('namehealthclinic', e)}
          />
          <Button onClick={() => exerciseInviteHealthClinic()} color="primary" autoFocus>
          Setup HealthClinic
        </Button>
        </div>

      </DialogContent>
      </Dialog> 

   </>
  );
} 

