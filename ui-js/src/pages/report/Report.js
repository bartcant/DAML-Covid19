import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";




export default function Report() {

  const ledger = useLedger();
  const assets = useStreamQuery (Main.Network);
  const exerciseInviteHealthClinic = function(cid, healthclinic ) {
    ledger.exercise(Main.Network.InviteHealthClinic, cid, { healthclinic })}; 
  const exerciseInviteCitizen = function(cid , citizen ) {
     ledger.exercise(Main.Network.InviteHealthCitizen, cid, { citizen })};

  return (
    <>
      <Contracts
        contracts={assets.contracts}
        columns={[
          ["TemplateId", "templateId"],
          ["Operator", "payload.operator"]
        ]}
         
       actions={[
         ["InviteHealthClinic", (c, healthclinic) => { exerciseInviteHealthClinic(c.contractId, healthclinic); }, "Healthclinic"],
         ["InviteCitizen", (c, citizen) => { exerciseInviteCitizen(c.contractId, citizen); }, "Citizen"]
        ]}
      />
    </>
  );
}

