import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function TestList() {


  const assets = useStreamQuery (Main.Covid19Test);

  
    
    
  return (
    <>
      <Contracts
        contracts={assets.contracts}
        /* columns={[
          ["ContractId", "contractId"],
          ["HealthClinic", "payload.healthclinic"]
          ["Citizen", "payload.covid19testdata.citizen"],
          ["Test Date", "payload.covid19testdata.testdate"],
          ["Test Type", "payload.covid19testdata.testtype"],
          ["Test Number", "payload.covid19testdata.testnumber"],
          ["Test Result", "payload.covid19testdata.testresult"],
          ["Test State", "payload.covid19testdata.locationstate"]
        ]}
         */
         
      
      />
    </>
  );
}
