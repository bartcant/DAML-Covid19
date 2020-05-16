import React from 'react';
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



export default function TestAppointment() {

  const citizen = "Alice";
  const healthclinic = useParty(); 
  const ledger = useLedger();


  const assets = useStreamQuery (Main.TestAppointment);
 



  const exercisestarttest = function(cid ) {
    console.log("healtclinic : " + healthclinic);
    console.log("citizen : " + citizen); 
    console.log("cid: "+ cid);
    // ledger.exercise(Main.TestAppointment.Covid19Test, cid, {citizen, healthclinic, covid19testdata} ); 

    // this above function the needs input for "covid19testdata" from the Start.js page and needs it in the following format:

   // {"testdate":"testdate", issuedby:"issuedby","testtype":"testtype,"testnumber":"testnumber,"locationstate":"locationstate","testupdatedata:"testupdatedata"}


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
          
          ["Conduct Test", (c) => { exercisestarttest(c.contractId ); }
       
        ]
        ]}
      
        // This previous JSX component is based on Contracts.js
        // I like to customize "Contracts.js" so when the button is clicked it launches a pop-up or page to start the Form      />
      
        <br/>

        <Button component={ Link } to="/app/finalform" variant="contained" color="primary"> Conduct Test
        </Button>
         // This is currently a hack to navigate to the Start.js page, but is not necessary
        </>

      );
    }




