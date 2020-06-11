import axios from 'axios';
import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import QRcode from 'qrcode.react';

axios.defaults.baseURL = 'http://localhost:3002/';

export default class StreetCredC extends Component {
    state = {

        qr_open: false,
        qr_placeholder: "",
        invite_url: ""
    };

    onIssue = () => {
        
        console.log("start Axios here")
        axios.post('/api/connection').then((response) => {
            console.log(response);
            this.setState({ invite_url: "https://web.cloud.streetcred.id/link/?c_i=" + response.data.invite_url });
            console.log("invite url" + this.state.invite_url);
        });
        this.setState({
            qr_open: true,
            qr_placeholder: this.state
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
                            
                            <Button style={{ backgroundColor: '#9b84ff' }}
                                onClick={() => this.onIssue()}>
                                Create Connection
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
