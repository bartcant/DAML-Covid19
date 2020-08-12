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
    ledger.exercise(Main.TestRequest.ConfirmTestAppointment, cid, {citizen, healthclinic, operator, appointmentdate} ); 
    alert("An Covid19 Test Appointment has been succesfully stored on the Ledger");
  };

  const exerciseVaccine = function(cid, citizen, appointmentdate2 ) {
    console.log("healthclinic : " + healthclinic);
    console.log("citizen : " + citizen); 
    console.log("appointmentdate : "+ appointmentdate2);
    console.log("cid: "+ cid);
    ledger.exercise(Main.TestRequest.ConfirmVaccineAppointment, cid, {citizen, healthclinic, operator, appointmentdate2} ); 
    alert("A Vaccine Appointment has been succesfully stored on the Ledger");
  };

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
         ["Test Appointment Date", (c, appointmentdate) => { exerciseAppointment(c.contractId,c.payload.citizen, appointmentdate); },"YYYY-MM-DD" ], 
         ["Vaccine Appointment Date", (c, appointmentdate2) => { exerciseVaccine(c.contractId,c.payload.citizen, appointmentdate2); },"YYYY-MM-DD" ]   
        ]}
      />
    </>
  );
}
