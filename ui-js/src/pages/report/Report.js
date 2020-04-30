import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useLedger } from "@daml/react";
import { Main } from "@daml2js/covid-19-0.0.1";

export default function Report() {

  const ledger = useLedger();
  const assets = useStreamQuery(Main.Asset);

  // is Main.Asset a view of all the Contracts on the ledger ? 


  // const exerciseGive = function(cid, newOwner) {

  // Bart:  do I replace  "exerciseGive" with on of the functions in my DAML eg. "InviteHealtClinic" under the Template "Network"


  // ledger.exercise(Main.Asset.Give, cid, { newOwner });

// Bart : What is the structure for exercise (arguments ) ?

  // };

  return (
    <>
      <Contracts
        contracts={assets.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Issuer", "payload.issuer"],
          ["Owner", "payload.owner"],
          ["Name", "payload.name"]
        
        ]}
    //    actions={[["Give", (c, newOwner) => { exerciseGive(c.contractId, newOwner); }, "New Owner"]]}

    // Bart : How can I adjust the action above and make it applicable to my DAML example


      />
    </>
  );
}

// Bart: Nice to Have :   I like to show a note when the list is empty 
