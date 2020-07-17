import React from 'react';
import axios from 'axios';
import { useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import QRcode from 'qrcode.react';
// redux connect
import { connect } from 'react-redux';

// Trinsic media
import trinsicwallet from "./trinsic/trinsicwallet.jpg";
import trinsic1 from "./trinsic/trinsic1.png";
import trinsic2 from "./trinsic/trinsic2.png";
import trinsic3 from "./trinsic/trinsic3.png";
import trinsic4 from "./trinsic/trinsic4.png";
import scan1 from "./trinsic/scan1.png";
import scan2 from "./trinsic/scan2.png";
import scan3 from "./trinsic/scan3.png";

axios.defaults.baseURL = 'http://localhost:3002/';


function CitizenConnection() {


    const ledger = useLedger();

    const [qrState, setQrState] = React.useState({
        qr_open: false,
        qr_placeholder: "",
        invite_url: ""
    });

    const onIssue = () => {
        console.log("start Axios here")
        let citizen = localStorage.getItem('aciti'),
            contractId = localStorage.getItem('acid');

        if (contractId === null || contractId === null) { alert('Invalid ContractId'); }
        axios.post('/api/connection', {
            citizen: citizen,
            contractId: contractId
        }).then((response) => {
            let newverifiablecredentials = {
                connectionid: response.data.connectid,
                holder_did: response.data.holder_did,
                issuer_did: response.data.issuer_did
            };
            ledger.exercise(Main.CitizenRole.SetVerifiableCredentials, contractId, { citizen, newverifiablecredentials });
            setQrState({ ...qrState, qr_open: true, invite_url: "https://web.cloud.streetcred.id/link/?c_i=" + response.data.invite_url });
            console.log("invite url" + qrState.invite_url);
        });
        axios.post('/api/connectionid').then((response) => {
            console.log(response);
        });


        setQrState({
            ...qrState,
            qr_open: true,
            qr_placeholder: qrState
        });

    }

    const onClose = () => { }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper style={{ display: 'flex', maxWidth: '600px', width: '100%', margin: '40px', padding: 40 }}>
                    <div style={{ display: 'flex', padding: '24px 24px', flexDirection: 'column', width: '100%' }}>
                        <Button style={{ backgroundColor: 'blue' }}
                            color="primary"
                            onClick={() => onClose()}>
                            Cancel
                          </Button>&nbsp;
                    <Button style={{ backgroundColor: 'blue' }}
                            color="primary"
                            onClick={() => onIssue()}>
                            Create Connection
                        </Button>

                    </div>
                </Paper>
            </div>
            <div>
                <h2> How to  - Receive a Verifiable Credentials  </h2>

                <h3> Background</h3>
                <p> Verifiable credentials are the new standard for trust online, and the Trinsic Wallet is
                one of the world's go-to wallet for storing verifiable credentials. This self-sovereign identity app is
                built entirely on open standards,including W3C specs for DIDs/Verifiable Credentials, and DIF/Aries specs for DIDComm
                 , and the open source Hyperledger Aries Framework.</p>
                 <br></br>
                 
                <p>    For More information : <a href="https://www.trinsic.id">https://www.trinsic.id</a> </p>

                <h3> Step 1 : Download the Trinsic App from  </h3>
                <p> &nbsp;&nbsp;&nbsp;&nbsp; IOS : <a href="https://apps.apple.com/us/app/trinsic-wallet/id1475160728"> Download Here </a> </p>
                <p>  &nbsp;&nbsp;&nbsp;&nbsp;Android : </p>
                <img src={trinsicwallet} alt="logo" style={{ width: '30%' }} />


                <p> The Trinsic Wallet allows you to obtain a "Digital" versions of a "Credential" </p>
                <p> This case it is a digital credential for : <br></br>
                     &nbsp;&nbsp;&nbsp;&nbsp;1. Covid19 Test <br></br>
                     &nbsp;&nbsp;&nbsp;&nbsp;2. Anti-Body Test <br></br>
                     &nbsp;&nbsp;&nbsp;&nbsp;3. Administration of Covid19 Vacine </p>

               
                <br></br>

                <h3> Step 2 : Register your account and take a Tour through the Trinsic App</h3>

                <p> once you have registered, a quick tour is available with the key features of this verifiable credentials app</p>

                <img src={trinsic1} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <img src={trinsic2} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <img src={trinsic3} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <img src={trinsic4} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <br></br>

                <h2> Step 3:  Scan the QR Code after clicking the Connect Button</h2>
                <p>In the Mobile App scan the QR code to make a digital connection </p>
                <img src={scan1} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <img src={scan2} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                


                <h2> Step 4 : Accept the Connection on your Phone </h2>
                <p> The system will send a notification. Click "Accept" to accept the connection request</p>
                <img src={scan3} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                </div>

                <h2> Step 5 : Notification of Test Results</h2>
                <p> Once available the system will automatically send the "Test Result" or any other "Verifiable 
                    Credentials" to your mobile App
                </p>

            <div>

                <Dialog fullWidth open={qrState.qr_open} onClose={() => setQrState({ ...qrState, qr_open: false })}>
                    <DialogTitle style={{ width: "400px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scan this QR code</DialogTitle>
                    <QRcode value={qrState.invite_url} style={{ width: "150px", margin: "0 auto", padding: "10px" }} />
                    <br>
                    </br>
                </Dialog>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    const { conduct } = state

    return {
        citizen: conduct.citizen,
        contractId: conduct.contractId
    }
}

export default connect(mapStateToProps, null)(CitizenConnection);