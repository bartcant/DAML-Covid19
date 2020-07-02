  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useQuery } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function Default() {

 
//const assets = {"contracts":[{"templateId":"cd5973f4f81e2fb7bd6993331d575062ba94641688c7f0644258e603e35bd1c7:Main:CitizenRole","contractId":"00e0d6ece9062af27be01367f27e76b10d895d925df5301f8426f7c46c12e4cd12","signatories":["Bob"],"observers":[],"agreementText":"","key":{"_1":"Bob","_2":{"idtype":"3","ssn":"e","did":"e","firstname":"e","lastname":"e","email":"e","accept_vcoremail":"email","hippa_accept":true,"insurance_id":"e"}},"payload":{"operator":"Operator","citizen":"Bob","citizendetails":{"idtype":"3","ssn":"e","did":"e","firstname":"e","lastname":"e","email":"e","accept_vcoremail":"email","hippa_accept":true,"insurance_id":"e"}}}],"loading":true}
// const assets = {"result": [{ "observers": [  "Alice" ], "agreementText": "", "payload": {    "citizen": "Alice", "operator": "Operator", "roletype": "Citizen" }, "signatories": [  "Operator" ], "contractId": "00bbb0f3c6bd9a27d8ffe304bc6aca8b0cc058eea3e483704df0469be9776fa9c5", "templateId": "5930f9c206352112718aaa4bf0104f368d4b4763cf201e055073cdea03bc3301:Main:CitizenInvitation" }], "status": 200};
//const assets = useQuery(Main.CitizenInvitation); 


 /*  const assets = async()  => { 
    const response =  useStreamQuery(Main.CitizenInvitation)
    const assets = await response.json();
    console.log(assets);
} */

 
//const assets  = async () => {
//  useQuery(Main.CitizenInvitation); 
//  const obj = JSON.stringify("assets" + assets);
//  console.log ("obj" + obj);
 // const obj2 = JSON.parse(obj); 
// } 


const QueryResult = useQuery(Main.CitizenInvitation); 
const assets = QueryResult.contracts.map(c => c.payload.roletype);
const roletype = JSON.stringify (assets);
console.log ("Roletype : " + roletype)

  return (
    <>
      {/*  <Contracts
        contracts={assets.contracts}
         
    
       
       /> */}
    </>
  );

}