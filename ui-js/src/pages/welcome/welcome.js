import React from "react";
import logortledgers from "../login/400dpiLogoCropped.jpg"

export default function Welcome() {
    return (
        <div>
            <div>
                <img src={logortledgers} alt="logo" style={{ width: '30%' }} />
            </div>

            <h1 > Welcome to Covid-19 State Surveillance Application</h1>

            <div>
                <p>This is a demonstration of a Centralized Ledger Solution using the following key technolgies:</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;1. Digital Assets Modeling Language</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;2. Trinsic's Verifiable Credentials API, Mobile appliction and connection to the Sovrin Network</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;3. The application can be hosted on a variety of Decentralized and Centralized ledgers</p><br />

                <p>Supported Platforms : </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;a. Localhost: a Postgress DB for Development purposes</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;b. Project Dable : A complete centralized Ledger solution hosted by Digital Assets Holding</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;c. AWS QLDB using "BTP Sextant" Platform</p>

                <p>For more information  and support : Please contact <a href="mailto: bart@rtledgers.com">bart@rtledgers.com</a></p>
            </div>
        </div>
    )
}