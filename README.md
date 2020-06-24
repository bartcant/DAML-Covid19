# DAML-Covid19
DAML implementation for Covid19 Use Cases
-- Copyright (c) 2020 Rethink Ledgers LLC. All rights reserved.


Link to Google Doc for more information about the Covid19 Model using DAML

https://docs.google.com/document/d/1AdekheWp4MGCXcCUA7thlD_u6XDi-yA3HvEB288owJY/edit#



<h2>Installation instructions </h2>

Step1 : Building and installing DAML Postgress 

1. install DAML SDK
        For more information :

2. install Postgress for local persistance layer with daml
        For more information :
        Setup a new DB: 'test'
        Setup a Postgress User: 'Bart' with password: 'password'
        
   note: when you create a new daml file then 'delete database' and recreate it

3. Build locally .dar file

        daml build

4. UX code generation:

        daml codegen js -o daml2js .daml/dist/covid19-0.0.1.dar

5. Change to ui-js directory

        Cd ui-js directory

6. Install User interface code

        yarn install --force --frozen-lockfile


<h2> Step 2 : Deploying DAML and UX in local environment </h2>

1. Start DAML Sandbox in a new console window

        daml sandbox .daml\dist\Covid19-0.0.1.dar --ledgerid Covid19 --sql-backend-jdbcurl "jdbc:postgresql://localhost/test?user=Bart&password=password"

2. Make Static Content sub-directory 

        mkdir static-content

3. Start JSON-API  in a new console window

        daml json-api --ledger-host localhost --ledger-port 6865  --http-port 7575 --max-inbound-message-size 4194304 --package-reload-interval 5s --application-id HTTP-JSON-API-Gateway --static-content "prefix=static,directory=./static-content"  --query-store-jdbc-config "driver=org.postgresql.Driver,url=jdbc:postgresql://localhost:5432/test?&ssl=true,user=Bart,password=password,createSchema=false"

4. Start Frontend and Backend solution in a new console window in ui-js directory

        cd ui-js

        yarn run start


<h2> Initiation of the Network

The network can be initiate with pushing a JSON file via Postman

1. Download and install Postman

2. Authentication:

        bearer token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJDb3ZpZDE5IiwiYXBwbGljYXRpb25JZCI6ImZvb2JhciIsImFjdEFzIjpbIk9wZXJhdG9yIl19fQ.7zUo-7pRVr9QO3Y1xzbbWh-Z5n36MeOuQ-x2GwS3M44

3. Send Post instruction 

        POST localhost:7575/v1/create

        Body:

        {
                 "templateId": "Main:Network",
                 "payload": {
                   "operator": "Operator"
                 }
        }

4. You can verify the Network via login in as "Operator" and navigating to the Network left NavBar


<H2> Login and Process

1. Login as "Operator"

        go to  


2. Login as "Atriumhealth"



3. Login as "Alice"


4. Login as "NCHealth"



5. Login as "BCBSNC"





<h2>For quick reference on DAML: </h2>

https://digital-asset.github.io/daml-cheat-sheet/
https://docs.daml.com/1.1.1/
https://docs.daml.com/1.1.1/json-api/index.html


