import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function TestRequest() {

  const citizen = "Alice";
  const healthclinic = useParty(); 
  const ledger = useLedger();
  const assets = useStreamQuery (Main.TestRequest);

  const exerciseAppointment = function(cid, appointmentdate ) {
    console.log("healthclinic : " + healthclinic);
    console.log("citizen : " + citizen); 
    console.log("appointmentdate : "+ appointmentdate);
    console.log("cid: "+ cid);
    ledger.exercise(Main.TestRequest.ConfirmTestAppointment, cid, {citizen, healthclinic, appointmentdate} ); };
    
    
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
         ["AppointmentDate", (c, appointmentdate) => { exerciseAppointment(c.contractId, appointmentdate); },"Appointment Date" ]  
        ]}
      />
    </>
  );
}
