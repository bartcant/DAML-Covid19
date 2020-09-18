import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

// import axios from 'axios';
import axiosClient from '../../axiosClient';

import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useParty, useLedger, useQuery } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
import vaccinetypes from "./vaccinetypes";


export default function CovidVaccine() {


  const [curcitizen, setCitizen] = React.useState('');
  const healthclinic = useParty();
  const statehealth = "NCHealth";
  const ledger = useLedger();
  const assets = useStreamQuery(Main.VaccineAppointment, () => ({ healthclinic: healthclinic }),);
  const queryResult = useQuery(Main.CitizenRole, () => ({ citizen: curcitizen }), [curcitizen]);

  const [conductModalOpen, setConductModalOpen] = React.useState(false);
  const [curContractId, setContractId] = React.useState('');
  const [vaccinedata, setConductForm] = React.useState({
    vaccinedate: '',
    healthclinic: healthclinic,
    citizen: '',
    statehealth: statehealth,
    vaccinetype: '',
    vaccinenumber: ''
  });


  const handleConductModalOpen = (cid = '', citizen = '') => {
    setContractId(cid);
    setCitizen(citizen);
    setConductModalOpen(true);
    setConductForm({
      ...vaccinedata,
      citizen: citizen
    })
  };

  const handleConductModalClose = () => {
    setConductModalOpen(false);
  };

  const handleConductChange = (idx, event) => {
    setConductForm({
      ...vaccinedata,
      [idx]: event.target.value
    })
  }

  const exercisestartvaccine = function () {



    setConductModalOpen(false);
    const citizen = vaccinedata.citizen;
    console.log("healthclinic : " + healthclinic);
    console.log("citizen : " + vaccinedata.citizen);
    console.log("statehealth : " + statehealth);
    console.log("cid: " + curContractId);
    const operator = "Operator";
    console.log({ healthclinic, vaccinedata });

    console.log("start Ledger Exercise");


    ledger.exercise(Main.VaccineAppointment.Vaccine, curContractId, { vaccinedata, statehealth, citizen, healthclinic, operator });

    console.log("finished Ledger Exercise");

    console.log("connectionId" + JSON.stringify(queryResult.contracts[0].payload.verifiablecredentials.connectionid));
    const connectionId = queryResult.contracts[0].payload.verifiablecredentials.connectionid;
    if (connectionId === '' || connectionId === undefined) {
      alert('Empty ConnectionId');
      return;
    }



    console.log("start Axios here");
    axiosClient.post('/api/issuevaccine', { cid: connectionId, vaccinedata }).then((response) => {

      console.log(response);
    });
  };





  const getVaccineTypes = () => {
    return vaccinetypes.map((each) => {
      return <MenuItem key={each.value} value={each.value}>{each.label}</MenuItem>
    });
  }

  return (

    <>

      <Contracts
        contracts={assets.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Citizen", "payload.citizen"],
          ["Healthclinic", "payload.healthclinic"],
          ["Appointment Date", "payload.appointmentdate2"],
        ]}

        actions={[
          ["Administer Vaccine", (c) => { handleConductModalOpen(c.contractId, c.payload.citizen); }


          ]
        ]}



      />


      <Dialog
        open={conductModalOpen}
        onClose={handleConductModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Vaccine Administration"}</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              label=" Vaccine Date"
              placeholder="Vaccine Date"
              value={vaccinedata.vaccinedate}
              onChange={(e) => handleConductChange('vaccinedate', e)}
            />
          </div>


          <FormControl style={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-helper-label">Vaccine Type</InputLabel>
            <Select
              label="Vaccine Type"
              placeholder="Vaccine Type"
              autoWidth={true}
              value={vaccinedata.vaccinetype}
              onChange={(e) => handleConductChange('vaccinetype', e)}
            >
              {getVaccineTypes()}
            </Select>
          </FormControl>

          <div>
            <TextField
              label="Vaccine Number"
              placeholder="Vaccine Number"
              value={vaccinedata.vaccinenumber}
              onChange={(e) => handleConductChange('vaccinenumber', e)}
            />
          </div>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleConductModalClose} color="primary">
            Cancel
            </Button>
          <Button onClick={() => exercisestartvaccine()} color="primary" autoFocus>
            Administer Vaccine
            </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}
