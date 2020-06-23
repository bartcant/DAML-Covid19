const http = require('http');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { createTerminus } = require('@godaddy/terminus');
const express = require('express');
const ngrok = require('ngrok');
const cache = require('./model');

require('dotenv').config();

const { AgencyServiceClient, Credentials } = require("@streetcred.id/service-clients");
const client = new AgencyServiceClient(new Credentials(process.env.ACCESSTOK, process.env.SUBKEY), { noRetryPolicy: true });

let app = express();
app.use(cors());
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

// WEBHOOK ENDPOINT
 app.post('/webhook', async function (req, res) {
    try {
        console.log("got webhook" + req + "   type: " + req.body.message_type);
        if (req.body.message_type === 'new_connection') 
        {
            console.log("new connection notif");
            console.log("Connection Complete with connectionid : " + req.body.object_id );
               
        }

    }
    catch (e) {
        console.log("Error in creating a connection ");
        console.log(e.message || e.toString());
    }
});

//FRONTEND ENDPOINT for creating a connection
app.post('/api/connection', cors(), async function (req, res) {
    const invite = await getInvite();
    cache.add("alice", invite.connectionId); 
    console.log("Cache invite.connectionId : " + invite.connectionId);
    res.status(200).send({ invite_url: invite.invitation, connectid : invite.connectionId });

});

const getInvite = async () => {
    try {
        return await client.createConnection({
            connectionInvitationParameters: {}
        });
    } catch (e) {
        console.log ("Get invite problem");
        console.log(e.message || e.toString());
    }
}


/* // StoreconnectionID


app.post('/api/connectionid', cors(), async function (req, res) {
    const connectid = cache.get("alice");
    let operator = "operator";
    let citizen = " Alice"; 
    ledger.exercise(Main.CitizenInvitation.SetVerifiableCredentials, curContractId, { operator, citizen, citizendetails, connectionid=connectid });

    console.log("Cache invite.connectionId : " + invite.connectionId);
    res.status(200).send({ connectionid: connectid });
 */



// //FRONTEND ENDPOINT for issuing credentials
app.post('/api/issue', cors(), async function (req, res) {
    const attribs = JSON.stringify(req.body);
    console.log("attribs in app.post" + attribs);
    const connectid = cache.get("alice");
    console.log()
    console.log ("We are starting the credentials part");
        let param_obj = JSON.parse(attribs);
        let params = {
            credentialOfferParameters: {
                definitionId: process.env.CRED_DEF_ID,
                connectionId: connectid,
                automaticIssuance: true,
                credentialValues: {
                    "testdate": param_obj["testdate"],
                    "healthclinic": param_obj["healthclinic"],
                    "citizen": param_obj["citizen"],
                    "statehealth": param_obj["statehealth"],
                    "testtype": param_obj["testtype"],
                    "testnumber": param_obj["testnumber"],
                    "testresult": param_obj["testresult"],
                    "locationstate": param_obj["locationstate"]
                }
            }
        }
        console.log("Client.createCredential");
        await client.createCredential(params);
    
});





// for graceful closing
let server = http.createServer(app);

async function onSignal() {
    let webhookId = cache.get("webhookId");
    const p1 = await client.removeWebhook(webhookId);
    return Promise.all([p1]);
}
createTerminus(server, {
    signals: ['SIGINT', 'SIGTERM'],
    healthChecks: {},
    onSignal
});

const PORT = process.env.PORT || 3002;
server = server.listen(PORT, async function () {
    const url_val = await ngrok.connect(PORT);
    console.log("============= \n\n" + url_val + "\n\n =========");
    let response = await client.createWebhook({
        webhookParameters: {
            url: url_val + "/webhook",  // process.env.NGROK_URL
            type: "Notification"
        }
    });

    cache.add("webhookId", response.id);
    console.log('Listening on port %d', server.address().port);
}); 
