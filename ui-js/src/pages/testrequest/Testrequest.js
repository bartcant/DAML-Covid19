  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function TestRequest() {

  const citizen = useParty();
  const operator = "Operator"; 
  const ledger = useLedger();
  const assets = useStreamQuery (Main.CitizenRole, () => ({ citizen : citizen }));

   const exerciseRequestTest = function(cid, healthclinic ) {
    console.log("operator :" + operator);
    console.log("healthclinic : " + healthclinic);
    console.log("citizen : " + citizen); 
    console.log("cid: "+ cid);
    // console.log("assets.contracts: ", assets.contracts);
    ledger.exercise(Main.CitizenRole.RequestTest, cid, { operator, citizen, healthclinic} ); };
   

  // get HealthClinicRoles
  const roletype = "HealthClinic";
  // const healthclinics = useStreamQuery(Main.HealthCliniRole);
  const healthclinics = useStreamQuery(Main.PartyInvitation, () => ({ roletype: roletype }));
  const getOptionsFromHealthClinics = () => {
    const resultList = healthclinics.contracts.map(hc => {
      return {label : hc.payload.party, value : hc.payload.party};
    });
    console.log("[getOptionsFromHealthClinics] healthclinics is", healthclinics, resultList);
    return resultList;
  };


  return (
    <>
      <Contracts
        contracts={assets.contracts}
        


        columns={[
          ["ContractId", "contractId"],
          ["Citizen", "payload.citizen"]
         ]}
         
       actions={[
         [
          "Test Request", 
          (c, healthclinic) => { exerciseRequestTest(c.contractId, healthclinic); }, 
          "Healthclinic", 
          "select", 
          getOptionsFromHealthClinics(),
          // healthclinics.contracts.map(hc => {
          //   return {label : hc.party, value : hc.party};
          // }),
          // [{label:'aa',value:'av'}],
         ], 
        ]}
        />
      </>
    );
  }