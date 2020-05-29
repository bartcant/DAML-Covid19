  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function Clinicinvite() {

  const citizen = useParty();
  const operator = "Operator"; 
  const healthstate = "NCHealth";
  const ledger = useLedger();
  const assets = useStreamQuery (Main.CitizenInvitation);

  const exerciseCitizenAccept = function(cid ) {
    console.log("operator :" + operator);
    console.log("citizen : " + citizen);
    console.log("cid: "+ cid);
    ledger.exercise(Main.CitizenInvitation.AcceptCitizenInvitation, cid, { operator, citizen } ); };
    
    const exerciseCitizenVC = function(cid ) {
      console.log("operator :" + operator);
      console.log("citizen : " + citizen);
      console.log("cid: "+ cid);
      ledger.exercise(Main.CitizenInvitation.AcceptCitizenVC, cid, { operator, healthstate, citizen } ); };
  return (
    <>
      <Contracts
        contracts={assets.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Operator", "payload.operator"],
          ["Citizen", "payload.citizen"]
        ]}
         
       actions={[
         ["Accept Invitation", (c) => { exerciseCitizenAccept(c.contractId); }],  
         ["Accept VC",(c) => { exerciseCitizenVC(c.contrcatId);}]
       ]}
      />
    </>
  );
}
