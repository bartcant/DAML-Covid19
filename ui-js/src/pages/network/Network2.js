import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useLedger, useParty } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";




export default function Network() {

  const operator = useParty();
  const ledger = useLedger();
  const assets = useStreamQuery (Main.Network);
 

  const exerciseInviteHealthClinic = function(cid, healthclinic ) {
    console.log("operator :" + operator);
    console.log("healthclinic : " + healthclinic);
    console.log("cid: "+ cid);
    let roletype = "Healthclinic"
    ledger.exercise(Main.Network.InviteHealthClinic, cid, { operator, healthclinic , roletype } ); };
    
  const exerciseInviteCitizen = function(cid, citizen ) {
    console.log("operator :" + operator);
    console.log("citizen : " + citizen);
    console.log("cid: "+ cid);
    let roletype = "HealthClinic"
    ledger.exercise(Main.Network.InviteCitizen, cid, { operator, citizen , roletype } ); };

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
         ["InviteHealthClinic", (c, healthclinic ) => { exerciseInviteHealthClinic(c.contractId, healthclinic); }, "Healthclinic"],
         ["InviteCitizen", (c, citizen ) => { exerciseInviteCitizen(c.contractId, citizen); }, "Citizen"]
        ]}
      />
    </>
  );
}

