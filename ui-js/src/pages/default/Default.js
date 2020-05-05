import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useQuery } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1";

export default function Default() {

  const assets = useQuery(Main.Network);
// console.log(Main.Network);
 // const assetoutput = JSON.stringify(assets);
 // console.log("assets"+ assetoutput);
 // console.log ("assets.contract" + assets.contracts)
  

  return (<Contracts contracts={assets.contracts} />);
}
