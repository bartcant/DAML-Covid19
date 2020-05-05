import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useQuery } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1";

export default function Default() {

  const assets = useQuery(Main.Network);

  return (<Contracts contracts={assets.contracts} />);
}
