# DAML-Covid19
DAML implementation for Covid19 Use Cases


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

        note: if you rebuilding, then deleted first your .daml and daml2js folders
4. UX code generation:

        daml codegen js -o daml2js .daml/dist/covid19-0.0.1.dar

5. Change to ui-js directory

        Cd ui-js directory

6. Install User interface code

        yarn install --force --frozen-lockfile


<h2> Step 2A : Deploying DAML and UX in local environment </h2>

1. Start DAML Sandbox in a new console window

        daml sandbox .daml\dist\Covid19-0.0.1.dar --ledgerid Covid19 --sql-backend-jdbcurl "jdbc:postgresql://localhost/test?user=Bart&password=password"

2. Make Static Content sub-directory 

        mkdir static-content

3. Start JSON-API  in a new console window

daml json-api --ledger-host localhost --ledger-port 6865  --http-port 7575 --max-inbound-message-size 4194304 --package-reload-interval 5s --application-id HTTP-JSON-API-Gateway --static-content "prefix=static,directory=./static-content"  --access-token-file ./token/token   --query-store-jdbc-config "driver=org.postgresql.Driver,url=jdbc:postgresql://localhost:5432/test?&ssl=false,user=Bart,password=password,createSchema=false"

This now links to token authorization file which can be found in ./token directory

Note: In order to be able to retrieve filtered contracts through the JSON-API a new Schema must be created. 
To achieve this, execute the following command before making any transactions in the ledger

daml json-api --ledger-host localhost --ledger-port 6865  --http-port 7575 --max-inbound-message-size 4194304 --package-reload-interval 5s --application-id HTTP-JSON-API-Gateway --static-content "prefix=static,directory=./static-content"  --access-token-file ./token/token   --query-store-jdbc-config "driver=org.postgresql.Driver,url=jdbc:postgresql://localhost:5432/test?&ssl=false,user=Bart,password=password,createSchema=true"

After the command has completed, then you can start up the JSON-API the regular way:

daml json-api --ledger-host localhost --ledger-port 6865  --http-port 7575 --max-inbound-message-size 4194304 --package-reload-interval 5s --application-id HTTP-JSON-API-Gateway --static-content "prefix=static,directory=./static-content"  --access-token-file ./token/token   --query-store-jdbc-config "driver=org.postgresql.Driver,url=jdbc:postgresql://localhost:5432/test?&ssl=false,user=Bart,password=password,createSchema=false"        
         

4. Start Frontend and Backend solution in a new console window in ui-js directory

        cd ui-js

        yarn run start


<h2> Initiation of the Network </h2>

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

<h2> Step 2A : Deploying DAML to ProjectDable </h2>

1. Deploy DAML Dar file  to ProjectDable

        More instrictions can be found here: https://docs.projectdabl.com/quickstart/#home
        
2. Generate new JWT Token for "Operator

        On the Managment Console create Operator as Party
        Select the JWT token for Operator
        
3. Update the Token in the UserContext.js file

        //local environment Token
        // token = '
        
        // ProjectDable Token for Operator
           token  = <JWT Token Here>
           
4. Build and zip up the UI code in ui-js directory

        yarn build
        zip -r ../covid19xxx-ui.zip build

5. Upload and deploy the covid19xxx-ui.zip file to projectdable and the ledger


6. Launch the browser based on the projectdable ledger link

        example: https://nxhgy6yk92nxerri.projectdabl.com/#/login
        






<h2>For quick reference on DAML: </h2>

https://digital-asset.github.io/daml-cheat-sheet/
https://docs.daml.com/1.1.1/
https://docs.daml.com/1.1.1/json-api/index.html


