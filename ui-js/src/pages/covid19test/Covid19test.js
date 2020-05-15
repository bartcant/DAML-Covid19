import React from 'react';
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
import Covid19Form from "../../components/Covid19form.js"



export default function TestAppointment() {

  const citizen = "Alice";
  const healthclinic = useParty(); 
  const ledger = useLedger();
  const covid19testdata = {
    
    testdate: "",      
    healthclinic: "",
    citizen: "",
    testtype: "",
    testnumber: "",
    testresult: "",
    locationstate: "",
    testupdatedata: ""
   }

  const assets = useStreamQuery (Main.TestAppointment);



  const exercisestarttest = function(cid ) {
    console.log("healtclinic : " + healthclinic);
    console.log("citizen : " + citizen); 
    console.log("cid: "+ cid);
    ledger.exercise(Main.TestAppointment.Covid19Test, cid, {citizen, healthclinic, covid19testdata} ); 
  };

return (
    <>
      <Contracts
        contracts={assets.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Citizen", "payload.citizen"],
          ["Healthclinic", "payload.healthclinic"],
          ["Appointment Date", "payload.appointmentdate"]
        ]}
       
        actions={[
          
          ["Conduct Test", (c) => { exercisestarttest(c.contractId ); }]
        ]}
        />
        
        <br/>

        <Covid19Form>   

          <div> test</div>


        </Covid19Form>
        </>
      );
    }


