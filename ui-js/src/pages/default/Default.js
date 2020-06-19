  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function Default() {


 const assets = {"contracts":[{"templateId":"cd5973f4f81e2fb7bd6993331d575062ba94641688c7f0644258e603e35bd1c7:Main:CitizenRole","contractId":"00e0d6ece9062af27be01367f27e76b10d895d925df5301f8426f7c46c12e4cd12","signatories":["Bob"],"observers":[],"agreementText":"","key":{"_1":"Bob","_2":{"idtype":"3","ssn":"e","did":"e","firstname":"e","lastname":"e","email":"e","accept_vcoremail":"email","hippa_accept":true,"insurance_id":"e"}},"payload":{"operator":"Operator","citizen":"Bob","citizendetails":{"idtype":"3","ssn":"e","did":"e","firstname":"e","lastname":"e","email":"e","accept_vcoremail":"email","hippa_accept":true,"insurance_id":"e"}}}],"loading":true}

 // const assets = useStreamQuery(Main.CitizenRole);
  const obj = JSON.stringify(assets);
  console.log ("obj" + obj);
  const obj2 = JSON.parse(obj); 
  console.log ("obj contracts templatedid" + obj2.contracts[0].templateId);

  


  return (
    <>
      <Contracts
        contracts={assets.contracts}
        
         
       
      />
    </>
  );
}
