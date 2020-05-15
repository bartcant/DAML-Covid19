  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function Clinicinvite() {

  const healthclinic = useParty();
  const operator = "Operator"; 
  const ledger = useLedger();
  const assets = useStreamQuery (Main.HealthClinicInvitation);

  const exerciseHealthClinicAccept = function(cid ) {
    console.log("operator :" + operator);
    console.log("healtclinic : " + healthclinic);
    console.log("cid: "+ cid);
    ledger.exercise(Main.HealthClinicInvitation.AcceptInvitation, cid, { operator, healthclinic } ); };
    
    
  return (
    <>
      <Contracts
        contracts={assets.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Operator", "payload.operator"],
          ["HealtClinic", "payload.healthclinic"]
        ]}
         
       actions={[
         ["Accept Invitation", (c) => { exerciseHealthClinicAccept(c.contractId); }]  
       ]}
      />
    </>
  );
}
