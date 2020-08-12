  
import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function VCList() {

  
  const assets = useStreamQuery (Main.SupplyImmunityVC);


  return (
    <>
      <Contracts
        contracts={assets.contracts}
        
      
       
      />
    </>
  );
}