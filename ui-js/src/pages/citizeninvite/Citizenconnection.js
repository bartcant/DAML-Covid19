import React from 'react';
import axios from 'axios';
import { useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
import QRcode from 'qrcode.react';
// import material-ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
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

function getSteps() {
    return ['Background', 'Download the Trinsic App from', 'Register your account and take a Tour through the Trinsic App', 'Scan the QR Code after clicking the Connect Button', 'Accept the Connection on your Phone', 'Notification of Test Results'];
}
  
function getStepContent(step) {
    switch (step) {
        case 0:
            return <div>
                <p> Verifiable credentials are the new standard for trust online, and the Trinsic Wallet is
                one of the world's go-to wallet for storing verifiable credentials. This self-sovereign identity app is
                built entirely on open standards,including W3C specs for DIDs/Verifiable Credentials, and DIF/Aries specs for DIDComm
                 , and the open source Hyperledger Aries Framework.</p>
                 <br></br>
                 
                <p>    For More information : <a href="https://www.trinsic.id">https://www.trinsic.id</a> </p>
                <br/>
            </div>
        case 1:
            return <div>
                <p> &nbsp;&nbsp;&nbsp;&nbsp; IOS : <a href="https://apps.apple.com/us/app/trinsic-wallet/id1475160728"> Download Here </a> </p>
                <p>  &nbsp;&nbsp;&nbsp;&nbsp;Android : </p>
                <img src={trinsicwallet} alt="logo" style={{ width: '30%' }} />


                <p> The Trinsic Wallet allows you to obtain a "Digital" versions of a "Credential" </p>
                <p> This case it is a digital credential for : <br></br>
                     &nbsp;&nbsp;&nbsp;&nbsp;1. Covid19 Test <br></br>
                     &nbsp;&nbsp;&nbsp;&nbsp;2. Anti-Body Test <br></br>
                     &nbsp;&nbsp;&nbsp;&nbsp;3. Administration of Covid19 Vacine </p>
                <br/>
            </div>
        case 2:
            return <div>
                <p> once you have registered, a quick tour is available with the key features of this verifiable credentials app</p>

                <img src={trinsic1} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <img src={trinsic2} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <img src={trinsic3} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <img src={trinsic4} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <br/><br/>
            </div>
        case 3:
            return <div>
                <p>In the Mobile App scan the QR code to make a digital connection </p>
                <img src={scan1} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <img src={scan2} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <br/><br/>
            </div>
        case 4:
            return <div>
                <p> The system will send a notification. Click "Accept" to accept the connection request</p>
                <img src={scan3} alt="logo" style={{ width: '20%' }} />&nbsp;&nbsp;
                <br/><br/>
            </div>
        case 5:
            return <div>
                <p> Once available the system will automatically send the "Test Result" or any other "Verifiable Credentials" to your mobile App</p>
                <br/>
            </div>
        default:
            return 'Unknown step';
    }
}


function CitizenConnection() {


    const ledger = useLedger();

    const [qrState, setQrState] = React.useState({
        qr_open: false,
        qr_placeholder: "",
        invite_url: ""
    });

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
        if (activeStep === steps.length - 1)
            handleReset()
        else
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
        setActiveStep(0);
    };

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

    const onClose = () => {
        alert("No Verifiable Connection is created. Please update your details to received your test results via email");
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper style={{ display: 'flex', maxWidth: '600px', width: '100%', margin: '40px', padding: 40 }}>
                    <div style={{ display: 'flex', padding: '24px 24px', flexDirection: 'column', width: '100%' }}>
                        <h3 style={{textAlign: 'center'}}> Create a Verifiable Connection <br/> for more information, check the How-To below</h3>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth={true}
                                    onClick={() => onIssue()}>
                                    Create Connection
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth={true}
                                    onClick={() => onClose()}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </div>
            <div>
                <h2> How to  - Receive a Verifiable Credentials  </h2>

                <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                >
                                    {activeStep === steps.length - 1 ? 'Reset' : 'Next'}
                                </Button>
                            </div>
                        </StepContent>
                    </Step>
                ))}
                </Stepper>

                <div>

                    <Dialog fullWidth open={qrState.qr_open} onClose={() => setQrState({ ...qrState, qr_open: false })}>
                        <DialogTitle style={{ width: "400px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scan this QR code</DialogTitle>
                        <QRcode value={qrState.invite_url} style={{ width: "150px", margin: "0 auto", padding: "10px" }} />
                        <br>
                        </br>
                    </Dialog>
                </div>
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