import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useLedger, useParty } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";




export default function Report() {

  const operator = useParty();
  const ledger = useLedger();
  const assets = useStreamQuery (Main.Network);
 

  const exerciseInviteHealthClinic = function(cid, healthclinic ) {
    console.log("operator :" + operator);
    console.log("healtclinic : " + healthclinic);
    console.log("cid: "+ cid);
    ledger.exercise(Main.Network.InviteHealthClinic, cid, { operator, healthclinic } ); };
    
    
    const exerciseInviteCitizen = function(cid, citizen ) {
    ledger.exercise(Main.Network.InviteCitizen, cid, { operator, citizen } ); };
 
  return (
    <>
      <Contracts
        contracts={assets.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["TemplateId", "templateId"],
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

