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
import { connect } from 'react-redux'

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
            let  newverifiablecredentials = {
                connectionid: response.data.connectid,
                holder_did: response.data.holder_did,
                issuer_did: response.data.issuer_did
            };
            ledger.exercise(Main.CitizenRole.SetVerifiableCredentials, contractId, { citizen, newverifiablecredentials});
            setQrState({...qrState, qr_open: true, invite_url: "https://web.cloud.streetcred.id/link/?c_i=" + response.data.invite_url});
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

    return (
        <div >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper style={{ display: 'flex', maxWidth: '600px', width: '100%', margin: '40px', padding: 40 }}>
                    <div style={{ display: 'flex', padding: '24px 24px', flexDirection: 'column', width: '100%' }}>
                        
                        <Button style={{ backgroundColor: '#9b84ff' }}
                            onClick={() => onIssue()}>
                            Create Connection
                        </Button>
                    </div>
                </Paper>
            </div>
            <Dialog open={qrState.qr_open} onClose={() => setQrState({ ...qrState, qr_open: false })}>
                <DialogTitle style={{ width: "500px" }}>Scan this QR code</DialogTitle>
                <QRcode value={qrState.invite_url} style={{ margin: "0 auto", padding: "10px" }} />
            </Dialog>
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