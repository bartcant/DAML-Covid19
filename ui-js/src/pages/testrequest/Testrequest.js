  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function TestRequest() {

  const citizen = useParty();
  const operator = "Operator"; 
  const ledger = useLedger();
  const assets = useStreamQuery (Main.CitizenRole);

   const exerciseRequestTest = function(cid, healthclinic ) {
    console.log("operator :" + operator);
    console.log("healtclinic : " + healthclinic);
    console.log("citizen : " + citizen); 
    console.log("cid: "+ cid);
    ledger.exercise(Main.CitizenRole.RequestTest, cid, { operator, citizen, healthclinic} ); };
    
  


  return (
    <>
      <Contracts
        contracts={assets.contracts}
        


        columns={[
          ["ContractId", "contractId"],
          ["Citizen", "payload.citizen"]
         ]}
         
       actions={[
         ["Test Request", (c, healthclinic) => { exerciseRequestTest(c.contractId, healthclinic); }, "Healthclinic"], 
        ]}
        />
      </>
    );
  }