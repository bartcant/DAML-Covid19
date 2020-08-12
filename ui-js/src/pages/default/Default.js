import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useQuery } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";

export default function Default() {
  const assets = useStreamQuery(Main.VaccineAppointment); // in this case Main.CitizenInvitation is the Template with DAML contracts
  //const assets = QueryResult.contracts.map((c) => c.payload);
  //console.log("roletype : " + JSON.stringify(assets));

  // Further useQuery filtering
  // https://docs.daml.com/app-dev/bindings-ts/daml-react/index.html
  // discussion on daml slack
  //https://damldriven.slack.com/archives/CHNR30B1T/p1593195087104700

  // other Query and Filtering capabilities example (from dablchat Chatmanager.js)

  /* const fetchUpdate = async () => {
  try {
    const allContractsResponse = await post('/v1/query', {
      body: JSON.stringify({ 'templateIds': [
        CHAT_TEMPLATE,
        MESSAGE_TEMPLATE,
        USER_TEMPLATE,
        ADDRESS_BOOK_TEMPLATE,
        SELF_ALIAS_TEMPLATE
      ] })
    });

    const allPublicContractsResponse = await postPublic('/v1/query', {
      body: JSON.stringify({ 'templateIds': [
        SELF_ALIAS_TEMPLATE
      ] })
    });

    const allContracts = await allContractsResponse.json();

    const chats = allContracts.result.filter(c => c.templateId.endsWith(CHAT_TEMPLATE));
    const messages = allContracts.result.filter(m => m.templateId.endsWith(MESSAGE_TEMPLATE));
    const user = allContracts.result.find(u => u.templateId.endsWith(USER_TEMPLATE));
    const selfAlias = allContracts.result.find(ma => ma.templateId.endsWith(SELF_ALIAS_TEMPLATE));
    const addressBook = allContracts.result.find(ma => ma.templateId.endsWith(ADDRESS_BOOK_TEMPLATE));

    const model = chats
      .sort((c1, c2) => c1.payload.name > c2.payload.name ? 1 : c1.payload.name < c2.payload.name ? -1 : 0)
      .map(c => {
        const chatMessages = messages.filter(m => m.payload.chatId === c.payload.chatId)
          .sort((m1, m2) => m1.payload.postedAt > m2.payload.postedAt ? 1 : m1.payload.postedAt < m2.payload.postedAt ? -1 : 0)
          .map(m => Object.assign({}, {...m.payload, contractId: m.contractId}));
        return {
          contractId: c.contractId,
          chatId: c.payload.chatId,
          chatMessages,
          chatCreator: c.payload.creator,
          chatMembers: c.payload.members,
          chatName: c.payload.name,
          chatTopic: c.payload.topic || '',
          isPublic: c.payload.isPublic
        };
      });

    const allPublicContracts = await allPublicContractsResponse.json();

    const selfAliases = allPublicContracts.result.filter(ma => ma.templateId.endsWith(SELF_ALIAS_TEMPLATE));

    const publicAliases = selfAliases.reduce((acc, curr) => {
      acc[curr.payload.user] = curr.payload.alias;
      return acc;
    }, {});

    let aliases = Object.assign({}, publicAliases, addressBook.payload.contacts.textMap);
    if (selfAlias) {
      aliases[selfAlias.payload.user] = selfAlias.payload.alias;
    }

    updateState(Object.assign({}, {...user.payload, contractId: user.contractId}), model, aliases);

  } catch (e) {
    console.error("Could not fetch contracts!", e)
  }
} */

  return (
    <>
       <Contracts
        contracts={assets.contracts}
         
    
       
       /> 
    </>
  );
}
