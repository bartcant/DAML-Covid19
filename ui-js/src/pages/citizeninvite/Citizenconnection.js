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


axios.defaults.baseURL = 'http://localhost:3002/';


function CitizenConnection () {


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

const onClose = () => {}

return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Paper style={{ display: 'flex', maxWidth: '600px', width: '100%', margin: '40px', padding: 40 }}>
                <div style={{ display: 'flex', padding: '24px 24px', flexDirection: 'column', width: '100%' }}>
                    <Button style={{ backgroundColor: '#9b84ff' }}
                        onClick={() => onClose() }>
                        Cancel
                          </Button>
                    <Button style={{ backgroundColor: '#9b84ff' }}
                        onClick={() => onIssue() }>
                        Create Verifiable Connection
                        </Button>

                </div>
            </Paper>
        </div>
        <div>
            <h1> How to Receive a Verifiable Credentials  </h1>

            <h2> Step 1 : Download the Trinsic App from  </h2>
            <p> &nbsp;&nbsp;&nbsp;&nbsp; IOS : https://apps.apple.com/us/app/trinsic-wallet/id1475160728 </p>
            <p>  &nbsp;&nbsp;&nbsp;&nbsp;Android : </p>
            <img src={trinsicwallet} alt="logo" style={{ width: '30%' }} />


            <p> The Trinsic Wallet allows you to obtain a "Digital" versions of a "Credential" </p>
                   <p> This case it is a digital credential for : </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;1. Covid19 Test </p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;2. Immunity Test</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;3. Administration of Covid19 Vacine </p>

            <p> Verifiable credentials are the new standard for trust online, and the Trinsic Wallet is </p>
            <p> one of the world's go-to wallet for storing verifiable credentials. This self-sovereign identity app that's </p>
                <p> built entirely on open standards,including W3C specs for DIDs/Verifiable Credentials, and DIF/Aries specs for DIDComm. </p>
                <p>The wallet is built on the open source Hyperledger Aries Framework.</p>
                <p>For More information : https://www.trinsic.id</p>
            <br></br>

            <h2> Step 2 : Register your account and take Tour at the Trinsic App</h2>

            <img src={trinsic1} alt="logo" style={{ width: '30%' }} />
            <img src={trinsic2} alt="logo" style={{ width: '30%' }} />
            <img src={trinsic3} alt="logo" style={{ width: '30%' }} />
            <img src={trinsic4} alt="logo" style={{ width: '30%' }} />
            <br></br>

            <h2> Step 3:  Scan the QR Code after clicking the Connect Button</h2>



            <h2> Step 4 : Accept the Connection on your Phone </h2>
        </div>
        <div>

            <Dialog open={qrState.qr_open} onClose={() => setQrState({ ...qrState, qr_open: false })}>
                <DialogTitle style={{ width: "500px" }}>Scan this QR code</DialogTitle>
                <QRcode value={qrState.invite_url} style={{ margin: "0 auto", padding: "10px" }} />
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