import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function TestRequest() {


  const healthclinic = useParty(); 
  const operator = "Operator"
  const ledger = useLedger();
  const assets = useStreamQuery (Main.TestRequest, () => ({ healthclinic : healthclinic }));

  const exerciseAppointment = function(cid, citizen, appointmentdate ) {
    console.log("healthclinic : " + healthclinic);
    console.log("citizen : " + citizen); 
    console.log("appointmentdate : "+ appointmentdate);
    console.log("cid: "+ cid);
    ledger.exercise(Main.TestRequest.ConfirmTestAppointment, cid, {citizen, healthclinic, operator, appointmentdate} ); };
    
    
  return (
    <>
      <Contracts
        contracts={assets.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["HealthClinic", "payload.healthclinic"],
          ["Citizen", "payload.citizen"]
        ]}
         
       actions={[
         ["AppointmentDate", (c, appointmentdate) => { exerciseAppointment(c.contractId,c.payload.citizen, appointmentdate); },"Appointment Date" ]  
        ]}
      />
    </>
  );
}
