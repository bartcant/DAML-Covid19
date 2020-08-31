// import axios from 'axios';
import axiosClient from '../../axiosClient';

import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from "@material-ui/core";
import QRcode from 'qrcode.react';

axiosClient.defaults.baseURL = 'http:/';

export default class StreetCred extends Component {
    state = {

        testdate: "",
        healthclinic: "",
        citizen: "",
        statehealth: "",
        testtype: "",
        testnumber: "",
        testresult: "",
        locationstate: "",

        qr_open: false,
        qr_placeholder: "",
        invite_url: "",
    };

    onIssue = () => {
        const CovidResult = {
            testdate: this.state.testdate,
            healthclinic: this.state.healthclinic,
            citizen: this.state.citizen,
            statehealth: this.state.statehealth,
            testtype: this.state.testtype,
            testnumber: this.state.testnumber,
            testresult: this.state.testresult,
            locationstate: this.state.locationstate

        }
        console.log(CovidResult)
        console.log("start Axios here")
        axiosClient.post('/api/issue', CovidResult).then((response) => {
            console.log(response);
            this.setState({ invite_url: "https://web.cloud.streetcred.id/link/?c_i=" + response.data.invite_url });
            console.log("invite url" + this.state.invite_url);
        });
        this.setState({
            qr_open: true,
            qr_placeholder: this.state,
        })
    }

    render() {
        const card = this.state
        return (
            <div >
                {/* The AppBar */}
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: '#812bff' }}>
                        <img style={{}} />
                        <Typography variant="h6">
                            Streetcred API Demo
                        </Typography>
                        <div style={{ flexGrow: 1 }}></div>
                        <Button href="https://www.streetcred.id" style={{ color: 'white' }}>
                            Streetcred
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* The Paper */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Paper style={{ display: 'flex', maxWidth: '600px', width: '100%', margin: '40px', padding: 40 }}>
                        <div style={{ display: 'flex', padding: '24px 24px', flexDirection: 'column', width: '100%' }}>
                            <div style={{ display: 'flex', marginBottom: '24px' }}>
                                <Typography variant="h5" style={{ flexGrow: 1 }}>
                                    Submit Covid19Test Result
                                </Typography>


                            </div>

                            <TextField
                                id="testdate"
                                label="Test Date"
                                placeholder={"what's the test date"}
                                value={card.testdate}
                                onChange={(e) => this.setState({ testdate: e.target.value })}
                                style={{ marginBottom: '12px' }}
                            />

                            <TextField
                                id="healthclinic"
                                label="Health Clinic"
                                placeholder={"what's the health clinic ? "}
                                value={card.healthclinic}
                                onChange={(e) => this.setState({ healthclinic: e.target.value })}
                                style={{ marginBottom: '12px' }}
                            />

                            <TextField
                                id="citizen"
                                label="Citizen"
                                placeholder={"who's the citizen ? "}
                                value={card.citizen}
                                onChange={(e) => this.setState({ citizen: e.target.value })}
                                style={{ marginBottom: '12px' }}
                            />
                            <TextField
                                id="statehealth"
                                label="StateHealth"
                                placeholder={"what's the State Health Agency? "}
                                value={card.statehealth}
                                onChange={(e) => this.setState({ statehealth: e.target.value })}
                                style={{ marginBottom: '12px' }}
                            />

                           <TextField
                                id="testtype"
                                label="Test Type"
                                placeholder={"what's the Test Type? "}
                                value={card.testtype}
                                onChange={(e) => this.setState({ testtype: e.target.value })}
                                style={{ marginBottom: '12px' }}
                            />

                            <TextField
                                id="testnumber"
                                label="Test Number"
                                placeholder={"what's the Test Number? "}
                                value={card.testnumber}
                                onChange={(e) => this.setState({ testnumber: e.target.value })}
                                style={{ marginBottom: '12px' }}
                            />

                            <TextField
                                id="testresult"
                                label="Test Result"
                                placeholder={"what's the Test Result? "}
                                value={card.testresult}
                                onChange={(e) => this.setState({ testresult: e.target.value })}
                                style={{ marginBottom: '12px' }}
                            /> 

                             <TextField
                                id="locationstate"
                                label="Location State"
                                placeholder={"what's the State? "}
                                value={card.locationstate}
                                onChange={(e) => this.setState({ locationstate: e.target.value })}
                                style={{ marginBottom: '12px' }}
                            />                            

                            <Button style={{ backgroundColor: '#9b84ff' }}
                                onClick={() => this.onIssue()}>
                                Issue Credential
                            </Button>
                        </div>
                    </Paper>
                </div>
                <Dialog open={this.state.qr_open} onClose={() => this.setState({ qr_open: false })}>
                    <DialogTitle style={{ width: "500px" }}>Scan this QR code</DialogTitle>
                    <QRcode value={this.state.invite_url} style={{ margin: "0 auto", padding: "10px" }} />
                </Dialog>
            </div>
        )
    }
}
